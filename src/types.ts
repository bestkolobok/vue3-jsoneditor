import type {Validator, OnRenderValue, OnClassName, OnRenderMenu, Mode, JSONEditorSelection, JSONParser, JSONPathParser} from 'vanilla-jsoneditor';
import type { JSONPatchDocument } from 'immutable-json-patch';

export interface JSONEditorOptions {
  readOnly?: boolean;
  indentation?: number | string;
  tabSize?: number;
  selection?: JSONEditorSelection;
  mode?: Mode;
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

export type Path = Array<string | number | symbol>;

export type QueryLanguageId = 'javascript' | 'lodash' | 'jmespath';

export interface OnTransformArguments {
  operations: JSONPatchDocument, json: JSONValue, transformedJson: JSONValue
}
export interface TransformArguments {
  id?: string,
  rootPath?: [],
  onTransform: (args: OnTransformArguments) => void,
  onClose: () => void
}

export type {
  JSONPatchDocument
}
