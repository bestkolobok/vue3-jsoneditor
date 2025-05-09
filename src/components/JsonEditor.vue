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
  QueryLanguage,
  OnClassName,
  OnRenderValue,
  OnRenderMenu,
  Validator,
  MenuItem,
  RenderMenuContext,
  JSONPathParser,
  JSONParser,
  OnChangeStatus,
  ContentErrors,
  JSONPatchResult,
  JSONEditorSelection,
  Mode,
  JSONEditorPropsOptional,
  TransformModalOptions,
} from 'vanilla-jsoneditor';
import type {JSONPatchDocument, JSONPath} from 'immutable-json-patch';
import {defineComponent, inject, ref, reactive, computed, watch, nextTick, onMounted, onBeforeUnmount} from 'vue';
import type {PropType} from 'vue';
import {pickDefinedProps, fullWidthIcon, watchPropNames, hasProp} from './utils';
import type {JSONEditorOptions, Content, QueryLanguageId, TMode} from '@/types';

interface QueryLanguagesBuffer {
  javascript?: QueryLanguage;
  lodash?: QueryLanguage;
  jmespath?: QueryLanguage;
  jsonquery?: QueryLanguage;
  jsonpath?: QueryLanguage;
}

export default defineComponent({
  name: 'JsonEditor',

  props: {
    /**
     * ### modelValue: unknown
     * Pass the JSON value or string to be rendered in the JSONEditor.
     * */
    modelValue: [Object, Array, Number, String, Boolean, String, null] as PropType<unknown>,

    /**
     * ### value: unknown
     * props value is an alternative to modelValue
     * Pass the JSON value or string to be rendered in the JSONEditor.
     * */
    value: {
      type: [Object, Array, Number, String, Boolean, String, null] as PropType<unknown>,
      default: undefined,
    },

    /**
     * ### json: unknown
     * Pass the JSON value to be rendered in the JSONEditor.
     * */
    json: {
      type: [Object, Array, Number, String, Boolean, null] as PropType<unknown>,
      default: undefined,
    },

    /**
     * ### text: string
     * Pass the JSON string to be rendered in the JSONEditor.
     * */
    text: String as PropType<string>,

    /**
     * ### jsonString: string
     * Same as prop 'text'. Pass the JSON string to be rendered in the JSONEditor.
     * */
    jsonString: String as PropType<string>,

    /**
     * ### selection: JSONEditorSelection | null.
     * The current selected contents. You can use two-way binding using bind:selection. The tree mode
     * supports MultiSelection, KeySelection, ValueSelection, InsideSelection, or AfterSelection. The
     * table mode supports ValueSelection, and text mode supports TextSelection.
     * */
    selection: {
      type: Object as PropType<JSONEditorSelection | undefined>,
      default: undefined,
    },

    /**
     * ### mode: 'tree' | 'text' | 'table'.
     * Open the editor in 'tree' mode (default) or 'text' mode (formerly: code mode).
     * */
    mode: {
      type: String as PropType<TMode>,
      default: 'tree',
    },

    /**
     * ### mainMenuBar: boolean
     * Show the main menu bar. Default value is true.
     * */
    mainMenuBar: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### navigationBar: boolean
     * Show the navigation bar with, where you can see the selected path and navigate through your
     * document from there. Default value is true.
     * */
    navigationBar: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### statusBar: boolean
     * Show a status bar at the bottom of the 'text' editor, showing information about the cursor
     * location and selected contents. Default value is true.
     * */
    statusBar: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### askToFormat: boolean
     * When true (default), the user will be asked whether he/she wants to format the JSON document
     * when a compact document is loaded or pasted in 'text' mode. Only applicable to 'text' mode.
     */
    askToFormat: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### readOnly: boolean
     * Open the editor in read-only mode: no changes can be made, non-relevant buttons are hidden
     * from the menu, and the context menu is not enabled. Default value is false.
     * */
    readOnly: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### indentation: number | string
     * Number of spaces use for indentation when stringifying JSON, or a string to be used as indentation
     * like '\t' to use a tab as indentation, or ' ' to use 4 spaces (which is equivalent to configuring
     * indentation: 4). See also property tabSize.
     * */
    indentation: [String, Number] as PropType<string | number>,

    /**
     * ### tabSize: number
     * When indentation is configured as a tab character (indentation: '\t'), tabSize configures how
     * large a tab character is rendered. Default value is 4. Only applicable to text mode.
     * */
    tabSize: Number as PropType<number>,

    /**
     * ### escapeControlCharacters: boolean.
     * False by default. When true, control characters like newline and tab are rendered as escaped
     * characters \n and \t. Only applicable for 'tree' mode, in 'text' mode control characters are
     * always escaped.
     * */
    escapeControlCharacters: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### escapeUnicodeCharacters: boolean.
     * False by default. When true, unicode characters like ☎ and 😀 are rendered escaped
     * like \u260e and \ud83d\ude00.
     * */
    escapeUnicodeCharacters: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### flattenColumns: boolean.
     * True by default. Only applicable to 'table' mode. When true, nested object properties
     * will be displayed each in their own column, with the nested path as column name. When false,
     * nested objects will be rendered inline, and double-clicking them will open them in a popup
     * */
    flattenColumns: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### validator: function (json: unknown): ValidationError[].
     * Validate the JSON document. For example use the built-in JSON Schema validator
     * powered by Ajv:
     * ```ts
     *  import { createAjvValidator } from 'svelte-jsoneditor'
     *  const validator = createAjvValidator(schema, schemaDefinitions)
     * ```
     * */
    validator: Function as PropType<Validator>,

    /**
     * ### parser: JSON = JSON
     * Configure a custom JSON parser, like lossless-json. By default, the native JSON
     * parser of JavaScript is used. The JSON interface is an object with a parse and
     * stringify function.
     * */
    parser: Object as PropType<JSONParser>,

    /**
     * ### validationParser: JSONParser = JSON
     * Only applicable when a validator is provided. This is the same as parser, except
     * that this parser is used to parse the data before sending it to the validator.
     * Configure a custom JSON parser that is used to parse JSON before passing it to the
     * validator. By default, the built-in JSON parser is used. When passing a custom
     * validationParser, make sure the output of the parser is supported by the configured
     * validator. So, when the validationParser can output bigint numbers or other numeric
     * types, the validator must also support that. In tree mode, when parser is not equal
     * to validationParser, the JSON document will be converted before it is passed to the
     * validator via validationParser.parse(parser.stringify(json))
     * */
    validationParser: Object as PropType<JSONParser>,

    /**
     * ### pathParser: JSONPathParser
     * An optional object with a parse and stringify method to parse and stringify a JSONPath,
     * which is an array with property names. The pathParser is used in the path editor in the
     * navigation bar, which is opened by clicking the edit button on the right side of the
     * navigation bar. The pathParser.parse function is allowed to throw an Error when the input
     * is invalid. By default, a JSON Path notation is used, which looks like $.data[2].nested.property.
     * Alternatively, it is possible to use for example a JSON Pointer notation
     * like /data/2/nested/property or something custom-made. Related helper functions:
     * parseJSONPath and stringifyJSONPath, parseJSONPointer and compileJSONPointer
     * */
    pathParser: Object as PropType<JSONPathParser>,

    /**
     * ### queryLanguagesIds: QueryLanguageId[].
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
     * ### onRenderMenu(items: MenuItem[], context: { mode: 'tree' | 'text' | 'table', modal: boolean }) : MenuItem[] | undefined.
     * Callback which can be used to make changes to the menu items. New items can be added, or existing items can be removed or
     * reorganized. When the function returns undefined, the original items will be applied. Using the context values mode and
     * modal, different actions can be taken depending on the mode of the editor and whether the editor is rendered inside a
     * modal or not.
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
    height: [String, Number] as PropType<string | number>,

    /**
     * ### fullWidthButton: boolean
     * Show full screen button
     * */
    fullWidthButton: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },

    /**
     * ### darkTheme: boolean
     * Switch to dark theme
     * */
    darkTheme: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
  },

  emits: [
    'update:modelValue',
    'update:json',
    'update:text',
    'update:jsonString',
    'update:selection',
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
    const fullWidthButton = ref<HTMLButtonElement | null>(null);

    const max = ref(false);
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

    const darkThemeStyle = computed(() => {
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
            // Add these new languages:
            case 'jsonquery': {
              const {jsonQueryLanguage} = await import('vanilla-jsoneditor');
              queryLanguagesBuffer[languageId] = jsonQueryLanguage;
              break;
            }
            case 'jsonpath': {
              const {jsonpathQueryLanguage} = await import('vanilla-jsoneditor');
              queryLanguagesBuffer[languageId] = jsonpathQueryLanguage;
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

    const removeFullWidthButton = () => {
      if (!fullWidthButton.value) return;

      fullWidthButton.value.removeEventListener('click', onButtonClick);
      fullWidthButton.value = null;
    };

    const setFullWidthButton = async () => {
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
      const menuSvelteClass = Array.from(menu.classList).find((menuClass) => menuClass.startsWith('svelte-'));

      fullWidthButton.value = createElement('button') as HTMLButtonElement;
      fullWidthButton.value.classList.add('jse-full-width');
      fullWidthButton.value.classList.add('jse-button');
      fullWidthButton.value.classList.add(menuSvelteClass);

      fullWidthButton.value.innerHTML += fullWidthIcon;

      menu.appendChild(fullWidthButton.value);

      fullWidthButton.value.addEventListener('click', onButtonClick);
    };

    const onButtonClick = () => {
      max.value = !max.value;

      if (max.value) {
        fullWidthButton.value?.classList.add('jse-full-width--active');
      } else {
        fullWidthButton.value?.classList.remove('jse-full-width--active');
      }
    };

    const onChange = (content: Content, previousContent: Content, status: OnChangeStatus) => {
      if (blockChange.value) {
        blockChange.value = false;
        return;
      }
      blockUpdate.value = true;

      if (hasProp(content, 'json')) {
        emit('update:json', content.json);
        emit('update:modelValue', content.json);
      }

      if (hasProp(content, 'text')) {
        emit('update:text', content.text);
        emit('update:jsonString', content.text);
        emit('update:modelValue', content.text);
      }

      emit('change', content, previousContent, status);
    };

    const onError = (err: Error) => {
      emit('error', err);
    };

    const onChangeMode = (newMode: Mode) => {
      mode.value = newMode;
      emit('change-mode', newMode);
      emit('update:mode', newMode);
    };

    const onChangeQueryLanguage = (queryLanguageId: QueryLanguageId) => {
      emit('change-query-language', queryLanguageId);
    };

    const onFocus = () => {
      emit('focus');
    };

    const onBlur = () => {
      emit('blur');
    };

    const onSelect = (selection: JSONEditorSelection | undefined) => {
      emit('update:selection', selection);
    };

    const onRenderMenu: OnRenderMenu = (items: MenuItem[], context: RenderMenuContext): MenuItem[] | undefined => {
      nextTick(() => {
        setFullWidthButton();
      });

      if (typeof props.onRenderMenu === 'function') {
        return props.onRenderMenu(items, context);
      }

      return items;
    };

    const makeEditorProps = async (): Promise<Record<string, any>> => {
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
        onSelect,
      };
    };

    const fallbackSlot = ref<boolean>(true);

    const getContent = (): Content => {
      const getJsonContent = (json: any = {}): Content => {
        if (
          json === null ||
          typeof json === 'undefined' ||
          typeof json === 'number' ||
          typeof json === 'bigint' ||
          typeof json === 'string' ||
          typeof json === 'boolean'
        ) {
          return {
            json: json,
          } satisfies Content;
        }
        if (Array.isArray(json)) {
          return {
            json: [...json],
          } satisfies Content;
        }
        return {
          json: {...json},
        } satisfies Content;
      };
      const getTextContent = (text: string = ''): Content => {
        return {
          text: text || '',
        } satisfies Content;
      };

      const propValue = props.modelValue || props.value;

      if (propValue) {
        if (mode.value === 'text' && typeof propValue === 'string') {
          return getTextContent(propValue) satisfies Content;
        } else {
          return getJsonContent(propValue) satisfies Content;
        }
      }
      if (typeof props.json !== 'undefined') {
        return getJsonContent(props.json) satisfies Content;
      }
      if (typeof props.text !== 'undefined') {
        return getTextContent(props.text) satisfies Content;
      }
      if (typeof props.jsonString !== 'undefined') {
        return getTextContent(props.jsonString) satisfies Content;
      }
      return getTextContent() satisfies Content;
    };

    const initView = async () => {
      if (typeof window === 'undefined') return;

      if (!editor.value) {
        const editorProps = await makeEditorProps();
        const {createJSONEditor} = await import('vanilla-jsoneditor');
        fallbackSlot.value = false;

        editor.value = createJSONEditor({
          target: container.value,
          props: editorProps,
        });
        editor.value.set(getContent());
      }

      editor.value.focus();
    };

    const updateProps = async () => {
      const props = await makeEditorProps();
      editor.value?.updateProps(props);
    };

    const updateContent = () => {
      if (blockUpdate.value) {
        blockUpdate.value = false;
        return;
      }
      blockChange.value = true;
      editor.value?.update(getContent());
    };

    const destroyView = () => {
      if (editor.value) {
        editor.value.destroy();
        editor.value = null;
      }

      removeFullWidthButton();
    };

    watch(
      [
        ...watchPropNames.map((propName) => {
          return () => props[propName];
        }),
      ],
      updateProps,
      {deep: true}
    );

    watch(
      [() => props.modelValue, () => props.value, () => props.json, () => props.text, () => props.jsonString],
      updateContent,
      {
        deep: true,
      }
    );

    watch(
      () => props.mode,
      (newMode) => {
        if (newMode !== mode.value) {
          mode.value = newMode;
          updateProps();
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
      $collapseAll() {
        if (mode.value !== 'tree') return;
        editor.value?.collapse([], true);
      },
      $expandAll() {
        if (mode.value !== 'tree') return;
        editor.value?.expand([]);
      },
      $expand(pathOrCallback: JSONPath | ((path: JSONPath) => boolean), callback?: (path: JSONPath) => boolean) {
        if (typeof pathOrCallback === 'function') {
          // Old API: only callback provided
          editor.value?.expand([], pathOrCallback);
          console.warn(
            'In new API you must pass the path before the callback!!! Backwards compatibility is deprecated and will be discontinued in the future'
          );
        } else {
          // New API: path and optional callback
          editor.value?.expand(pathOrCallback, callback);
        }
      },
      $get(): Content {
        return editor.value?.get();
      },
      $set(content: Content) {
        editor.value?.set(content);
      },
      $update(content: Content) {
        editor.value?.update(content);
      },
      $updateProps(props: JSONEditorPropsOptional) {
        editor.value?.updateProps(props);
      },
      async $refresh() {
        await editor.value?.refresh();
      },
      $focus() {
        editor.value?.focus();
      },
      async $destroy() {
        await editor.value?.destroy();
      },
      $patch(operations: JSONPatchDocument): JSONPatchResult {
        return editor.value?.patch(operations);
      },
      $transform(options?: TransformModalOptions) {
        editor.value?.transform(options);
      },
      async $scrollTo(path: JSONPath) {
        await editor.value?.scrollTo(path);
      },
      $findElement(path: JSONPath): HTMLElement | undefined {
        return editor.value?.findElement(path);
      },
      $acceptAutoRepair(): Content {
        return editor.value?.acceptAutoRepair();
      },
      $validate(): ContentErrors | undefined {
        return editor.value?.validate();
      },
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
