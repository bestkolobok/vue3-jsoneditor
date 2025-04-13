import type {
  Validator,
  OnRenderValue,
  OnClassName,
  OnRenderMenu,
  JSONEditorSelection,
  JSONParser,
  JSONPathParser,
} from 'vanilla-jsoneditor';

export type TMode = 'text' | 'tree' | 'table';

export interface JSONEditorOptions {
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

export type JSONValue = unknown;

export type TextContent = {
  text: string;
};

export type JSONContent = {
  json: JSONValue;
};

export type Content = JSONContent | TextContent;

export type QueryLanguageId = 'javascript' | 'lodash' | 'jmespath' | 'jsonquery' | 'jsonpath';
