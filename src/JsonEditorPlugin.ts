import type {App} from 'vue';
import {JsonEditor} from './components';
import type {JSONEditorOptions} from 'jsoneditor';

export interface Params {
  componentName?: string;
  options?: JSONEditorOptions;
}

export default {
  ...JsonEditor,
  install: (app: App, params: Params = {componentName: 'JsonEditor', options: {mode: 'tree'}}) => {
    app.component(params.componentName, JsonEditor);
    app.provide('jsonEditorOptions', params.options);
  },
};
