[![npm version](https://badge.fury.io/js/vue3-ts-jsoneditor.svg)](https://badge.fury.io/js/vue3-ts-jsoneditor)
![NPM](https://img.shields.io/npm/l/vue3-ts-jsoneditor)
![npm](https://img.shields.io/npm/dm/vue3-ts-jsoneditor)

## 🇺🇦🇺🇦🇺🇦 [Stand With Ukraine](https://www.standwithukraine.how/) 🇺🇦🇺🇦🇺🇦

# vue3-ts-jsoneditor

## 🕹 Demo

> you can 👀 a live demo [here](https://bestkolobok.github.io/vue3-jsoneditor/)

## ☑️ Installation

```bash
npm install vue3-ts-jsoneditor
```

## ✅ Using

### 👉 Import globally

```javascript
import {createApp} from 'vue';
import App from './App.vue';
import vue3TsJsoneditor from 'vue3-ts-jsoneditor';
import 'vue3-ts-jsoneditor/styles.css'

const app = createApp(App);

app.use(vue3TsJsoneditor, {
  componentName: '/componentName/', // Default: 'JsonEditor',
  options: {
    /**
     *
     * SET GLOBAL OPTIONS
     * Jsoneditor options, You can look at the detailed
     * https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options?blank
     *
     * */
  }
});

app.mount('#app');
```

### 👉 Import locally

```javascript
<script setup>
  import vueJsoneditor from 'vue3-ts-jsoneditor';
  import 'vue3-ts-jsoneditor/styles.css'
</script>
```

### 👉 Use in template

```html
<template>
  <vue-jsoneditor 
    expand-on-init 
    height="400" 
    :options="{modes}" 
    v-model:json="json" 
    @error="onError" 
  />
</template>

// or

<template>
  <vue-jsoneditor
    height="400" 
    :options="{modes}" 
    v-model:jsonString="jsonString"
  />
</template>

<script setup>
  import {reactive} from 'vue';

  const json = reactive({
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  });

  const jsonString = reactive(JSON.stringify({
    array: [1, 2, 3],
    boolean: true,
    Null: null,
    number: 123,
    object: {a: 'b', c: 'd'},
    string: 'Hello World',
  }));

  const modes = reactive(['tree', 'view', 'form', 'code', 'text', 'preview']);
  
  const onError = (error) => {
    //
  }
</script>
```
### ☑️ Props
| Name                  | Description                                                                                                                                                           | type            | default             |
| --------------        | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------:  | :-----------------: |
| options               | Local Jsoneditor options, You can look at the detailed  [configuration](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options?blank)  | Object          | { mode: 'tree' }    |
| json (v-model)        | Object value                                                                                                                                                          | Object          | { }                 |
| jsonString (v-model)  | String value                                                                                                                                                          | String          | undefined           |
| fullWidthButton       | Whether full screen switching is added                                                                                                                                | Boolean         | true                |
| height                | Default height                                                                                                                                                        | String / Number | undefined           |
| expandOnInit          | Expand all fields. Only applicable for mode 'tree', 'view', and 'form'                                                                                                | Boolean         | false               | 

### ☑️ Events
| Name  | Description      |
| ----- | --------------   |
| error | Wrong data error |

## 🔨Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3080
npm run dev

# build for production with minification
npm run build