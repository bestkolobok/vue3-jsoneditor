import type {App} from 'vue';
import {JsonEditor} from './components';
import type {Options} from './types';

interface Params {
  componentName: string;
  options: Options;
}

export default {
  install: (app: App, params: Params = {componentName: 'JsonEditor', options: {mode: 'tree'}}) => {
    app.component(params.componentName, JsonEditor);
    app.provide('jsonEditorOptions', params.options);
  },
};
