import {default as VueJsonEditor} from './JsonEditor.vue';

VueJsonEditor.install = () => {
  console.error('Default import not working!!! Use "import {JsonEditorPlugin} from \'vue3-ts-jsoneditor\';"');
};

export {VueJsonEditor};
