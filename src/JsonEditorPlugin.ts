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

const createLazyExport = (fnName: string) => {
  return new Proxy(() => {}, {
    apply: async (_target, _thisArg, args) => {
      if (typeof window === 'undefined') {
        throw new Error(`${fnName} is not available on server side. Please use it only in client-side code.`);
      }

      const module = await import('vanilla-jsoneditor');
      return module[fnName](...args);
    },
  });
};

export const renderValue = createLazyExport('renderValue');
export const renderJSONSchemaEnum = createLazyExport('renderJSONSchemaEnum');

export const JsonEditorPlugin: Plugin<Params> = {
  install(app, params = {}) {
    if (app.config.globalProperties.$_vue3TsJsoneditor) return;
    app.config.globalProperties.$_vue3TsJsoneditor = true;

    app.component(params.componentName || 'JsonEditor', VueJsonEditor);
    app.provide('jsonEditorOptions', params.options);
  },
};

export default VueJsonEditor;
