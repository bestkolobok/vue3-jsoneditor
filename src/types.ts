import type {Validator, OnRenderValue, OnClassName, OnRenderMenu, Mode, JSONData} from 'vanilla-jsoneditor';

export interface JSONEditorOptions {
  readOnly?: boolean;
  indentation?: number | string;
  tabSize?: number;
  mode?: Mode;
  mainMenuBar?: boolean;
  navigationBar?: boolean;
  statusBar?: boolean;
  escapeControlCharacters?: boolean;
  escapeUnicodeCharacters?: boolean;
  validator?: Validator;
  queryLanguagesIds?: QueryLanguageId[];
  queryLanguageId?: QueryLanguageId;
  onRenderValue?: OnRenderValue;
  onClassName?: OnClassName;
  onRenderMenu?: OnRenderMenu;
  height?: string | number;
  fullWidthButton?: boolean;
  darkTheme?: boolean;
}

export type TextContent = {
  json?: undefined;
  text: string;
};

export type JSONContent = {
  json: JSONData;
  text?: undefined;
};

export type Content = JSONContent | TextContent;

export type Path = Array<string | number | symbol>;

export type QueryLanguageId = 'javascript' | 'lodash' | 'jmespath';
