<template>
  <div class="app" :class="{'app--dark': darkTheme}">
    <div class="page">
      <header class="hero">
        <p class="node" aria-hidden="true"><span><span class="node__key">"package"</span>: {</span></p>
        <h1 class="hero__title"><span>vue3-ts-</span>jsoneditor</h1>
        <p class="hero__lead">{{ lead }}</p>
        <p class="hero__bound">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 1v5a2 2 0 0 0 2 2h6M7.5 5.5 10 8l-2.5 2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>this line is <code>"tagline"</code> in the editor below. Edit it.</span>
        </p>

        <div class="hero__actions">
          <div class="install">
            <span class="install__prompt" aria-hidden="true">$</span>
            <span class="install__cmd">{{ INSTALL_COMMAND }}</span>
            <button class="install__copy" type="button" aria-label="Copy install command" @click="copyInstall">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.4" />
                <path d="M10.5 3.5v-.5A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.5" stroke="currentColor" stroke-width="1.4" />
              </svg>
            </button>
          </div>
          <nav class="hero__links" aria-label="Package links">
            <a v-for="link in links" :key="link.label" class="link" :class="{'link--primary': link.primary}" :href="link.href">
              {{ link.label }}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M2 9 9 2M3.5 2H9v5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </nav>
        </div>
        <p class="hero__byline">MIT. Maintained for free since 2022 by <strong>Oleksandr Huzei</strong>.</p>
      </header>

      <main>
        <section aria-label="Live demo">
          <p class="node">
            <span aria-hidden="true"><span class="node__key">"demo"</span>: {</span>
            <span class="node__aside"><span class="sync-dot" :class="{'is-pulse': pulse}" aria-hidden="true"></span>v-model:json</span>
          </p>
          <div class="demo">
            <div class="demo__editor">
              <vue-json-editor
                ref="editor"
                v-model:json="jsonData"
                v-model:mode="mode"
                :dark-theme="darkTheme"
                :queryLanguagesIds="queryLanguages"
                @change="onChange"
                @error="onError"
              />
            </div>

            <div class="demo__controls">
              <div class="group">
                <span class="group__label">props</span>
                <div class="group__row">
                  <div class="seg" role="group" aria-label="Editor mode">
                    <button v-for="option in modes" :key="option" class="seg__opt" type="button" :aria-pressed="mode === option" @click="setMode(option)">
                      {{ option }}
                    </button>
                  </div>
                  <button class="switch" type="button" role="switch" :aria-checked="darkTheme" @click="toggleTheme">
                    <span class="switch__track" aria-hidden="true"></span>Dark theme
                  </button>
                </div>
              </div>
              <div class="group">
                <span class="group__label">methods</span>
                <div class="group__row">
                  <button class="btn" type="button" @click="onCollapse">Collapse all</button>
                  <button class="btn" type="button" @click="onExpand">Expand all</button>
                  <button class="btn" type="button" @click="onFocus">Focus</button>
                  <button class="btn" type="button" @click="onRefresh">Refresh</button>
                </div>
              </div>
              <div class="group">
                <span class="group__label">v-model</span>
                <div class="group__row">
                  <button class="btn" type="button" @click="changeJson">Change JSON</button>
                </div>
              </div>
            </div>

            <div class="demo__log" role="status">
              <b aria-hidden="true">&rsaquo;</b><span>{{ callLog }}</span>
            </div>
          </div>
        </section>

        <section class="projects" aria-labelledby="projects-title">
          <p class="node" aria-hidden="true"><span><span class="node__key">"projects"</span>: [</span><span class="node__tag">2 items</span></p>
          <h2 id="projects-title" class="projects__title">My projects</h2>
          <p class="projects__lead">I have kept this package free for years. These are the things I build next to it.</p>
          <ul class="projects__list">
            <li v-for="project in projects" :key="project.name">
              <a class="tile" :class="`tile--${project.id}`" :href="project.href">
                <span class="tile__logo" aria-hidden="true">
                  <svg v-if="project.id === 'fayna'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16 2c7.7 0 14 6.3 14 14s-6.3 14-14 14H2V16C2 8.3 8.3 2 16 2z" fill="#d4634f" />
                    <path d="M11.2 19.2c1.3 1.8 2.9 2.7 4.8 2.7s3.5-.9 4.8-2.7" fill="none" stroke="#fff6f3" stroke-width="3.2" stroke-linecap="round" />
                  </svg>
                  <svg v-else viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="14" fill="#0B0B0D" />
                    <circle cx="32" cy="32" r="19" fill="#FF3B30" />
                  </svg>
                </span>
                <span class="tile__body">
                  <span class="tile__name">{{ project.name }}</span>
                  <span class="tile__description">{{ project.description }}</span>
                </span>
                <span class="tile__go" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
                    <path d="M2 9 9 2M3.5 2H9v5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="tile__host"><i>"url":</i> {{ project.host }}</span>
              </a>
            </li>
          </ul>
          <p class="node node--close" aria-hidden="true">]</p>
        </section>
      </main>

      <footer class="footer">
        <p class="node" aria-hidden="true">}</p>
        <span>MIT licensed. Made by Oleksandr Huzei.</span>
        <span class="footer__links">
          <a href="https://github.com/bestkolobok/vue3-jsoneditor">GitHub</a>
          <a href="https://www.npmjs.com/package/vue3-ts-jsoneditor">npm</a>
        </span>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueJsonEditor from '@/components/JsonEditor.vue';
import {ref, computed, onBeforeUnmount} from 'vue';
import type {Content, QueryLanguageId, TMode} from './types';

const INSTALL_COMMAND = 'npm i vue3-ts-jsoneditor';
const DEFAULT_TAGLINE =
  'A JSON editor component for Vue 3: tree, text and table modes, v-model, SSR-safe lazy loading and TypeScript types.';

const links = [
  {label: 'GitHub', href: 'https://github.com/bestkolobok/vue3-jsoneditor', primary: true},
  {label: 'npm', href: 'https://www.npmjs.com/package/vue3-ts-jsoneditor', primary: false},
  {label: 'Docs', href: 'https://github.com/bestkolobok/vue3-jsoneditor#readme', primary: false},
];

const projects = [
  {
    id: 'fayna',
    name: 'Fayna',
    description: 'Free résumé and cover-letter builder.',
    host: 'fayna.ai',
    href: 'https://fayna.ai/?utm_source=vue3-jsoneditor-demo&utm_medium=referral&utm_campaign=my-projects',
  },
  {
    id: 'shinepost',
    name: 'ShinePost',
    description: 'Post-production and AI content studio.',
    host: 'shine-post.com',
    href: 'https://shine-post.com/?utm_source=vue3-jsoneditor-demo&utm_medium=referral&utm_campaign=my-projects',
  },
];

// The page is the document it edits: the hero sentence is the "tagline" key of this model.
const jsonData = ref<Record<string, unknown>>({
  name: 'vue3-ts-jsoneditor',
  tagline: DEFAULT_TAGLINE,
  modes: ['tree', 'text', 'table'],
  typed: true,
  license: 'MIT',
  price: null,
  since: 2022,
  clicks: 0,
  author: {name: 'Oleksandr Huzei', projects: ['Fayna', 'ShinePost']},
});

const tagline = ref<unknown>(DEFAULT_TAGLINE);
const lead = computed(() => (typeof tagline.value === 'string' && tagline.value.trim() ? tagline.value : DEFAULT_TAGLINE));

const queryLanguages = ref<QueryLanguageId[]>(['javascript', 'lodash', 'jmespath']);

const modes: TMode[] = ['tree', 'text', 'table'];
const mode = ref<TMode>('tree');

const prefersDark =
  typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkTheme = ref(prefersDark);

const editor = ref();
const callLog = ref('mounted · mode="tree"');
const pulse = ref(false);
let pulseTimer: ReturnType<typeof setTimeout> | undefined;

const say = (text: string) => {
  callLog.value = text;
};

const flashSyncDot = () => {
  pulse.value = false;
  clearTimeout(pulseTimer);
  // restart the CSS animation on the next frame
  pulseTimer = setTimeout(() => {
    pulse.value = true;
  }, 16);
};

const readModel = (content: Content): Record<string, unknown> | undefined => {
  try {
    const value = 'json' in content && content.json !== undefined ? content.json : JSON.parse((content as {text: string}).text);
    return value && typeof value === 'object' ? (value as Record<string, unknown>) : undefined;
  } catch {
    // invalid JSON while typing in text mode: keep the last good value
    return undefined;
  }
};

const onChange = (content: Content) => {
  const model = readModel(content);
  if (model) {
    tagline.value = model.tagline;
  }
  flashSyncDot();
  say('@update:json');
};

const setMode = (next: TMode) => {
  mode.value = next;
  say(`mode="${next}"`);
};

const toggleTheme = () => {
  darkTheme.value = !darkTheme.value;
  say(`:dark-theme="${darkTheme.value}"`);
};

const changeJson = () => {
  const clicks = Number(jsonData.value.clicks) || 0;
  jsonData.value = {...jsonData.value, clicks: clicks + 1};
  say(`jsonData.value.clicks++  // ${clicks + 1}`);
};

const onCollapse = () => {
  editor.value.$collapseAll();
  say('editor.value.$collapseAll()');
};

const onExpand = () => {
  editor.value.$expandAll();
  say('editor.value.$expandAll()');
};

const onFocus = () => {
  editor.value.$focus();
  say('editor.value.$focus()');
};

const onRefresh = () => {
  editor.value.$refresh();
  say('editor.value.$refresh()');
};

const copyInstall = async () => {
  try {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    say(`copied: ${INSTALL_COMMAND}`);
  } catch {
    say('copy is not available in this browser');
  }
};

const onError = (error: Error) => {
  console.error(error);
};

onBeforeUnmount(() => clearTimeout(pulseTimer));
</script>

<style scoped>
/* ───────────── tokens ───────────── */
.app {
  /* surfaces */
  --bg: #f1f2f5;
  --surface: #ffffff;
  --surface-2: #f6f7f9;
  --surface-3: #e9ebf0;
  /* text */
  --ink: #0c0e14;
  --ink-2: #3a4050;
  --muted: #5b6272;
  /* lines */
  --line: #dadde4;
  --line-strong: #c3c8d2;
  --control-border: #8a91a0;
  /* accent (cobalt) */
  --accent: #2238f0;
  --accent-hover: #1a2cc4;
  --accent-text: #2238f0;
  --on-accent: #ffffff;
  --accent-soft: #e3e7ff;
  /* syntax */
  --syn-key: #0c0e14;
  --syn-string: #2238f0;
  --syn-number: #b2400e;
  --syn-boolean: #7b2fd0;
  --syn-null: #5b6272;
  --syn-delim: #6a7183;
  /* tags (the "3 items" pill) */
  --tag-bg: #e9ebf0;
  --tag-ink: #4a5162;
  /* effects */
  --grid: rgba(12, 14, 20, 0.085);
  --shadow-card: 0 1px 2px rgba(12, 14, 20, 0.05), 0 28px 56px -28px rgba(12, 14, 20, 0.22);
  --shadow-pop: 0 8px 24px -6px rgba(12, 14, 20, 0.22);
  --ring: 0 0 0 2px var(--bg), 0 0 0 4px var(--accent);

  /* type */
  --font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: ui-monospace, 'SF Mono', SFMono-Regular, 'Cascadia Code', Menlo, Consolas, 'Liberation Mono', monospace;

  /* radii */
  --r-sm: 6px;
  --r-md: 10px;
  --r-lg: 16px;

  /* motion */
  --ease: cubic-bezier(0.2, 0.7, 0.2, 1);
  --t-fast: 140ms;
  --t-med: 240ms;

  position: relative;
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: clip;
  transition: background-color var(--t-med) var(--ease), color var(--t-med) var(--ease);
}

.app--dark {
  --bg: #090b10;
  --surface: #10131a;
  --surface-2: #151923;
  --surface-3: #1e2330;
  --ink: #eceef4;
  --ink-2: #c4c9d6;
  --muted: #949cad;
  --line: #232937;
  --line-strong: #343c4e;
  --control-border: #6b7488;
  --accent: #4860ff;
  --accent-hover: #5d73ff;
  --accent-text: #9fb0ff;
  --on-accent: #ffffff;
  --accent-soft: #1a2150;
  --syn-key: #eceef4;
  --syn-string: #9fb0ff;
  --syn-number: #ffae7a;
  --syn-boolean: #c8a4ff;
  --syn-null: #949cad;
  --syn-delim: #8b93a5;
  --tag-bg: #1e2330;
  --tag-ink: #c4c9d6;
  --grid: rgba(236, 238, 244, 0.07);
  --shadow-card: 0 0 0 1px rgba(159, 176, 255, 0.04), 0 40px 80px -40px rgba(72, 96, 255, 0.38);
  --shadow-pop: 0 8px 24px -6px rgba(0, 0, 0, 0.6);
}

/* ───────────── background: blueprint grid, top only ───────────── */
.app::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 620px;
  pointer-events: none;
  background-image:
    linear-gradient(to right, var(--grid) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: center top;
  -webkit-mask-image: radial-gradient(120% 100% at 20% 0%, #000 0%, transparent 72%);
  mask-image: radial-gradient(120% 100% at 20% 0%, #000 0%, transparent 72%);
}

/* ───────────── focus ───────────── */
.app a:focus-visible,
.app button:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

/* ───────────── page column + tree spine ───────────── */
.page {
  position: relative;
  max-width: 1040px;
  margin: 0 auto;
  padding: 40px 16px 32px;
}
@media (min-width: 720px) {
  .page { padding: 72px 32px 40px; }
}

/* node label: the page is a JSON tree — each section hangs off a key */
.node {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.4;
  color: var(--syn-delim);
}
.node__key { color: var(--syn-key); font-weight: 600; }
.node__tag {
  padding: 1px 6px;
  border-radius: 4px;
  background: var(--tag-bg);
  color: var(--tag-ink);
  font-size: 12px;
}
.node__aside {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
}
.sync-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--accent-text);
}
.sync-dot.is-pulse { animation: pulse 700ms var(--ease); }
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent-text) 60%, transparent); }
  100% { box-shadow: 0 0 0 9px transparent; }
}

