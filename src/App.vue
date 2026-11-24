<template>
  <div class="app" :class="{'app--dark': darkTheme}">
    <div class="page">
      <header class="intro">
        <h1 class="intro__title">vue3-ts-jsoneditor</h1>
        <p class="intro__lead">
          A Vue 3 component for viewing and editing JSON. It wraps vanilla-jsoneditor and adds <span class="nowrap">v-model</span> support, SSR-safe
          lazy loading and TypeScript types.
        </p>
        <nav class="intro__links" aria-label="Package links">
          <a href="https://www.npmjs.com/package/vue3-ts-jsoneditor">npm</a>
          <a href="https://github.com/bestkolobok/vue3-jsoneditor">GitHub</a>
          <a href="https://github.com/bestkolobok/vue3-jsoneditor#readme">Docs</a>
        </nav>
        <p class="intro__author">by Oleksandr Huzei</p>
      </header>

      <main>
        <section class="demo" aria-label="Live demo">
          <div class="demo__editor">
            <vue-json-editor
              height="440"
              :dark-theme="darkTheme"
              :mode="mode"
              v-model:json="jsonData"
              ref="editor"
              :queryLanguagesIds="queryLanguages"
              @error="onError"
            />
          </div>

          <div class="demo__controls">
            <button type="button" @click="onCollapse">Collapse all</button>
            <button type="button" @click="onExpand">Expand all</button>
            <button type="button" @click="toggleMode">Mode: {{ mode }}</button>
            <button type="button" @click="changeJson">Change JSON</button>
            <button type="button" @click="darkTheme = !darkTheme">{{ darkTheme ? 'Light theme' : 'Dark theme' }}</button>
            <button type="button" @click="onFocus">Focus</button>
            <button type="button" @click="onRefresh">Refresh</button>
          </div>
        </section>

        <section class="projects" aria-labelledby="projects-title">
          <h2 id="projects-title" class="projects__title">My projects</h2>
          <p class="projects__lead">I have kept this package free for years. These are the things I build next to it.</p>
          <ul class="projects__list">
            <li v-for="project in projects" :key="project.name">
              <a class="project" :href="project.href">
                <span class="project__name">{{ project.name }}</span>
                <span class="project__description">{{ project.description }}</span>
                <span class="project__host">{{ project.host }}</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer class="footer">MIT licensed. Made by Oleksandr Huzei.</footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueJsonEditor from '@/components/JsonEditor.vue';
import {ref, computed} from 'vue';
import type {QueryLanguageId} from './types';

const jsonData = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: {a: 'b', c: 'd'},
  string: 'Hello World',
});

const queryLanguages = ref<QueryLanguageId[]>(['javascript', 'lodash', 'jmespath']);

const modes = ['text', 'tree', 'table'] as const;
const currentModeIndex = ref(1);
const mode = computed(() => modes[currentModeIndex.value]);
const toggleMode = () => {
  if (currentModeIndex.value === 2) {
    currentModeIndex.value = 0;
  } else {
    currentModeIndex.value++;
  }
};

const prefersDark =
  typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkTheme = ref(prefersDark);

const changeJson = () => {
  jsonData.value.number++;
};

const editor = ref();

const onCollapse = () => {
  editor.value.$collapseAll();
};

const onExpand = () => {
  editor.value.$expandAll();
};

const onFocus = () => {
  editor.value.$focus();
};

const onRefresh = () => {
  editor.value.$refresh();
};

const projects = [
  {
    name: 'Fayna',
    description: 'Free résumé and cover-letter builder.',
    host: 'fayna.ai',
    href: 'https://fayna.ai/?utm_source=vue3-jsoneditor-demo&utm_medium=referral&utm_campaign=my-projects',
  },
  {
    name: 'ShinePost',
    description: 'Post-production and AI content studio.',
    host: 'shine-post.com',
    href: 'https://shine-post.com/?utm_source=vue3-jsoneditor-demo&utm_medium=referral&utm_campaign=my-projects',
  },
];

const onError = (error: Error) => {
  console.error(error);
};
</script>

<style scoped lang="scss">
.app {
  --bg: #eef1f5;
  --card: #ffffff;
  --ink: #14202b;
  --muted: #566677;
  --line: #d3dae3;
  --accent: #0b6e66;
  --accent-soft: #e2f3f1;

  min-height: 100vh;
  padding: 40px 16px 32px;
  background: var(--bg);
  color: var(--ink);
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;

  &--dark {
    --bg: #0e151d;
    --card: #17212c;
    --ink: #e6edf3;
    --muted: #93a3b4;
    --line: #29384a;
    --accent: #5fd6c8;
    --accent-soft: #14312f;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.page {
  max-width: 960px;
  margin: 0 auto;
}

.intro {
  margin-bottom: 28px;

  &__title {
    margin: 0 0 8px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: clamp(24px, 5vw, 34px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }

  &__lead {
    max-width: 62ch;
    margin: 0 0 16px;
    color: var(--muted);

    .nowrap {
      white-space: nowrap;
    }
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;

    a {
      padding: 4px 14px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--card);
      color: var(--ink);
      font-size: 15px;
      text-decoration: none;

      &:hover {
        border-color: var(--accent);
        color: var(--accent);
      }
    }
  }

  &__author {
    margin: 0;
    color: var(--muted);
    font-size: 14px;
  }
}

.demo {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--card);
  box-shadow: 0 1px 2px rgba(20, 32, 43, 0.06), 0 12px 32px -16px rgba(20, 32, 43, 0.25);
  overflow: hidden;

  &__editor {
    min-width: 0;
    border-bottom: 1px solid var(--line);
  }

  &__controls {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px;

    button {
      padding: 6px 12px;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: transparent;
      color: var(--ink);
      font: inherit;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        border-color: var(--accent);
        color: var(--accent);
      }

      &:active {
        background: var(--accent-soft);
      }
    }
  }
}

.projects {
  margin-top: 56px;

  &__title {
    margin: 0 0 4px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  &__lead {
    max-width: 62ch;
    margin: 0 0 20px;
    color: var(--muted);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: 640px) {
      grid-template-columns: minmax(0, 1fr);
    }
  }
}

.project {
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--card);
  color: inherit;
  text-decoration: none;

  &:hover {
    border-color: var(--accent);
  }

  &__name {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  &:hover &__name {
    color: var(--accent);
  }

  &__description {
    color: var(--muted);
  }

  &__host {
    margin-top: 8px;
    color: var(--accent);
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 14px;
  }
}

.footer {
  margin-top: 56px;
  color: var(--muted);
  font-size: 14px;
}
</style>
