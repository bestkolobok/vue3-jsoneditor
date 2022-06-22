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

<script>
export default {
  name: 'JsonEditorNew',
};
</script>

<script setup  lang="ts">
import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
import 'jsoneditor/dist/jsoneditor.min.css';

import {ref, reactive, computed, watch, nextTick, onMounted, onBeforeUnmount} from 'vue';

const emit = defineEmits(['update:value', 'error']);

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
  value: [Object, Array, Number, String, Boolean],
  height: {
    type: String,
  },
  plus: {
    type: Boolean,
    default: true,
  },
});

const max = ref(false);
const internalChange = ref(false);
const container = ref();

const state = reactive({
  editor: null,
  style: {},
});

const getHeight = computed(() => {
  if (props.height && !max.value) {
    return {
      height: props.height,
    };
  }
  return {};
});

const initView = async () => {
  if (process.server) return;

  if (!state.editor) {
    const cacheChange = props.options.onChange;
    delete props.options.onChange;
    const options = {...props.options, onChange};
    await nextTick();
    state.editor = new JSONEditor(container.value, options);
    props.options.onChange = cacheChange;
  }
  state.editor.set(props.value !== undefined ? props.value : {});
  state.editor.focus();
};

const onChange = async () => {
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
  props.options.onChange && props.options.onChange(...arguments);
};

const destroyView = () => {
  if (state.editor) {
    state.editor.destroy();
    state.editor = null;
  }
};

const displayButton = computed(() => {
  return props.options.mode === 'code' && props.plus;
});

const onButtonClick = () => {
  max.value = !max.value;
};

watch(
  () => props.value,
  (value) => {
    if (state.editor && value !== undefined && !internalChange.value) {
      state.editor.set(value);
    }
  },
  {
    deep: true,
  }
);

watch(max, () => {
  nextTick(() => {
    initView();
  });
});

watch(
  () => props.options,
  (value) => {
    if (value && value.mode && state.editor) {
      state.editor.setMode(value.mode);
    }
  },
  {
    deep: true,
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