@media (min-width: 1180px) {
  /* the spine: one indentation guide down the left, like the editor's own tree */
  .page::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 82px;
    bottom: 52px;
    width: 1px;
    background: var(--line-strong);
  }
  .node::before {
    content: '';
    position: absolute;
    left: -28px;
    top: 50%;
    width: 20px;
    height: 1px;
    background: var(--line-strong);
  }
}

/* ───────────── hero ───────────── */
.hero { margin-bottom: 56px; }
@media (min-width: 720px) { .hero { margin-bottom: 72px; } }

.hero__title {
  margin: 0 0 20px;
  font-family: var(--font-mono);
  font-size: clamp(1.75rem, 8.6vw, 4.75rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1;
  overflow-wrap: anywhere;
}
.hero__title span { color: var(--muted); font-weight: 500; }

.hero__lead {
  max-width: 58ch;
  margin: 0;
  font-size: clamp(1.0625rem, 0.95rem + 0.5vw, 1.3125rem);
  line-height: 1.5;
  color: var(--ink-2);
  text-wrap: pretty;
  overflow-wrap: anywhere;
}
.hero__bound {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin: 10px 0 0;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--muted);
}
.hero__bound code { color: var(--accent-text); font: inherit; }
.hero__bound svg { flex: none; margin-top: 4px; }

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
}
.install {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  max-width: 100%;
  padding: 0 6px 0 14px;
  border: 1px solid var(--line-strong);
  border-radius: var(--r-md);
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 13.5px;
  color: var(--ink);
}
.install__prompt { color: var(--accent-text); user-select: none; }
.install__cmd { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.install__copy {
  display: inline-grid;
  place-items: center;
  width: 30px; height: 30px;
  border: 0;
  border-radius: var(--r-sm);
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition: background-color var(--t-fast) var(--ease), color var(--t-fast) var(--ease);
}
.install__copy:hover { background: var(--surface-3); color: var(--ink); }

.link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 40px;
  padding: 0 14px;
  border: 1px solid var(--line-strong);
  border-radius: var(--r-md);
  color: var(--ink);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color var(--t-fast) var(--ease), background-color var(--t-fast) var(--ease), color var(--t-fast) var(--ease);
}
.link svg { color: var(--muted); transition: transform var(--t-fast) var(--ease), color var(--t-fast) var(--ease); }
.link:hover { border-color: var(--ink); }
.link:hover svg { transform: translate(1px, -1px); color: currentColor; }
.link--primary { border-color: var(--ink); background: var(--ink); color: var(--bg); }
.link--primary svg { color: currentColor; opacity: 0.7; }
.link--primary:hover { background: var(--accent); border-color: var(--accent); color: var(--on-accent); }

