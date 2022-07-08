<template>
  <div class="app">
    <header>
      <h1>Vue 3 Json Editor</h1>
    </header>

    <main class="body-container">
      <json-editor expand-on-init height="400" :options="options" v-model:json="json" ref="editor" />

      <div class="body-container__buttons">
        <button @click="onCollapse">collapse all</button>

        <button @click="onExpand">expand all</button>

        <button @click="onGetNodesByRange">get node by range</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// import JsonEditor from '@/components/JsonEditor.vue';
import {reactive, ref} from 'vue';

const json = reactive({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  object: {a: 'b', c: 'd'},
  string: 'Hello World',
});

const options = reactive({
  modes: ['tree', 'view', 'form', 'code', 'text', 'preview'],
});

const editor = ref();

const onCollapse = () => {
  editor.value.$collapseAll();
};

const onExpand = () => {
  editor.value.$expandAll();
};

const onGetNodesByRange = () => {
  const node = editor.value.$getNodesByRange({path: ['boolean']}, {path: ['object']});

  console.log('NODE: ', node);
};
</script>

<style scoped lang="scss">
.app {
  header,
  main {
    padding: 36px;
  }
}

.body-container {
  &__buttons {
    display: flex;
    margin-top: 48px;
    gap: 20px;

    button {
      padding: 8px 12px;
      min-width: 100px;
      border: 1px solid gray;
      border-radius: 6px;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
}
</style>
