import {VueJsonEditor} from './components';
import type {App} from 'vue';
import type {JSONEditorOptions, TextContent, JSONContent, Content, Path, QueryLanguageId, JSONValue, JSONPatchDocument} from './types';

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
  JSONEditor,
  JSONNodeItem,
  JSONNodeProp,
  JSONPathParser,
  JSONParser,
  JSONEditorSelection
} from 'vanilla-jsoneditor';

interface Params {
  componentName?: string;
  options?: JSONEditorOptions;
}

export type {
  ContentErrors,
  Params,
  TextContent,
  JSONContent,
  Content,
  Path,
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
  JSONEditor,
  JSONNodeItem,
  JSONNodeProp,
  JSONPathParser,
  JSONParser,
  JSONEditorSelection
};

export default {
  ...VueJsonEditor,
  install: (app: App, params: Params = {}) => {
    app.component(params.componentName || 'JsonEditor', VueJsonEditor);
    app.provide('jsonEditorOptions', params.options);
  },
};
