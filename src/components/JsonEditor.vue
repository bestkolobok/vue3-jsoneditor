<template>
  <div
    class="json-editor"
    :class="{'json-editor--max-box': max}"
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

const pluginOptions = inject('jsonEditorOptions', {}) as object;

const emit = defineEmits(['update:json', 'update:jsonString', 'error']);

const props = defineProps({
  options: {
    type: Object,
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

const options: JSONEditorOptions = reactive({
  ...pluginOptions,
  ...props.options,
});

const max = ref(false);
const internalChange = ref(false);
const container = ref();
const fullWidthButton = ref(null);

const state = reactive({
  editor: null,
  style: {},
});

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
  if (!state.editor) {
    const cacheChange = options.onChange;
    delete options.onChange;
    const temporaryOptions = {...options, onChange};
    await nextTick();
    state.editor = new JSONEditor(container.value, temporaryOptions);
    options.onChange = cacheChange;
  }
  if (props.json !== undefined) {
    state.editor.set(props.json);
  } else if (props.jsonString !== undefined) {
    state.editor.setText(props.jsonString);
  } else {
    state.editor.set({});
  }
  state.editor.focus();
  if (props.expandOnInit) {
    state.editor.expandAll();
  }
  setFullWidthButton();
};

const onChange = async (): Promise<void> => {
  let error = null;
  let json = {};
  let jsonString = '';
  try {
    json = state.editor.get();
    jsonString = state.editor.get();
  } catch (err) {
    error = err;
  }

  if (error) {
    emit('error', error);
  } else if (state.editor) {
    internalChange.value = true;
    emit('update:json', json);
    emit('update:jsonString', jsonString);
    await nextTick();
    internalChange.value = false;
  }
  options.onChange && options.onChange();
};

const destroyView = (): void => {
  if (state.editor) {
    state.editor.destroy();
    state.editor = null;
  }

  removeFullWidthButton();
};

const $collapseAll = (): void => {
  state.editor?.collapseAll();
};

const $expandAll = (): void => {
  state.editor?.expandAll();
};

const $getNodesByRange = (start: {path: string[]}, end: {path: string[]}): SerializableNode[] => {
  return state.editor?.getNodesByRange(start, end);
};

watch(
  () => props.json,
  (value) => {
    if (state.editor && value !== undefined && !internalChange.value) {
      state.editor.update(value);
    }
  },
  {
    deep: true,
  }
);

watch(
  () => props.jsonString,
  (jsonString) => {
    if (state.editor && jsonString !== undefined && !internalChange.value) {
      state.editor.updateText(jsonString);
    }
  }
);

watch(
  () => options.mode,
  (mode) => {
    if (mode && state.editor) {
      state.editor.setMode(mode);
    }
  }
);

watch(
  () => options.name,
  (name) => {
    if (name && state.editor) {
      state.editor.setName(name);
    }
  }
);

watch(
  () => options.schema,
  (schema) => {
    if (schema && state.editor) {
      state.editor.setSchema(schema);
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

<style scoped lang="scss">
.json-editor {
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

  :deep() {
    .jsoneditor {
      &__full-width-button {
        margin: 3px 0 0 10px;
        padding: 0;
        color: #fff;
        opacity: 0.8;
        width: 26px;
        height: 26px;
        background: rgba(0, 0, 0, 0) url(./src/assets/icons/full.svg) 3px no-repeat;
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 3px;

        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }

        &:active {
          background-color: rgba(255, 255, 255, 0.3);
        }

        &--active {
          background-color: rgba(255, 255, 255, 0.22);
        }

        &:hover,
        &:active,
        &--active {
          border-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
}
</style>
