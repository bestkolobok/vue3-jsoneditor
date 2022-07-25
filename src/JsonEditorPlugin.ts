import {VueJsonEditor} from './components';
import type {App} from 'vue';
import type {JSONEditorOptions, TextContent, JSONContent, Content, Path} from './types';

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
export {jmespathQueryLanguage, lodashQueryLanguage, javascriptQueryLanguage} from 'vanilla-jsoneditor';
// let jmespathQuery, lodashQuery, javascriptQuery;
// if (typeof window !== undefined) {
//   import('vanilla-jsoneditor').then(({jmespathQueryLanguage, lodashQueryLanguage, javascriptQueryLanguage}) => {
//     jmespathQuery = jmespathQueryLanguage;
//     lodashQuery = lodashQueryLanguage;
//     javascriptQuery = javascriptQueryLanguage;
//   });
// }
//
// export {
//   jmespathQuery as jmespathQueryLanguage,
//   lodashQuery as lodashQueryLanguage,
//   javascriptQuery as javascriptQueryLanguage,
// };

export type {
  Params,
  TextContent,
  JSONContent,
  Content,
  Path,
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
