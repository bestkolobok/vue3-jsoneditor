import { describe, it, expect, vi } from 'vitest'
import { pickDefinedProps, hasProp, watchPropNames, propNames, fullWidthIcon } from '@/components/utils'

describe('utils.ts', () => {
  describe('watchPropNames', () => {
    it('should contain expected property names for watching', () => {
      expect(watchPropNames).toContain('selection')
      expect(watchPropNames).toContain('mainMenuBar')
      expect(watchPropNames).toContain('navigationBar')
      expect(watchPropNames).toContain('statusBar')
      expect(watchPropNames).toContain('askToFormat')
      expect(watchPropNames).toContain('readOnly')
      expect(watchPropNames).toContain('indentation')
      expect(watchPropNames).toContain('tabSize')
      expect(watchPropNames).toContain('escapeControlCharacters')
      expect(watchPropNames).toContain('escapeUnicodeCharacters')
      expect(watchPropNames).toContain('flattenColumns')
      expect(watchPropNames).toContain('validator')
      expect(watchPropNames).toContain('onClassName')
      expect(watchPropNames).toContain('onRenderValue')
      expect(watchPropNames).toContain('onRenderMenu')
    })

    it('should be a readonly array', () => {
      expect(Array.isArray(watchPropNames)).toBe(true)
      expect(watchPropNames.length).toBe(15)
    })
  })

  describe('propNames', () => {
    it('should contain all watchPropNames plus additional properties', () => {
      watchPropNames.forEach(propName => {
        expect(propNames).toContain(propName)
      })
    })

    it('should contain mode property', () => {
      expect(propNames).toContain('mode')
    })

    it('should contain parser properties', () => {
      expect(propNames).toContain('parser')
      expect(propNames).toContain('validationParser')
      expect(propNames).toContain('pathParser')
    })

    it('should be a readonly array', () => {
      expect(Array.isArray(propNames)).toBe(true)
      expect(propNames.length).toBe(19)
    })
  })

  describe('pickDefinedProps', () => {
    it('should return empty object when no props are defined', () => {
      const result = pickDefinedProps({}, {})
      expect(result).toEqual({})
    })

    it('should pick props from props object when defined', () => {
      const props = {
        mode: 'tree',
        readOnly: true,
        mainMenuBar: false,
      }
      const result = pickDefinedProps({}, props)
      expect(result).toEqual({
        mode: 'tree',
        readOnly: true,
        mainMenuBar: false,
      })
    })

    it('should pick props from options when props are undefined', () => {
      const options = {
        mode: 'text',
        indentation: 2,
        tabSize: 4,
      }
      const result = pickDefinedProps(options, {})
      expect(result).toEqual({
        mode: 'text',
        indentation: 2,
        tabSize: 4,
      })
    })

    it('should prefer props over options', () => {
      const options = {
        mode: 'text',
        readOnly: false,
      }
      const props = {
        mode: 'tree',
        readOnly: true,
      }
      const result = pickDefinedProps(options, props)
      expect(result.mode).toBe('tree')
      expect(result.readOnly).toBe(true)
    })

    it('should merge props and options correctly', () => {
      const options = {
        mode: 'text',
        indentation: 2,
      }
      const props = {
        readOnly: true,
        mainMenuBar: false,
      }
      const result = pickDefinedProps(options, props)
      expect(result).toEqual({
        mode: 'text',
        indentation: 2,
        readOnly: true,
        mainMenuBar: false,
      })
    })

    it('should ignore properties not in propNames', () => {
      const props = {
        mode: 'tree',
        unknownProp: 'value',
        anotherUnknown: 123,
      }
      const result = pickDefinedProps({}, props)
      expect(result).toEqual({ mode: 'tree' })
      expect(result).not.toHaveProperty('unknownProp')
      expect(result).not.toHaveProperty('anotherUnknown')
    })

    it('should handle undefined options', () => {
      const props = { mode: 'tree' }
      const result = pickDefinedProps(undefined, props)
      expect(result).toEqual({ mode: 'tree' })
    })

    it('should handle boolean false values correctly', () => {
      const props = {
        readOnly: false,
        mainMenuBar: false,
        navigationBar: false,
        statusBar: false,
      }
      const result = pickDefinedProps({}, props)
      expect(result.readOnly).toBe(false)
      expect(result.mainMenuBar).toBe(false)
      expect(result.navigationBar).toBe(false)
      expect(result.statusBar).toBe(false)
    })

    it('should handle number zero values correctly', () => {
      const props = {
        indentation: 0,
        tabSize: 0,
      }
      const result = pickDefinedProps({}, props)
      expect(result.indentation).toBe(0)
      expect(result.tabSize).toBe(0)
    })

    it('should handle function props', () => {
      const validatorFn = () => []
      const onClassNameFn = () => 'custom-class'
      const props = {
        validator: validatorFn,
        onClassName: onClassNameFn,
      }
      const result = pickDefinedProps({}, props)
      expect(result.validator).toBe(validatorFn)
      expect(result.onClassName).toBe(onClassNameFn)
    })
  })

  describe('hasProp', () => {
    it('should return true when property exists', () => {
      const obj = { text: 'hello' }
      expect(hasProp<{ text: string }>(obj, 'text')).toBe(true)
    })

    it('should return false when property does not exist', () => {
      const obj = { text: 'hello' }
      expect(hasProp<{ json: unknown }>(obj, 'json')).toBe(false)
    })

    it('should return true when property is null', () => {
      const obj = { json: null }
      expect(hasProp<{ json: unknown }>(obj, 'json')).toBe(true)
    })

    it('should return false when property is undefined', () => {
      const obj = { json: undefined }
      expect(hasProp<{ json: unknown }>(obj, 'json')).toBe(false)
    })

    it('should return true when property is empty string', () => {
      const obj = { text: '' }
      expect(hasProp<{ text: string }>(obj, 'text')).toBe(true)
    })

    it('should return true when property is zero', () => {
      const obj = { count: 0 }
      expect(hasProp<{ count: number }>(obj, 'count')).toBe(true)
    })

    it('should return true when property is false', () => {
      const obj = { enabled: false }
      expect(hasProp<{ enabled: boolean }>(obj, 'enabled')).toBe(true)
    })

    it('should return false for null object', () => {
      expect(hasProp<{ prop: unknown }>(null, 'prop')).toBeFalsy()
    })

    it('should return false for undefined object', () => {
      expect(hasProp<{ prop: unknown }>(undefined, 'prop')).toBeFalsy()
    })

    it('should log warning when isWarning is true and property not found', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const obj = { text: 'hello' }

      hasProp<{ json: unknown }>(obj, 'json', true)

      expect(consoleSpy).toHaveBeenCalledWith(
        'Typeguard warn!!! The object has no property: ',
        'json'
      )
      consoleSpy.mockRestore()
    })

    it('should not log warning when property exists', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const obj = { text: 'hello' }

      hasProp<{ text: string }>(obj, 'text', true)

      expect(consoleSpy).not.toHaveBeenCalled()
      consoleSpy.mockRestore()
    })

    it('should work as type guard', () => {
      interface TextContent { text: string }
      interface JsonContent { json: unknown }

      const content: TextContent | JsonContent = { text: 'hello' }

      if (hasProp<TextContent>(content, 'text')) {
        // TypeScript should recognize content.text here
        expect(content.text).toBe('hello')
      }
    })
  })

  describe('fullWidthIcon', () => {
    it('should be a non-empty string', () => {
      expect(typeof fullWidthIcon).toBe('string')
      expect(fullWidthIcon.length).toBeGreaterThan(0)
    })

    it('should contain SVG element', () => {
      expect(fullWidthIcon).toContain('<svg')
      expect(fullWidthIcon).toContain('</svg>')
    })

    it('should have correct viewBox', () => {
      expect(fullWidthIcon).toContain('viewBox="0 0 1024 1024"')
    })

    it('should contain path elements for icon', () => {
      expect(fullWidthIcon).toContain('<path')
    })

    it('should have correct dimensions', () => {
      expect(fullWidthIcon).toContain('width="24"')
      expect(fullWidthIcon).toContain('height="24"')
    })

    it('should have correct CSS class', () => {
      expect(fullWidthIcon).toContain('class="fa-icon')
    })
  })
})