.hero__byline { margin: 20px 0 0; font-size: 14px; color: var(--muted); }
.hero__byline strong { color: var(--ink); font-weight: 600; }

/* ───────────── demo card ───────────── */
.demo {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: var(--surface);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: background-color var(--t-med) var(--ease), border-color var(--t-med) var(--ease);
}
.demo__editor { min-width: 0; height: 380px; }
@media (min-width: 720px) { .demo__editor { height: 480px; } }

.demo__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 28px;
  padding: 14px 16px 16px;
  border-top: 1px solid var(--line);
  background: var(--surface-2);
}
.group { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.group__label {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.02em;
  color: var(--muted);
}
.group__row { display: flex; flex-wrap: wrap; gap: 8px; }

.btn {
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--r-sm);
  background: var(--surface);
  color: var(--ink);
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color var(--t-fast) var(--ease), background-color var(--t-fast) var(--ease), transform var(--t-fast) var(--ease);
}
.btn:hover { border-color: var(--ink); }
.btn:active { transform: translateY(1px); background: var(--surface-3); }
@media (pointer: coarse) { .btn, .seg__opt { min-height: 40px; } }

.seg {
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--line-strong);
  border-radius: var(--r-sm);
  background: var(--surface);
}
.seg__opt {
  min-height: 30px;
  padding: 0 12px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 13px;
  cursor: pointer;
  transition: background-color var(--t-fast) var(--ease), color var(--t-fast) var(--ease);
}
.seg__opt:hover { color: var(--ink); }
.seg__opt[aria-pressed='true'] { background: var(--ink); color: var(--surface); }

