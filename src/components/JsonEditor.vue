<template>
  <div class="json-editor" :class="{'json-editor--max-box': max}" :style="getHeight" @keydown.stop>
    <div ref="container" class="json-editor__box"></div>

    <button
      v-if="displayButton"
      type="button"
      class="json-editor__max-button"
      size="mini"
      @click="onButtonClick"
    ></button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'JsonEditorNew',
};
</script>

<script setup lang="ts">
import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
import 'jsoneditor/dist/jsoneditor.min.css';
import type {JSONEditorOptions, SerializableNode} from 'jsoneditor';
import type CSS from 'csstype';

import {inject, ref, reactive, computed, watch, nextTick, onMounted, onBeforeUnmount} from 'vue';

const pluginOptions = inject('jsonEditorOptions', {}) as object;

const emit = defineEmits(['update:value', 'error']);

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
  json: [Object, Array, Number, String, Boolean],
  jsonString: String,
  height: [String, Number],
  plus: {
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

const state = reactive({
  editor: null,
  style: {},
});

const getHeight = computed((): CSS.Properties => {
  if (props.height && !max.value) {
    return {
      height: props.height + 'px',
    };
  }
  return {};
});

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
};

const onChange = async (): Promise<void> => {
  let error = null;
  let json = {};
  try {
    json = state.editor.get();
  } catch (err) {
    error = err;
  }

  if (error) {
    emit('error', error);
  } else if (state.editor) {
    internalChange.value = true;
    emit('update:value', json);
    await nextTick();
    internalChange.value = false;
  }
  options.onChange && options.onChange(...arguments);
};

const destroyView = (): void => {
  if (state.editor) {
    state.editor.destroy();
    state.editor = null;
  }
};

const displayButton = computed((): boolean => {
  return options.mode === 'code' && props.plus;
});

const onButtonClick = (): void => {
  max.value = !max.value;
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

watch(max, () => {
  nextTick(() => {
    initView();
  });
});

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
</script>

<style scoped lang="scss">
.json-editor {
  $root: &;

  position: relative;
  min-width: 300px;
  width: 100%;

  &--max-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
  }

  &__box {
    height: 100%;
  }

  &__max-button {
    display: none;
    position: absolute;
    top: 7px;
    right: 110px;
    color: #fff;
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0) url(./assets/icons/json-editor/plus.svg) 3px no-repeat;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;

    &:hover {
      border-color: #d7e6fe;
    }
  }

  &:hover {
    #{$root}__max-button {
      display: block;
    }
  }
}
</style>
