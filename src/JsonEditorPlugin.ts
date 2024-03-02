import {VueJsonEditor} from './components';
import type {Plugin} from 'vue';
import type {
  JSONEditorOptions,
  TextContent,
  JSONContent,
  Content,
  Path,
  QueryLanguageId,
  JSONValue,
  JSONPatchDocument,
} from './types';

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
  JSONEditorSelection,
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
  JSONEditorSelection,
};

const install: Plugin<Params>['install'] = (app, params = {}) => {
  if (app.config.globalProperties.$_vue3TsJsoneditor) return;
  app.config.globalProperties.$_vue3TsJsoneditor = true;

  app.component(params.componentName || 'JsonEditor', VueJsonEditor);
  app.provide('jsonEditorOptions', params.options);
};

const JsonEditorPluginWithComponent = {
  ...VueJsonEditor,
  install,
} as Plugin<Params> & typeof VueJsonEditor;

export default JsonEditorPluginWithComponent;

export const JsonEditor = VueJsonEditor;
