import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { ContentErrors } from 'vanilla-jsoneditor';
import { createJSONEditor } from 'vanilla-jsoneditor';
import { DefineComponent } from 'vue';
import { EditKeySelection } from 'vanilla-jsoneditor';
import { EditValueSelection } from 'vanilla-jsoneditor';
import { ExtractPropTypes } from 'vue';
import { JSONEditorSelection } from 'vanilla-jsoneditor';
import { JSONParser } from 'vanilla-jsoneditor';
import { JSONPatchDocument } from 'immutable-json-patch';
import { JSONPatchResult } from 'vanilla-jsoneditor';
import { JSONPath } from 'immutable-json-patch';
import { JSONPathParser } from 'vanilla-jsoneditor';
import { MenuItem } from 'vanilla-jsoneditor';
import { Mode } from 'vanilla-jsoneditor';
import { OnChangeStatus } from 'vanilla-jsoneditor';
import { OnClassName } from 'vanilla-jsoneditor';
import { OnRenderMenu } from 'vanilla-jsoneditor';
import { OnRenderValue } from 'vanilla-jsoneditor';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { QueryLanguage } from 'vanilla-jsoneditor';
import { QueryLanguageOptions } from 'vanilla-jsoneditor';
import { Ref } from 'vue';
import { RenderValueComponentDescription } from 'vanilla-jsoneditor';
import { RenderValueProps } from 'vanilla-jsoneditor';
import { RenderValuePropsOptional } from 'vanilla-jsoneditor';
import { SearchResultItem } from 'vanilla-jsoneditor';
import { ValidationError } from 'vanilla-jsoneditor';
import { Validator } from 'vanilla-jsoneditor';
import { ValueNormalization } from 'vanilla-jsoneditor';

export declare type Content = JSONContent | TextContent;

export { ContentErrors }

export { createJSONEditor }

