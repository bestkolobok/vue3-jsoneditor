// @vitest-environment node
// The Vite config resolves file:// URLs, so it is evaluated in Node rather than happy-dom.
import { describe, it, expect } from 'vitest'
import type { UserConfig, UserConfigFnObject } from 'vite'
import viteConfig from '../../vite.config'
import pkg from '../../package.json'

const resolveConfig = (mode: string): UserConfig =>
  (viteConfig as UserConfigFnObject)({ mode, command: 'build', isSsrBuild: false, isPreview: false })

const getExternal = () => {
  const external = resolveConfig('production').build?.rollupOptions?.external

  if (typeof external !== 'function') {
    throw new Error('Expected build.rollupOptions.external to be a function')
  }

  return (id: string) => external(id, undefined, false)
}

describe('vite.config.ts', () => {
  describe('library build', () => {
    it('should keep every runtime and peer dependency external instead of bundling it', () => {
      const isExternal = getExternal()
      const runtimePackages = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)]

      expect(runtimePackages).toEqual(expect.arrayContaining(['vanilla-jsoneditor', 'immutable-json-patch', 'vue']))

      for (const name of runtimePackages) {
        expect(isExternal(name)).toBe(true)
        expect(isExternal(`${name}/some/subpath.js`)).toBe(true)
      }
    })

    it('should bundle the package source and not match packages that only share a name prefix', () => {
      const isExternal = getExternal()

      expect(isExternal('./components/JsonEditor.vue')).toBe(false)
      expect(isExternal('/project/src/JsonEditorPlugin.ts')).toBe(false)
      expect(isExternal('vanilla-jsoneditor-extra')).toBe(false)
      expect(isExternal('vue-router')).toBe(false)
    })

    it('should build the ES library entry', () => {
      const lib = resolveConfig('production').build?.lib

      expect(lib).toMatchObject({ entry: './src/JsonEditorPlugin.ts', formats: ['es'] })
    })
  })

  describe('GitHub Pages build (--mode gh)', () => {
    it('should build the demo app into gh-dist under the repository base path', () => {
      const config = resolveConfig('gh')

      expect(config.base).toBe('/vue3-jsoneditor/')
      expect(config.build?.outDir).toBe('gh-dist')
      expect(config.build?.lib).toBeUndefined()
    })
  })
})

describe('demo page assets', () => {
  it('should not copy public/ into the library build', () => {
    expect(resolveConfig('production').build?.copyPublicDir).toBe(false)
    expect(resolveConfig('gh').build?.copyPublicDir).toBeUndefined()
  })

  it('should ship project links as static HTML matching App.vue', async () => {
    const { readFileSync } = await import('node:fs')
    const html = readFileSync(new URL('../../index.html', import.meta.url), 'utf8').replace(/&amp;/g, '&')
    const app = readFileSync(new URL('../../src/App.vue', import.meta.url), 'utf8')
    const hrefs = [...app.matchAll(/href: '(https:\/\/(?:fayna\.ai|shine-post\.com)[^']+)'/g)].map((m) => m[1])

    expect(hrefs).toHaveLength(2)
    for (const href of hrefs) {
      expect(html).toContain(`href="${href}"`)
    }
    expect(html).not.toMatch(/nofollow/)
  })
})
