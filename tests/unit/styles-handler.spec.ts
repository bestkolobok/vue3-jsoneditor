import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { setFullWidthButtonStyle, setDarkThemeStyle } from '@/components/styles-handler'

describe('styles-handler.ts', () => {
  beforeEach(() => {
    // Clean up any existing style elements before each test
    const existingFullWidthStyle = document.getElementById('full-width-button')
    const existingDarkThemeStyle = document.getElementById('dark-theme')

    if (existingFullWidthStyle) {
      existingFullWidthStyle.remove()
    }
    if (existingDarkThemeStyle) {
      existingDarkThemeStyle.remove()
    }
  })

  afterEach(() => {
    // Clean up style elements after each test
    const fullWidthStyle = document.getElementById('full-width-button')
    const darkThemeStyle = document.getElementById('dark-theme')

    if (fullWidthStyle) {
      fullWidthStyle.remove()
    }
    if (darkThemeStyle) {
      darkThemeStyle.remove()
    }
  })

  describe('setFullWidthButtonStyle', () => {
    it('should create style element with correct id', async () => {
      await setFullWidthButtonStyle()

      const styleElement = document.getElementById('full-width-button')
      expect(styleElement).not.toBeNull()
      expect(styleElement?.tagName.toLowerCase()).toBe('style')
    })

    it('should add style element to head', async () => {
      await setFullWidthButtonStyle()

      const styleElement = document.getElementById('full-width-button')
      expect(styleElement?.parentNode).toBe(document.head)
    })

    it('should not create duplicate style elements', async () => {
      await setFullWidthButtonStyle()
      await setFullWidthButtonStyle()
      await setFullWidthButtonStyle()

      const styleElements = document.querySelectorAll('#full-width-button')
      expect(styleElements.length).toBe(1)
    })

    it('should contain style content', async () => {
      await setFullWidthButtonStyle()

      const styleElement = document.getElementById('full-width-button')
      expect(styleElement?.textContent).toBeDefined()
      expect(styleElement?.textContent?.length).toBeGreaterThan(0)
    })
  })

  describe('setDarkThemeStyle', () => {
    it('should create style element with correct id', async () => {
      await setDarkThemeStyle()

      const styleElement = document.getElementById('dark-theme')
      expect(styleElement).not.toBeNull()
      expect(styleElement?.tagName.toLowerCase()).toBe('style')
    })

    it('should add style element to head', async () => {
      await setDarkThemeStyle()

      const styleElement = document.getElementById('dark-theme')
      expect(styleElement?.parentNode).toBe(document.head)
    })

    it('should not create duplicate style elements', async () => {
      await setDarkThemeStyle()
      await setDarkThemeStyle()
      await setDarkThemeStyle()

      const styleElements = document.querySelectorAll('#dark-theme')
      expect(styleElements.length).toBe(1)
    })

    it('should contain style content', async () => {
      await setDarkThemeStyle()

      const styleElement = document.getElementById('dark-theme')
      expect(styleElement?.textContent).toBeDefined()
      expect(styleElement?.textContent?.length).toBeGreaterThan(0)
    })
  })

  describe('both styles together', () => {
    it('should be able to set both styles independently', async () => {
      await setFullWidthButtonStyle()
      await setDarkThemeStyle()

      const fullWidthStyle = document.getElementById('full-width-button')
      const darkThemeStyle = document.getElementById('dark-theme')

      expect(fullWidthStyle).not.toBeNull()
      expect(darkThemeStyle).not.toBeNull()
    })

    it('should maintain both styles after multiple calls', async () => {
      await setFullWidthButtonStyle()
      await setDarkThemeStyle()
      await setFullWidthButtonStyle()
      await setDarkThemeStyle()

      const fullWidthStyles = document.querySelectorAll('#full-width-button')
      const darkThemeStyles = document.querySelectorAll('#dark-theme')

      expect(fullWidthStyles.length).toBe(1)
      expect(darkThemeStyles.length).toBe(1)
    })
  })
})