.switch {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 36px;
  padding: 0 12px 0 8px;
  border: 1px solid var(--line-strong);
  border-radius: var(--r-sm);
  background: var(--surface);
  color: var(--ink);
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.switch:hover { border-color: var(--ink); }
.switch__track {
  position: relative;
  width: 32px; height: 18px;
  border-radius: 999px;
  background: var(--control-border);
  transition: background-color var(--t-fast) var(--ease);
}
.switch__track::after {
  content: '';
  position: absolute;
  top: 2px; left: 2px;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: #fff;
  transition: transform var(--t-fast) var(--ease);
}
.switch[aria-checked='true'] .switch__track { background: var(--accent); }
.switch[aria-checked='true'] .switch__track::after { transform: translateX(14px); }

.demo__log {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 6px 16px;
  border-top: 1px solid var(--line);
  background: var(--surface-2);
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
}
.demo__log b { color: var(--accent-text); font-weight: 600; }
.demo__log span { overflow: hidden; text-overflow: ellipsis; color: var(--ink-2); }

/* ───────────── projects ───────────── */
.projects { margin-top: 72px; }
@media (min-width: 720px) { .projects { margin-top: 96px; } }
.projects__title {
  margin: 0 0 6px;
  font-size: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.projects__lead { max-width: 58ch; margin: 0 0 24px; color: var(--muted); }
.projects__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 0; padding: 0;
  list-style: none;
}
@media (max-width: 719px) { .projects__list { grid-template-columns: minmax(0, 1fr); } }

.tile {
  --brand: var(--accent);
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas: 'logo body go' 'host host host';
  column-gap: 16px;
  height: 100%;
  padding: 22px 22px 16px;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: var(--surface);
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  isolation: isolate;
  transition: border-color var(--t-med) var(--ease), transform var(--t-med) var(--ease), box-shadow var(--t-med) var(--ease);
}
.tile--fayna { --brand: #d4634f; }
.tile--shinepost { --brand: #ff3b30; }
/* brand wash: grows out of the logo corner on hover/focus */
.tile::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(420px 260px at 46px 46px, color-mix(in srgb, var(--brand) 16%, transparent), transparent 70%);
  opacity: 0;
  transition: opacity var(--t-med) var(--ease);
}
.tile:hover, .tile:focus-visible {
  border-color: var(--brand);
  transform: translateY(-2px);
  box-shadow: 0 18px 36px -22px color-mix(in srgb, var(--brand) 70%, transparent);
}
.app .tile:focus-visible { box-shadow: var(--ring); }
.tile:hover::before, .tile:focus-visible::before { opacity: 1; }

.tile__logo { grid-area: logo; display: block; width: 48px; height: 48px; }
.tile__logo svg { display: block; width: 100%; height: 100%; }
/* ShinePost's mark is an ink tile: give it a hairline so its edge survives on the dark surface (the mark itself is untouched) */
.tile--shinepost .tile__logo { border-radius: 11px; box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink) 18%, transparent); }

