import {VueJsonEditor} from './components';
import type {Plugin} from 'vue';
import type {JSONEditorOptions, TextContent, JSONContent, Content, QueryLanguageId, JSONValue} from './types';

import type {
  ContentErrors,
  JSONPatchResult,
  ValidationError,
  QueryLanguage,
  QueryLanguageOptions,
  RenderValuePropsOptional,
  RenderValueProps,
  ValueNormalization,
  SearchResultItem,
  RenderValueComponentDescription,
  OnClassName,
  OnRenderValue,
  OnRenderMenu,
  OnChangeStatus,
  Validator,
  Mode,
  MenuItem,
  JSONPathParser,
  JSONParser,
  JSONEditorSelection,
  EditKeySelection,
  EditValueSelection,
  createJSONEditor,
} from 'vanilla-jsoneditor';

import type {JSONPatchDocument, JSONPath} from 'immutable-json-patch';

interface Params {
  componentName?: string;
  options?: JSONEditorOptions;
}

export type Path = JSONPath;

export type {
  ContentErrors,
  Params,
  TextContent,
  JSONContent,
  Content,
  JSONPath,
  QueryLanguageId,
  JSONValue,
  JSONPatchDocument,
  JSONPatchResult,
  ValidationError,
  QueryLanguage,
  QueryLanguageOptions,
  RenderValuePropsOptional,
  RenderValueProps,
  ValueNormalization,
  SearchResultItem,
  RenderValueComponentDescription,
  OnClassName,
  OnRenderValue,
  OnRenderMenu,
  OnChangeStatus,
  Validator,
  Mode,
  MenuItem,
  JSONPathParser,
  JSONParser,
  JSONEditorSelection,
  EditKeySelection,
  EditValueSelection,
  createJSONEditor,
};

export const JsonEditorPlugin: Plugin<Params> = {
  install(app, params = {}) {
    if (app.config.globalProperties.$_vue3TsJsoneditor) return;
    app.config.globalProperties.$_vue3TsJsoneditor = true;

    app.component(params.componentName || 'JsonEditor', VueJsonEditor);
    app.provide('jsonEditorOptions', params.options);
  },
};

export default VueJsonEditor;