declare const _default: DefineComponent<ExtractPropTypes<    {
    /**
     * ### modelValue: unknown
     * Pass the JSON value or string to be rendered in the JSONEditor.
     * */
    modelValue: PropType<unknown>;
    /**
     * ### value: unknown
     * props value is an alternative to modelValue
     * Pass the JSON value or string to be rendered in the JSONEditor.
     * */
    value: {
        type: PropType<unknown>;
        default: any;
    };
    /**
     * ### json: unknown
     * Pass the JSON value to be rendered in the JSONEditor.
     * */
    json: {
        type: PropType<unknown>;
        default: any;
    };
    /**
     * ### text: string
     * Pass the JSON string to be rendered in the JSONEditor.
     * */
    text: PropType<string>;
    /**
     * ### jsonString: string
     * Same as prop 'text'. Pass the JSON string to be rendered in the JSONEditor.
     * */
    jsonString: PropType<string>;
    /**
     * ### selection: JSONEditorSelection | null.
     * The current selected contents. You can use two-way binding using bind:selection. The tree mode
     * supports MultiSelection, KeySelection, ValueSelection, InsideSelection, or AfterSelection. The
     * table mode supports ValueSelection, and text mode supports TextSelection.
     * */
    selection: {
        type: PropType<JSONEditorSelection | undefined>;
        default: any;
    };
    /**
     * ### mode: 'tree' | 'text' | 'table'.
     * Open the editor in 'tree' mode (default) or 'text' mode (formerly: code mode).
     * */
    mode: {
        type: PropType<TMode>;
        default: string;
    };
    /**
     * ### mainMenuBar: boolean
     * Show the main menu bar. Default value is true.
     * */
    mainMenuBar: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### navigationBar: boolean
     * Show the navigation bar with, where you can see the selected path and navigate through your
     * document from there. Default value is true.
     * */
    navigationBar: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### statusBar: boolean
     * Show a status bar at the bottom of the 'text' editor, showing information about the cursor
     * location and selected contents. Default value is true.
     * */
    statusBar: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### askToFormat: boolean
     * When true (default), the user will be asked whether he/she wants to format the JSON document
     * when a compact document is loaded or pasted in 'text' mode. Only applicable to 'text' mode.
     */
    askToFormat: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### readOnly: boolean
     * Open the editor in read-only mode: no changes can be made, non-relevant buttons are hidden
     * from the menu, and the context menu is not enabled. Default value is false.
     * */
    readOnly: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### indentation: number | string
     * Number of spaces use for indentation when stringifying JSON, or a string to be used as indentation
     * like '\t' to use a tab as indentation, or ' ' to use 4 spaces (which is equivalent to configuring
     * indentation: 4). See also property tabSize.
     * */
    indentation: PropType<string | number>;
    /**
     * ### tabSize: number
     * When indentation is configured as a tab character (indentation: '\t'), tabSize configures how
     * large a tab character is rendered. Default value is 4. Only applicable to text mode.
     * */
    tabSize: PropType<number>;
    /**
     * ### escapeControlCharacters: boolean.
     * False by default. When true, control characters like newline and tab are rendered as escaped
     * characters \n and \t. Only applicable for 'tree' mode, in 'text' mode control characters are
     * always escaped.
     * */
    escapeControlCharacters: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### escapeUnicodeCharacters: boolean.
     * False by default. When true, unicode characters like ☎ and 😀 are rendered escaped
     * like \u260e and \ud83d\ude00.
     * */
    escapeUnicodeCharacters: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### flattenColumns: boolean.
     * True by default. Only applicable to 'table' mode. When true, nested object properties
     * will be displayed each in their own column, with the nested path as column name. When false,
     * nested objects will be rendered inline, and double-clicking them will open them in a popup
     * */
    flattenColumns: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### validator: function (json: unknown): ValidationError[].
     * Validate the JSON document. For example use the built-in JSON Schema validator
     * powered by Ajv:
     * ```ts
     *  import { createAjvValidator } from 'svelte-jsoneditor'
     *  const validator = createAjvValidator(schema, schemaDefinitions)
     * ```
     * */
    validator: PropType<Validator>;
    /**
     * ### parser: JSON = JSON
     * Configure a custom JSON parser, like lossless-json. By default, the native JSON
     * parser of JavaScript is used. The JSON interface is an object with a parse and
     * stringify function.
     * */
    parser: PropType<JSONParser>;
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
    validationParser: PropType<JSONParser>;
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
    pathParser: PropType<JSONPathParser>;
    /**
     * ### queryLanguagesIds: QueryLanguageId[].
     * Configure one or multiple query language that can be used in the Transform modal.
     * An array of available query languages id's
     * [javascript', 'lodash', 'jmespath']
     * */
    queryLanguagesIds: PropType<QueryLanguageId[]>;
    /**
     * ### queryLanguageId: string.
     * The id of the currently selected query language.
     * 'javascript' | 'lodash' | 'jmespath'
     * */
    queryLanguageId: PropType<QueryLanguageId>;
    /**
     * ### onClassName(path: Path, value: any): string | undefined.
     * Add a custom class name to specific nodes, based on their path and/or value.
     * */
    onClassName: PropType<OnClassName>;
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
    onRenderValue: PropType<OnRenderValue>;
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
    onRenderMenu: PropType<OnRenderMenu>;
    /**
     * ### height: string | number
     * Height of render container
     * */
    height: PropType<string | number>;
    /**
     * ### fullWidthButton: boolean
     * Show full screen button
     * */
    fullWidthButton: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### darkTheme: boolean
     * Switch to dark theme
     * */
    darkTheme: {
        type: PropType<boolean>;
        default: any;
    };
}>, {
    max: Ref<boolean, boolean>;
    getHeight: ComputedRef<    {
        height: string;
    } | {
        height?: undefined;
    }>;
    container: Ref<HTMLDivElement, HTMLDivElement>;
    darkThemeStyle: ComputedRef<boolean>;
    fallbackSlot: Ref<boolean, boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:modelValue" | "update:json" | "update:text" | "update:jsonString" | "update:selection" | "change" | "error" | "change-mode" | "update:mode" | "change-query-language" | "focus" | "blur")[], "update:modelValue" | "update:json" | "update:text" | "update:jsonString" | "update:selection" | "change" | "error" | "change-mode" | "update:mode" | "change-query-language" | "focus" | "blur", PublicProps, Readonly<ExtractPropTypes<    {
    /**
     * ### modelValue: unknown
     * Pass the JSON value or string to be rendered in the JSONEditor.
     * */
    modelValue: PropType<unknown>;
    /**
     * ### value: unknown
     * props value is an alternative to modelValue
     * Pass the JSON value or string to be rendered in the JSONEditor.
     * */
    value: {
        type: PropType<unknown>;
        default: any;
    };
    /**
     * ### json: unknown
     * Pass the JSON value to be rendered in the JSONEditor.
     * */
    json: {
        type: PropType<unknown>;
        default: any;
    };
    /**
     * ### text: string
     * Pass the JSON string to be rendered in the JSONEditor.
     * */
    text: PropType<string>;
    /**
     * ### jsonString: string
     * Same as prop 'text'. Pass the JSON string to be rendered in the JSONEditor.
     * */
    jsonString: PropType<string>;
    /**
     * ### selection: JSONEditorSelection | null.
     * The current selected contents. You can use two-way binding using bind:selection. The tree mode
     * supports MultiSelection, KeySelection, ValueSelection, InsideSelection, or AfterSelection. The
     * table mode supports ValueSelection, and text mode supports TextSelection.
     * */
    selection: {
        type: PropType<JSONEditorSelection | undefined>;
        default: any;
    };
    /**
     * ### mode: 'tree' | 'text' | 'table'.
     * Open the editor in 'tree' mode (default) or 'text' mode (formerly: code mode).
     * */
    mode: {
        type: PropType<TMode>;
        default: string;
    };
    /**
     * ### mainMenuBar: boolean
     * Show the main menu bar. Default value is true.
     * */
    mainMenuBar: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### navigationBar: boolean
     * Show the navigation bar with, where you can see the selected path and navigate through your
     * document from there. Default value is true.
     * */
    navigationBar: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### statusBar: boolean
     * Show a status bar at the bottom of the 'text' editor, showing information about the cursor
     * location and selected contents. Default value is true.
     * */
    statusBar: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### askToFormat: boolean
     * When true (default), the user will be asked whether he/she wants to format the JSON document
     * when a compact document is loaded or pasted in 'text' mode. Only applicable to 'text' mode.
     */
    askToFormat: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### readOnly: boolean
     * Open the editor in read-only mode: no changes can be made, non-relevant buttons are hidden
     * from the menu, and the context menu is not enabled. Default value is false.
     * */
    readOnly: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### indentation: number | string
     * Number of spaces use for indentation when stringifying JSON, or a string to be used as indentation
     * like '\t' to use a tab as indentation, or ' ' to use 4 spaces (which is equivalent to configuring
     * indentation: 4). See also property tabSize.
     * */
    indentation: PropType<string | number>;
    /**
     * ### tabSize: number
     * When indentation is configured as a tab character (indentation: '\t'), tabSize configures how
     * large a tab character is rendered. Default value is 4. Only applicable to text mode.
     * */
    tabSize: PropType<number>;
    /**
     * ### escapeControlCharacters: boolean.
     * False by default. When true, control characters like newline and tab are rendered as escaped
     * characters \n and \t. Only applicable for 'tree' mode, in 'text' mode control characters are
     * always escaped.
     * */
    escapeControlCharacters: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### escapeUnicodeCharacters: boolean.
     * False by default. When true, unicode characters like ☎ and 😀 are rendered escaped
     * like \u260e and \ud83d\ude00.
     * */
    escapeUnicodeCharacters: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### flattenColumns: boolean.
     * True by default. Only applicable to 'table' mode. When true, nested object properties
     * will be displayed each in their own column, with the nested path as column name. When false,
     * nested objects will be rendered inline, and double-clicking them will open them in a popup
     * */
    flattenColumns: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### validator: function (json: unknown): ValidationError[].
     * Validate the JSON document. For example use the built-in JSON Schema validator
     * powered by Ajv:
     * ```ts
     *  import { createAjvValidator } from 'svelte-jsoneditor'
     *  const validator = createAjvValidator(schema, schemaDefinitions)
     * ```
     * */
    validator: PropType<Validator>;
    /**
     * ### parser: JSON = JSON
     * Configure a custom JSON parser, like lossless-json. By default, the native JSON
     * parser of JavaScript is used. The JSON interface is an object with a parse and
     * stringify function.
     * */
    parser: PropType<JSONParser>;
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
    validationParser: PropType<JSONParser>;
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
    pathParser: PropType<JSONPathParser>;
    /**
     * ### queryLanguagesIds: QueryLanguageId[].
     * Configure one or multiple query language that can be used in the Transform modal.
     * An array of available query languages id's
     * [javascript', 'lodash', 'jmespath']
     * */
    queryLanguagesIds: PropType<QueryLanguageId[]>;
    /**
     * ### queryLanguageId: string.
     * The id of the currently selected query language.
     * 'javascript' | 'lodash' | 'jmespath'
     * */
    queryLanguageId: PropType<QueryLanguageId>;
    /**
     * ### onClassName(path: Path, value: any): string | undefined.
     * Add a custom class name to specific nodes, based on their path and/or value.
     * */
    onClassName: PropType<OnClassName>;
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
    onRenderValue: PropType<OnRenderValue>;
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
    onRenderMenu: PropType<OnRenderMenu>;
    /**
     * ### height: string | number
     * Height of render container
     * */
    height: PropType<string | number>;
    /**
     * ### fullWidthButton: boolean
     * Show full screen button
     * */
    fullWidthButton: {
        type: PropType<boolean>;
        default: any;
    };
    /**
     * ### darkTheme: boolean
     * Switch to dark theme
     * */
    darkTheme: {
        type: PropType<boolean>;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:json"?: (...args: any[]) => any;
    "onUpdate:text"?: (...args: any[]) => any;
    "onUpdate:jsonString"?: (...args: any[]) => any;
    "onUpdate:selection"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    "onChange-mode"?: (...args: any[]) => any;
    "onUpdate:mode"?: (...args: any[]) => any;
    "onChange-query-language"?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
}>, {
    selection: JSONEditorSelection;
    mainMenuBar: boolean;
    navigationBar: boolean;
    statusBar: boolean;
    askToFormat: boolean;
    readOnly: boolean;
    escapeControlCharacters: boolean;
    escapeUnicodeCharacters: boolean;
    flattenColumns: boolean;
    mode: TMode;
    fullWidthButton: boolean;
    darkTheme: boolean;
    value: any;
    json: any;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;

export { EditKeySelection }

export { EditValueSelection }

export declare type JSONContent = {
    json: JSONValue;
};

declare interface JSONEditorOptions {
    readOnly?: boolean;
    indentation?: number | string;
    tabSize?: number;
    selection?: JSONEditorSelection;
    mode?: TMode;
    mainMenuBar?: boolean;
    navigationBar?: boolean;
    statusBar?: boolean;
    askToFormat?: boolean;
    escapeControlCharacters?: boolean;
    escapeUnicodeCharacters?: boolean;
    flattenColumns?: boolean;
    validator?: Validator;
    parser?: JSONParser;
    validationParser?: JSONParser;
    pathParser?: JSONPathParser;
    queryLanguagesIds?: QueryLanguageId[];
    queryLanguageId?: QueryLanguageId;
    onRenderValue?: OnRenderValue;
    onClassName?: OnClassName;
    onRenderMenu?: OnRenderMenu;
    height?: string | number;
    fullWidthButton?: boolean;
    darkTheme?: boolean;
}

export declare const JsonEditorPlugin: Plugin_2<Params>;

export { JSONEditorSelection }

export { JSONParser }

export { JSONPatchDocument }

export { JSONPatchResult }

export { JSONPath }

export { JSONPathParser }

export declare type JSONValue = unknown;

export { MenuItem }

export { Mode }

export { OnChangeStatus }

export { OnClassName }

export { OnRenderMenu }

export { OnRenderValue }

export declare interface Params {
    componentName?: string;
    options?: JSONEditorOptions;
}

export declare type Path = JSONPath;

export { QueryLanguage }

export declare type QueryLanguageId = 'javascript' | 'lodash' | 'jmespath' | 'jsonquery' | 'jsonpath';

export { QueryLanguageOptions }

export declare const renderJSONSchemaEnum: () => void;

export declare const renderValue: () => void;

export { RenderValueComponentDescription }

export { RenderValueProps }

export { RenderValuePropsOptional }

export { SearchResultItem }

export declare type TextContent = {
    text: string;
};

declare type TMode = 'text' | 'tree' | 'table';

export { ValidationError }

export { Validator }

export { ValueNormalization }

export { }
