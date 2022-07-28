import {VueJsonEditor} from './components';
import type {App} from 'vue';
import type {JSONEditorOptions, TextContent, JSONContent, Content, Path, QueryLanguageId} from './types';

import type {
  JSONData,
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
  Validator,
  Mode,
  MenuItem,
  JSONEditor,
  JSONNodeItem,
  JSONNodeProp,
} from 'vanilla-jsoneditor';

interface Params {
  componentName?: string;
  options?: JSONEditorOptions;
}

export type {
  Params,
  TextContent,
  JSONContent,
  Content,
  Path,
  QueryLanguageId,
  JSONData,
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
  Validator,
  Mode,
  MenuItem,
  JSONEditor,
  JSONNodeItem,
  JSONNodeProp,
};

export default {
  ...VueJsonEditor,
  install: (app: App, params: Params = {}) => {
    app.component(params.componentName || 'JsonEditor', VueJsonEditor);
    app.provide('jsonEditorOptions', params.options);
  },
};