.tile__body { grid-area: body; display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.tile__name { font-size: 20px; font-weight: 700; letter-spacing: -0.015em; line-height: 1.3; }
.tile__description { color: var(--muted); font-size: 15px; line-height: 1.45; }

.tile__go {
  grid-area: go;
  display: grid; place-items: center;
  width: 32px; height: 32px;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  color: var(--muted);
  transition: background-color var(--t-med) var(--ease), border-color var(--t-med) var(--ease), color var(--t-med) var(--ease), transform var(--t-med) var(--ease);
}
.tile:hover .tile__go, .tile:focus-visible .tile__go {
  background: var(--brand); border-color: var(--brand); color: #fff;
  transform: translate(2px, -2px);
}
.tile__host {
  grid-area: host;
  margin-top: 18px;
  padding-top: 12px;
  border-top: 1px dashed var(--line-strong);
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--ink-2);
}
.tile__host i { font-style: normal; color: var(--syn-delim); }

/* ───────────── misc ───────────── */
.node--close { margin: 16px 0 0; }
.hero__links { display: contents; }

/* ───────────── footer ───────────── */
.footer {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
  margin-top: 72px;
  color: var(--muted);
  font-size: 14px;
}
.footer .node { margin: 0; }
.footer a { color: var(--ink-2); text-underline-offset: 3px; }
.footer a:hover { color: var(--accent-text); }
.footer__links { display: flex; gap: 16px; }
@media (min-width: 720px) { .footer__links { margin-left: auto; } }

