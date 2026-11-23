// @vitest-environment node
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { describe, it, expect } from 'vitest'
import { darkTheme } from '@/components/string-styles'

const require = createRequire(import.meta.url)

const readUpstreamDarkTheme = () =>
  readFileSync(require.resolve('vanilla-jsoneditor/themes/jse-theme-dark.css'), 'utf8')

const parseCustomProperties = (css: string) => {
  const declarations = new Map<string, string>()

  for (const [, name, value] of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    declarations.set(name, value.trim())
  }

  return declarations
}

describe('string-styles.ts', () => {
  describe('darkTheme', () => {
    it('should define the same CSS variables and values as the vanilla-jsoneditor dark theme', () => {
      const ours = parseCustomProperties(darkTheme)
      const upstream = parseCustomProperties(readUpstreamDarkTheme())

      expect(upstream.size).toBeGreaterThan(0)
      expect(Object.fromEntries(ours)).toEqual(Object.fromEntries(upstream))
    })

    it('should scope the variables to the .jse-theme-dark class', () => {
      expect(darkTheme.trim().startsWith('.jse-theme-dark {')).toBe(true)
    })
  })
})
