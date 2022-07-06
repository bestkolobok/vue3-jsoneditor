<template>
  <div
    class="vue-ts-json-editor"
    :class="{'vue-ts-json-editor--max-box': max}"
    :style="getHeight"
    ref="container"
    @keydown.stop
  ></div>
</template>

<script lang="ts">
export default {
  name: 'JsonEditor',
};
</script>

<script setup lang="ts">
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.min.css';
import type {JSONEditorOptions, SerializableNode} from 'jsoneditor';

import {inject, ref, reactive, computed, watch, nextTick, onMounted, onBeforeUnmount} from 'vue';
import type {PropType} from 'vue';

const emit = defineEmits(['update:json', 'update:jsonString', 'error']);

const props = defineProps({
  options: {
    type: Object as PropType<JSONEditorOptions>,
    default: () => ({}),
  },
  json: [Object, Array, Number, String, Boolean],
  jsonString: String,
  height: [String, Number],
  fullWidthButton: {
    type: Boolean,
    default: true,
  },
  expandOnInit: {
    type: Boolean,
    default: false,
  },
});

const pluginOptions: JSONEditorOptions = inject('jsonEditorOptions', {});

const options: JSONEditorOptions = reactive({
  ...(pluginOptions as JSONEditorOptions),
  ...(props.options as JSONEditorOptions),
});

const max = ref<boolean>(false);
const internalChange = ref<boolean>(false);
const container = ref<HTMLDivElement>();
const fullWidthButton = ref<HTMLButtonElement>(null);

const editor = ref<JSONEditor>(null);

const getHeight = computed(() => {
  if (props.height && !max.value) {
    return {
      height: props.height + 'px',
    };
  }
  return {};
});

const setFullWidthButton = (): void => {
  if (!props.fullWidthButton || fullWidthButton.value) return;

  const menu = document.querySelector('.jsoneditor-menu');
  fullWidthButton.value = document.createElement('button');
  fullWidthButton.value.classList.add('jsoneditor__full-width-button');

  menu.appendChild(fullWidthButton.value);

  fullWidthButton.value.addEventListener('click', onButtonClick);
};

const removeFullWidthButton = (): void => {
  if (!fullWidthButton.value) return;

  fullWidthButton.value.removeEventListener('click', onButtonClick);
  fullWidthButton.value = null;
};

const onButtonClick = (): void => {
  max.value = !max.value;

  if (max.value) {
    fullWidthButton.value?.classList.add('jsoneditor__full-width-button--active');
  } else {
    fullWidthButton.value?.classList.remove('jsoneditor__full-width-button--active');
  }
};

const initView = async (): Promise<void> => {
  if (!editor.value) {
    const cacheChange = options.onChange;
    delete options.onChange;
    const temporaryOptions = {...options, onChange};
    await nextTick();
    editor.value = new JSONEditor(container.value, temporaryOptions);
    options.onChange = cacheChange;
  }
  if (props.json !== undefined) {
    editor.value.set(props.json);
  } else if (props.jsonString !== undefined) {
    editor.value.setText(props.jsonString);
  } else {
    editor.value.set({});
  }
  editor.value.focus();
  if (props.expandOnInit) {
    editor.value.expandAll();
  }
  setFullWidthButton();
};

const onChange = async (): Promise<void> => {
  let error = null;
  let json = {};
  let jsonString = '';
  try {
    json = editor.value.get();
    jsonString = editor.value.get();
  } catch (err) {
    error = err;
  }

  if (error) {
    emit('error', error);
  } else if (editor.value) {
    internalChange.value = true;
    emit('update:json', json);
    emit('update:jsonString', jsonString);
    await nextTick();
    internalChange.value = false;
  }
  options.onChange && options.onChange();
};

const destroyView = (): void => {
  if (editor.value) {
    editor.value.destroy();
    editor.value = null;
  }

  removeFullWidthButton();
};

const $collapseAll = (): void => {
  editor.value?.collapseAll();
};

const $expandAll = (): void => {
  editor.value?.expandAll();
};

const $getNodesByRange = (start: {path: string[]}, end: {path: string[]}): SerializableNode[] => {
  return editor.value?.getNodesByRange(start, end);
};

watch(
  () => props.json,
  (value) => {
    if (editor.value && value !== undefined && !internalChange.value) {
      editor.value.update(value);
    }
  },
  {
    deep: true,
  }
);

watch(
  () => props.jsonString,
  (jsonString) => {
    if (editor.value && jsonString !== undefined && !internalChange.value) {
      editor.value.updateText(jsonString);
    }
  }
);

watch(
  () => options.mode,
  (mode) => {
    if (mode && editor.value) {
      editor.value.setMode(mode);
    }
  }
);

watch(
  () => options.name,
  (name) => {
    if (name && editor.value) {
      editor.value.setName(name);
    }
  }
);

watch(
  () => options.schema,
  (schema) => {
    if (schema && editor.value) {
      editor.value.setSchema(schema);
    }
  }
);

onMounted(() => {
  nextTick(() => {
    initView();
  });
});

onBeforeUnmount(() => {
  destroyView();
});

defineExpose({
  $collapseAll,
  $expandAll,
  $getNodesByRange,
});
</script>

<style lang="scss">
.vue-ts-json-editor {
  $root: &;
  min-width: 300px;
  width: 100%;

  &--max-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
  }

  .jsoneditor {
    &__full-width-button {
      margin: 3px 0 0 10px;
      background: rgba(0, 0, 0, 0) url(@/assets/icons/full.svg) 3px no-repeat;

      &--active {
        background-color: rgba(255, 255, 255, 0.22);
        border-color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
</style>