.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

/* ───────────── reduced motion ───────────── */
@media (prefers-reduced-motion: reduce) {
  .app, .app *, .app *::before, .app *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
  .tile:hover, .tile:focus-visible, .tile:hover .tile__go, .tile:focus-visible .tile__go, .link:hover svg, .btn:active { transform: none; }
}
</style>

<!-- Editor skin: the editor renders inside a child component, so these rules are intentionally not scoped. -->
<style>
/* ───────────── editor skin: page tokens → --jse-* ─────────────
   One block for both themes. Specificity (0,2,0) beats upstream `.jse-theme-dark` (0,1,0),
   and it sits on the SAME element as that class, which is required for it to win. */
.app .vue-ts-json-editor {
  /* fonts and sizes */
  --jse-font-family: var(--font-sans);
  --jse-font-family-mono: var(--font-mono);
  --jse-font-size: 14px;
  --jse-font-size-mono: 13.5px;
  --jse-font-size-main-menu: 13px;
  --jse-line-height: calc(1em + 7px);
  --jse-menu-button-size: 36px;
  --jse-input-radius: 6px;
  --jse-svelte-select-border-radius: 6px;

  /* base */
  --jse-theme-color: var(--surface-2);            /* = menu bar background */
  --jse-theme-color-highlight: var(--surface-3);  /* = menu button hover */
  --jse-menu-color: var(--ink);                   /* menu icons, mode-toggle border, selected-mode fill */
  --jse-background-color: var(--surface);
  --jse-text-color: var(--ink);
  --jse-text-color-inverse: var(--surface);
  --jse-text-readonly: var(--muted);
  --jse-main-border: 0 solid transparent;         /* the card is the frame */

  /* panels: navigation bar, status bar, search box */
  --jse-panel-background: var(--surface-2);
  --jse-panel-color: var(--ink);
  --jse-panel-color-readonly: var(--muted);
  --jse-panel-border: 1px solid var(--line);
  --jse-panel-background-border: 1px solid var(--line);
  --jse-panel-button-color: var(--ink-2);
  --jse-panel-button-color-highlight: var(--ink);
  --jse-panel-button-background-highlight: var(--surface-3);
  --jse-navigation-bar-background: var(--surface);
  --jse-navigation-bar-background-highlight: var(--surface-3);
  --jse-navigation-bar-dropdown-color: var(--ink);

  /* contents */
  --jse-key-color: var(--syn-key);
  --jse-value-color: var(--ink);
  --jse-value-color-string: var(--syn-string);
  --jse-value-color-url: var(--syn-string);
  --jse-value-color-number: var(--syn-number);
  --jse-value-color-boolean: var(--syn-boolean);
  --jse-value-color-null: var(--syn-null);
  --jse-delimiter-color: var(--syn-delim);
  --jse-edit-outline: 2px solid var(--accent);
  --jse-selection-background-color: var(--accent-soft);
  --jse-selection-background-inactive-color: var(--surface-3);
  --jse-hover-background-color: color-mix(in srgb, var(--ink) 6%, transparent);
  --jse-active-line-background-color: color-mix(in srgb, var(--ink) 5%, transparent);
  --jse-tag-background: var(--tag-bg);
  --jse-tag-color: var(--tag-ink);
  --jse-collapsed-items-background-color: var(--surface-2);
  --jse-collapsed-items-selected-background-color: var(--accent-soft);
  --jse-collapsed-items-link-color: var(--muted);
  --jse-collapsed-items-link-color-highlight: var(--accent-text);

  /* table mode */
  --jse-table-header-background: var(--surface-2);
  --jse-table-header-background-highlight: var(--surface-3);
  --jse-table-row-odd-background: color-mix(in srgb, var(--ink) 3%, transparent);

  /* context menu + selection pointer */
  --jse-context-menu-background: var(--surface);
  --jse-context-menu-background-highlight: var(--surface-3);
  --jse-context-menu-color: var(--ink);
  --jse-context-menu-color-disabled: var(--muted);
  --jse-context-menu-separator-color: var(--line);
  --jse-context-menu-pointer-background: var(--accent);
  --jse-context-menu-pointer-background-highlight: var(--accent-hover);
  --jse-context-menu-pointer-hover-background: var(--control-border);
  --jse-context-menu-pointer-color: var(--on-accent);
  --jse-context-menu-tip-background: var(--accent-soft);
  --jse-context-menu-tip-color: var(--ink);
  --jse-controls-box-shadow: var(--shadow-pop);

  /* modals, inputs, buttons — set explicitly because theme-color is now a neutral */
  --jse-modal-background: var(--surface);
  --jse-modal-code-background: var(--surface-2);
  --jse-modal-editor-theme-color: var(--surface-2);
  --jse-modal-editor-theme-color-highlight: var(--surface-3);
  --jse-tooltip-color: var(--ink);
  --jse-tooltip-background: var(--surface);
  --jse-tooltip-border: 1px solid var(--line-strong);
  --jse-tooltip-action-button-color: var(--on-accent);
  --jse-tooltip-action-button-background: var(--accent);
  --jse-input-background: var(--surface);
  --jse-input-border: 1px solid var(--line-strong);
  --jse-input-border-focus: 1px solid var(--accent);
  --jse-button-background: var(--surface-3);
  --jse-button-background-highlight: var(--line);
  --jse-button-color: var(--ink);
  --jse-button-primary-background: var(--accent);
  --jse-button-primary-background-highlight: var(--accent-hover);
  --jse-button-primary-color: var(--on-accent);
  --jse-button-secondary-background: var(--surface-3);
  --jse-button-secondary-background-highlight: var(--line);
  --jse-button-secondary-color: var(--ink);
  --jse-a-color: var(--accent-text);
  --jse-a-color-highlight: var(--accent-text);
  --jse-item-is-active-bg: var(--accent);
  --jse-message-info-background: var(--accent);
  --jse-svelte-select-background: var(--surface);
  --jse-svelte-select-border: 1px solid var(--line-strong);
  --list-background: var(--surface);
  --item-hover-bg: var(--surface-3);
  --input-color: var(--ink);
  --jse-color-picker-background: var(--surface-2);
}

