<template>
  <div
    class="vue-ts-json-editor"
    :class="{'vue-ts-json-editor--max-box': max, 'jse-theme-dark': darkThemeStyle}"
    :style="getHeight"
    ref="container"
    @keydown.stop
  >
    <slot v-if="fallbackSlot" />
  </div>
</template>

<script lang="ts">
import type {
  JSONValue,
  QueryLanguage,
  JSONPatchResult,
  OnClassName,
  OnRenderValue,
  OnRenderMenu,
  Validator,
  Mode,
  MenuItem,
  JSONEditorPropsOptional,
} from 'vanilla-jsoneditor';
import {
  defineComponent,
  inject,
  ref,
  reactive,
  computed,
  watch,
  nextTick,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import type {PropType} from 'vue';
import {pickDefinedProps, fullWidthIcon} from './utils';
import type {JSONEditorOptions, Content, QueryLanguageId} from '@/types';

interface QueryLanguagesBuffer {
  javascript?: QueryLanguage;
  lodash?: QueryLanguage;
  jmespath?: QueryLanguage;
}

export default defineComponent({
  name: 'JsonEditor',

  props: {
    /**
     * ### modelValue: JSONValue | string
     * Pass the JSON value or string to be rendered in the JSONEditor.
     * */
    modelValue: [Object, Array, Number, String, Boolean, String, null] as PropType<JSONValue | string>,
    /**
     * ### json: JSONValue
     * Pass the JSON value to be rendered in the JSONEditor.
     * */
    json: [Object, Array, Number, String, Boolean, null] as PropType<JSONValue>,
    /**
     * ### jsonString: string
     * DEPRECATED!!!
     * Pass the JSON string to be rendered in the JSONEditor.
     * */
    jsonString: String,
    /**
     * ### mode: 'tree' | 'text'.
     * DEPRECATED!!!
     * Open the editor in 'tree' mode (default) or 'text' mode (formerly: code mode).
     * */
    mode: {
      type: String as PropType<Mode>,
      default: 'tree',
      validator: (value: string): boolean => ['tree', 'text'].includes(value as string),
    },
    /**
     * ### mainMenuBar: boolean
     * Show the main menu bar. Default value is true.
     * */
    mainMenuBar: {
      type: Boolean,
      default: undefined,
    },
    /**
     * ### navigationBar: boolean
     * Show the navigation bar with, where you can see the selected path and navigate through your
     * document from there. Default value is true.
     * */
    navigationBar: {
      type: Boolean,
      default: undefined,
    },
    /**
     * ### statusBar: boolean
     * Show a status bar at the bottom of the 'text' editor, showing information about the cursor
     * location and selected contents. Default value is true.
     * */
    statusBar: {
      type: Boolean,
      default: undefined,
    },
    /**
     * ### readOnly: boolean
     * Open the editor in read-only mode: no changes can be made, non-relevant buttons are hidden
     * from the menu, and the context menu is not enabled. Default value is false.
     * */
    readOnly: {
      type: Boolean,
      default: undefined,
    },
    /**
     * ### indentation: number | string
     * Number of spaces use for indentation when stringifying JSON, or a string to be used as indentation
     * like '\t' to use a tab as indentation, or ' ' to use 4 spaces (which is equivalent to configuring
     * indentation: 4). See also property tabSize.
     * */
    indentation: [String, Number],
    /**
     * ### tabSize: number
     * When indentation is configured as a tab character (indentation: '\t'), tabSize configures how
     * large a tab character is rendered. Default value is 4. Only applicable to text mode.
     * */
    tabSize: Number,
    /**
     * ### escapeControlCharacters: boolean.
     * False by default. When true, control characters like newline and tab are rendered as escaped
     * characters \n and \t. Only applicable for 'tree' mode, in 'text' mode control characters are
     * always escaped.
     * */
    escapeControlCharacters: {
      type: Boolean,
      default: undefined,
    },
    /**
     * ### escapeUnicodeCharacters: boolean.
     * False by default. When true, unicode characters like ☎ and 😀 are rendered escaped
     * like \u260e and \ud83d\ude00.
     * */
    escapeUnicodeCharacters: {
      type: Boolean,
      default: undefined,
    },
    /**
     * ### validator: function (json: JSONValue): ValidationError[].
     * Validate the JSON document. For example use the built-in JSON Schema validator
     * powered by Ajv:
     * ```ts
     *  import { createAjvValidator } from 'svelte-jsoneditor'
     *  const validator = createAjvValidator(schema, schemaDefinitions)
     * ```
     * */
    validator: Function as PropType<Validator>,
    /**
     * ### queryLanguages: QueryLanguage[].
     * Configure one or multiple query language that can be used in the Transform modal.
     * An array of available query languages id's
     * [javascript', 'lodash', 'jmespath']
     * */
    queryLanguagesIds: Array as PropType<QueryLanguageId[]>,
    /**
     * ### queryLanguageId: string.
     * The id of the currently selected query language.
     * 'javascript' | 'lodash' | 'jmespath'
     * */
    queryLanguageId: String as PropType<QueryLanguageId>,
    /**
     * ### onClassName(path: Path, value: any): string | undefined.
     * Add a custom class name to specific nodes, based on their path and/or value.
     * */
    onClassName: Function as PropType<OnClassName>,
    /**
     * ### onRenderValue(props: RenderValueProps) : RenderValueComponentDescription[]
     *
     * ## EXPERIMENTAL! This API will most likely change in future versions.
     * Customize rendering of the values. By default, renderValue is used, which renders a value as an
     * editable div and depending on the value can also render a boolean toggle, a color picker, and a
     * timestamp tag. Multiple components can be rendered alongside each other, like the boolean toggle
     * and color picker being rendered left from the editable div. Built in value renderer components:
     *
     *  > EditableValue, ReadonlyValue, BooleanToggle, ColorPicker, TimestampTag, EnumValue.
     *
     *
     * ```ts
     *  import { renderJSONSchemaEnum, renderValue } from 'svelte-jsoneditor'
     *
     *  function onRenderValue(props) {
     *    // use the enum renderer, and fallback on the default renderer
     *    return renderJSONSchemaEnum(props, schema, schemaDefinitions) || renderValue(props)
     *  }
     * ```
     * */
    onRenderValue: Function as PropType<OnRenderValue>,
    /**
     * ### onRenderMenu(mode: 'tree' | 'text', items: MenuItem[]) : MenuItem[] | undefined.
     * Callback which can be used to make changes to the menu items. New items can be added, or
     * existing items can be removed or reorganized. When the function returns undefined,
     * the original items will be applied.
     *
     *  A menu item MenuItem can be one of the following types:
     *
     *  - Button:
     *  ```ts
     *  interface MenuButtonItem {
     *    onClick: () => void
     *    icon?: FontAwesomeIcon
     *    text?: string
     *    title?: string
     *    className?: string
     *    disabled?: boolean
     *  }
     *  ```
     *
     *  - Separator (gray vertical line between a group of items):
     *  ```ts
     *    interface MenuSeparatorItem {
     *      separator: true
     *    }
     *  ```
     *
     *  - Space (fills up empty space):
     *  ```ts
     *    interface MenuSpaceItem {
     *      space: true
     *    }
     *  ```
     * */
    onRenderMenu: Function as PropType<OnRenderMenu>,
    /**
     * ### height: string | number
     * Height of render container
     * */
    height: [String, Number],
    /**
     * ### fullWidthButton: boolean
     * Show full screen button
     * */
    fullWidthButton: {
      type: Boolean,
      default: undefined,
    },
    /**
     * ### darkTheme: boolean
     * Switch to dark theme
     * */
    darkTheme: {
      type: Boolean,
      default: undefined,
    },
  },

  emits: [
    'update:modelValue',
    'update:json',
    'update:jsonString',
    'change',
    'error',
    'change-mode',
    'update:mode',
    'change-query-language',
    'focus',
    'blur',
  ],

  setup(props, {expose, emit}) {
    const pluginOptions: JSONEditorOptions = inject('jsonEditorOptions', {});

    const container = ref<HTMLDivElement>();
    const fullWidthButton = ref<HTMLButtonElement>(null);

    const max = ref<boolean>(false);
    const blockUpdate = ref(false);
    const blockChange = ref(false);
    const mode = ref('tree');

    const editor = ref(null);

    const getHeight = computed(() => {
      const height = props.height || pluginOptions?.height;

      if (height && !max.value) {
        return {
          height: height + 'px',
        };
      }
      return {};
    });

    const darkThemeStyle = computed<boolean>(() => {
      return props.darkTheme || pluginOptions?.darkTheme;
    });

    const queryLanguagesIds = computed<QueryLanguageId[]>(() => {
      return props.queryLanguagesIds || pluginOptions?.queryLanguagesIds;
    });

    const queryLanguageId = computed<QueryLanguageId>(() => {
      return props.queryLanguageId || pluginOptions?.queryLanguageId;
    });

    const queryLanguagesBuffer = reactive<QueryLanguagesBuffer>({});

    const makeQueryLanguages = async (): Promise<QueryLanguage[] | undefined> => {
      if (
        typeof window === 'undefined' ||
        typeof queryLanguagesIds.value === 'undefined' ||
        !queryLanguagesIds.value?.length
      ) {
        return;
      }

      for (const languageId of queryLanguagesIds.value) {
        if (!queryLanguagesBuffer[languageId]) {
          switch (languageId) {
            case 'javascript': {
              const {javascriptQueryLanguage} = await import('vanilla-jsoneditor');
              queryLanguagesBuffer[languageId] = javascriptQueryLanguage;
              break;
            }
            case 'lodash': {
              const {lodashQueryLanguage} = await import('vanilla-jsoneditor');
              queryLanguagesBuffer[languageId] = lodashQueryLanguage;
              break;
            }
            case 'jmespath': {
              const {jmespathQueryLanguage} = await import('vanilla-jsoneditor');
              queryLanguagesBuffer[languageId] = jmespathQueryLanguage;
              break;
            }
            default: {
              break;
            }
          }
        }
      }

      const allQueryLanguages: QueryLanguage[] = Object.values(queryLanguagesBuffer);

      if (allQueryLanguages.length === 0) {
        return;
      }

      return allQueryLanguages;
    };

    const removeFullWidthButton = (): void => {
      if (!fullWidthButton.value) return;

      fullWidthButton.value.removeEventListener('click', onButtonClick);
      fullWidthButton.value = null;
    };

    const setFullWidthButton = async (): Promise<void> => {
      if (typeof window === 'undefined') return;

      const {getElement, createElement} = await import('./full-width-button-handler');
      const {setFullWidthButtonStyle} = await import('./styles-handler');
      await setFullWidthButtonStyle();

      const oldButton = getElement('.jse-full-width');

      const pluginOptionFlag = pluginOptions?.fullWidthButton !== undefined ? pluginOptions?.fullWidthButton : true;

      const fullWidthButtonFlag = props.fullWidthButton !== undefined ? props.fullWidthButton : pluginOptionFlag;

      if (!fullWidthButtonFlag || oldButton) return;

      if (fullWidthButton.value) {
        removeFullWidthButton();
      }

      const menu = getElement('.jse-menu');
      fullWidthButton.value = createElement('button') as HTMLButtonElement;
      fullWidthButton.value.classList.add('jse-full-width');
      fullWidthButton.value.classList.add('jse-button');
      fullWidthButton.value.classList.add('svelte-v4jelk');

      fullWidthButton.value.innerHTML += fullWidthIcon;

      menu.appendChild(fullWidthButton.value);

      fullWidthButton.value.addEventListener('click', onButtonClick);
    };

    const onButtonClick = (): void => {
      max.value = !max.value;

      if (max.value) {
        fullWidthButton.value?.classList.add('jse-full-width--active');
      } else {
        fullWidthButton.value?.classList.remove('jse-full-width--active');
      }
    };

    const expandCollapseAll = (value: boolean): void => {
      if (props.mode === 'text') return;

      editor.value?.expand(() => value);
    };

    const onChange = (content: Content, previousContent: Content, patchResult: JSONPatchResult | null): void => {
      if (blockChange.value) {
        blockChange.value = false;
        return;
      }
      blockUpdate.value = true;

      if (!!content.json) {
        emit('update:json', content.json);
        emit('update:modelValue', content.json);
      }

      if (!!content.text) {
        emit('update:jsonString', content.text);
        emit('update:modelValue', content.text);
      }

      emit('change', content, previousContent, patchResult);
    };

    const onError = (err: Error): void => {
      emit('error', err);
    };

    const onChangeMode = (newMode: Mode): void => {
      emit('change-mode', newMode);
      emit('update:mode', newMode);
    };

    const onChangeQueryLanguage = (queryLanguageId: string): void => {
      emit('change-query-language', queryLanguageId);
    };

    const onFocus = (): void => {
      emit('focus');
    };

    const onBlur = (): void => {
      emit('blur');
    };

    const onRenderMenu: OnRenderMenu = (
      mode: 'tree' | 'text' | 'repair',
      items: MenuItem[]
    ): MenuItem[] | undefined | void => {
      nextTick(() => {
        setFullWidthButton();
      });

      if (typeof props.onRenderMenu === 'function') {
        return props.onRenderMenu(mode, items);
      }

      return items;
    };

    const makeEditorProps = async (): Promise<JSONEditorPropsOptional> => {
      const options = {fullWidthButton: true, ...(pluginOptions || {})};
      const queryLanguages = await makeQueryLanguages();

      return {
        ...pickDefinedProps(options, props),
        queryLanguages,
        queryLanguageId: queryLanguageId.value,
        onChange,
        onError,
        onChangeMode,
        onChangeQueryLanguage,
        onFocus,
        onBlur,
        onRenderMenu,
      };
    };

    const fallbackSlot = ref<boolean>(true);

    const getContent = (): Content => {
      const getJsonContent = (json: any = {}): Content => {
        return {
          json: {...json},
        } as Content;
      };
      const getTextContent = (text: string = ''): Content => {
        return {
          text: text || '',
        } as Content;
      };
      if (props.modelValue) {
        if (typeof props.modelValue === 'string') {
          return getTextContent(props.modelValue) as Content;
        } else {
          return getJsonContent(props.modelValue) as Content;
        }
      }
      if (props.json) {
        return getJsonContent(props.json) as Content;
      }
      if (props.jsonString) {
        return getTextContent(props.jsonString) as Content;
      }
      return getTextContent() as Content;
    };

    const initView = async (): Promise<void> => {
      if (typeof window === 'undefined') return;

      if (!editor.value) {
        const editorProps = await makeEditorProps();
        const {JSONEditor} = await import('vanilla-jsoneditor');
        fallbackSlot.value = false;

        editor.value = new JSONEditor({
          target: container.value,
          props: editorProps,
        });

        editor.value.set(getContent());
      }

      editor.value.focus();
    };

    const updateProps = async (): Promise<void> => {
      const props = await makeEditorProps();
      editor.value.updateProps(props);
    };

    const updateContent = (): void => {
      if (blockUpdate.value) {
        blockUpdate.value = false;
        return;
      }
      blockChange.value = true;
      editor.value.update(getContent());
    };

    const destroyView = (): void => {
      if (editor.value) {
        editor.value.destroy();
        editor.value = null;
      }

      removeFullWidthButton();
    };

    watch(() => props, updateProps, {deep: true});

    watch(() => props.modelValue, updateContent, {deep: true});

    watch(
      () => props.json,
      () => {
        updateContent();
        console.warn('Prop "json" deprecated. Use v-model instead!');
      },
      {deep: true}
    );

    watch(
      () => props.jsonString,
      () => {
        updateContent();
        console.warn('Prop "json" deprecated. Use v-model instead!');
      }
    );

    watch(
      () => props.mode,
      (newMode) => {
        if (newMode !== mode.value) {
          mode.value = newMode;
        }
      }
    );

    watch(
      () => darkThemeStyle.value,
      async (value) => {
        if (!!value) {
          const {setDarkThemeStyle} = await import('./styles-handler');
          await setDarkThemeStyle();
        }
      },
      {immediate: true}
    );

    onMounted(() => {
      nextTick(() => {
        initView();
      });
    });

    onBeforeUnmount(() => {
      destroyView();
    });

    expose({
      $collapseAll(): void {
        expandCollapseAll(false);
      },

      $expandAll(): void {
        expandCollapseAll(true);
      },

      $expand: editor.value?.expand,
      $get: editor.value?.get,
      $set: editor.value?.set,
      $update: editor.value?.update,
      $updateProps: editor.value?.updateProps,
      $refresh: editor.value?.refresh,
      $focus: editor.value?.focus,
      $patch: editor.value?.patch,
      $transform: editor.value?.transform,
      $scrollTo: editor.value?.scrollTo,
      $findElement: editor.value?.findElement,
      $acceptAutoRepair: editor.value?.acceptAutoRepair,
    });

    return {
      max,
      getHeight,
      container,
      darkThemeStyle,
      fallbackSlot,
    };
  },
});
</script>
