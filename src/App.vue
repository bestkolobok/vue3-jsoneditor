<script setup lang="ts">
// import JsonEditor from '@/components/JsonEditor.vue';
import {reactive} from 'vue';

const json = reactive({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  object: {a: 'b', c: 'd'},
  string: 'Hello World',
});

const modes = reactive(['tree', 'view', 'form', 'code', 'text', 'preview']);
</script>

<template>
  <div class="app">
    <header>
      <h1>Vue 3 Json Editor</h1>
    </header>

    <main>
      <json-editor expand-on-init height="400" :options="{modes}" v-model:json="json" />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app {
  header,
  main {
    padding: 36px;
  }
}
</style>
