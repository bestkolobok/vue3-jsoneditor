<template>
  <div
    class="vue-ts-json-editor"
    :class="{'vue-ts-json-editor--max-box': max, 'jse-theme-dark': darkThemeStyle}"
    :style="getHeight"
    ref="container"
    @keydown.stop
  ></div>
</template>

<script lang="ts">
import type {
  JSONData,
  QueryLanguage,
  JSONPatchResult,
  OnClassName,
  OnRenderValue,
  OnRenderMenu,
  Validator,
  Mode,
  MenuItem,
} from 'vanilla-jsoneditor';
import {defineComponent, inject, ref, computed, watch, nextTick, onMounted, onBeforeUnmount} from 'vue';
import type {PropType} from 'vue';
import {pickDefinedProps, fullWidthIcon} from './utils';
import type {JSONEditorOptions, Content} from '@/types';
import 'vanilla-jsoneditor/themes/jse-theme-dark.css';

export default defineComponent({
  name: 'JsonEditor',

  props: {
    /**
     * ### json: JSONData
     * Pass the JSON contents to be rendered in the JSONEditor.
     * Only one of the json or jsonString must be defined.
     * */
    json: [Object, Array, Number, String, Boolean] as PropType<JSONData>,
    /**
     * ### jsonString: string
     * Pass the JSON contents to be rendered in the JSONEditor.
     * Only one of the json or jsonString must be defined.
     * */
    jsonString: String,
    /**
     * ### mode: 'tree' | 'text'.
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
     * ### validator: function (json: JSONData): ValidationError[].
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
     * The library comes with three languages:
     * ```ts
     *  import {
     *    jmespathQueryLanguage,
     *    lodashQueryLanguage,
     *    javascriptQueryLanguage
     *  } from 'svelte-jsoneditor'
     *
     *  const allQueryLanguages = [jmespathQueryLanguage, lodashQueryLanguage, javascriptQueryLanguage]
     * ```
     * */
    queryLanguages: Array as PropType<QueryLanguage[]>,
    /**
     * ### queryLanguageId: string.
     * The id of the currently selected query language.
     * */
    queryLanguageId: String,
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
    'update:json',
    'update:jsonString',
    'change',
    'error',
    'change-mode',
    'change-query-language',
    'focus',
    'blur',
  ],

  setup(props, {expose, emit}) {
    const pluginOptions: JSONEditorOptions = inject('jsonEditorOptions', {});

    const max = ref<boolean>(false);
    const container = ref<HTMLDivElement>();
    const fullWidthButton = ref<HTMLButtonElement>(null);

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

    const content = computed(() => {
      return {
        json: props.json,
        text: props.jsonString,
      };
    });

    const darkThemeStyle = computed(() => {
      return props.darkTheme || pluginOptions?.darkTheme;
    });

    const removeFullWidthButton = (): void => {
      if (!fullWidthButton.value) return;

      fullWidthButton.value.removeEventListener('click', onButtonClick);
      fullWidthButton.value = null;
    };

    const setFullWidthButton = (): void => {
      const oldButton = document.querySelector('.jse-full-width');

      const pluginOptionFlag = pluginOptions?.fullWidthButton !== undefined ? pluginOptions?.fullWidthButton : true;

      const fullWidthButtonFlag = props.fullWidthButton !== undefined ? props.fullWidthButton : pluginOptionFlag;

      if (!fullWidthButtonFlag || oldButton) return;

      if (fullWidthButton.value) {
        removeFullWidthButton();
      }

      const menu = document.querySelector('.jse-menu');
      fullWidthButton.value = document.createElement('button');
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
      if (!!content.json) {
        emit('update:json', content.json);
      }

      if (!!content.text) {
        emit('update:jsonString', content.text);
      }

      emit('change', content, previousContent, patchResult);
    };

    const onError = (err: Error): void => {
      emit('error', err);
    };

    const onChangeMode = (mode: Mode): void => {
      emit('change-mode', mode);
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

    const makeEditorProps = () => {
      const options = {fullWidthButton: true, ...(pluginOptions || {})};

      return {
        ...pickDefinedProps(options, props),
        content: content.value,
        onChange,
        onError,
        onChangeMode,
        onChangeQueryLanguage,
        onFocus,
        onBlur,
        onRenderMenu,
      };
    };

    const initView = async (): Promise<void> => {
      if (typeof window === 'undefined') return;

      if (!editor.value) {
        const {JSONEditor} = await import('vanilla-jsoneditor');

        editor.value = new JSONEditor({
          target: container.value,
          props: makeEditorProps(),
        });
      }

      editor.value.focus();
    };

    const updateProps = (): void => {
      editor.value.updateProps(makeEditorProps());
    };

    const updateContent = (): void => {
      editor.value.set(content.value);
    };

    const destroyView = (): void => {
      if (editor.value) {
        editor.value.destroy();
        editor.value = null;
      }

      removeFullWidthButton();
    };

    watch(props, updateProps);

    watch(() => props.json, updateContent, {deep: true});

    watch(() => props.jsonString, updateContent);

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
      content,
      darkThemeStyle,
    };
  },
});
</script>

<style lang="scss">
.vue-ts-json-editor {
  $root: &;
  min-width: 300px;
  width: 100%;

  &--max-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
  }

  .jse-menu {
    .jse-full-width {
      display: flex;

      &--active {
        background-color: rgba(255, 255, 255, 0.22) !important;
        border-color: rgba(255, 255, 255, 0.6) !important;
      }
    }
  }
}
</style>