/* things the variables cannot reach (plain CSS, three classes deep so it beats the svelte-hashed rules) */
.app .vue-ts-json-editor .jse-menu { border-bottom: 1px solid var(--line); padding: 2px 6px; }
.app .vue-ts-json-editor .jse-menu .jse-button { border-radius: 6px; }
.app .vue-ts-json-editor .jse-menu .jse-button.jse-group-button { border-radius: 0; }
.app .vue-ts-json-editor .jse-menu .jse-button.jse-group-button.jse-first { border-radius: 6px 0 0 6px; }
.app .vue-ts-json-editor .jse-menu .jse-button.jse-group-button.jse-last { border-radius: 0 6px 6px 0; }
.app .vue-ts-json-editor .jse-menu .jse-button.jse-group-button { font-family: var(--font-mono); font-size: 12.5px; padding-inline: 9px; }
.app .vue-ts-json-editor .jse-menu .jse-button:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.app .vue-ts-json-editor .jse-navigation-bar { border-bottom: 1px solid var(--line); }
/* the wrapper's fullscreen button hard-codes a white tint with !important — invisible on a light bar */
.app .vue-ts-json-editor .jse-menu .jse-full-width.jse-full-width--active {
  background-color: var(--accent-soft) !important;
  border-color: transparent !important;
}
/* the fullscreen icon ships with a hard-coded light-grey fill (#e6e6e6): follow the menu text colour instead */
.app .vue-ts-json-editor .jse-menu .jse-full-width svg path { fill: currentColor; }
/* text mode (CodeMirror) gutter: hard-coded #f5f5f5 in the light CM theme */
.app .vue-ts-json-editor .cm-editor .cm-gutters { background: var(--surface-2); color: var(--muted); border-right-color: var(--line); }

/* the editor fills the sized card; fullscreen (--max-box) keeps the wrapper's own sizing */
.app .vue-ts-json-editor:not(.vue-ts-json-editor--max-box) { height: 100%; }
</style>
