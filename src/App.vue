<script setup lang="ts">
import JsonEditor from './components/JsonEditor';
</script>

<template>
  <div class="app">
    <header>
      <h1>Vue 3 Json Editor</h1>
    </header>

    <main>
      <json-editor />
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
