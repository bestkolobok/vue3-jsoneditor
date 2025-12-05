import { describe, it, expect } from 'vitest'
import type {
  TMode,
  JSONEditorOptions,
  JSONValue,
  TextContent,
  JSONContent,
  Content,
  QueryLanguageId
} from '@/types'

describe('types.ts', () => {
  describe('TMode', () => {
    it('should accept valid mode values', () => {
      const textMode: TMode = 'text'
      const treeMode: TMode = 'tree'
      const tableMode: TMode = 'table'

      expect(textMode).toBe('text')
      expect(treeMode).toBe('tree')
      expect(tableMode).toBe('table')
    })
  })

  describe('QueryLanguageId', () => {
    it('should accept valid query language ids', () => {
      const javascript: QueryLanguageId = 'javascript'
      const lodash: QueryLanguageId = 'lodash'
      const jmespath: QueryLanguageId = 'jmespath'
      const jsonquery: QueryLanguageId = 'jsonquery'
      const jsonpath: QueryLanguageId = 'jsonpath'

      expect(javascript).toBe('javascript')
      expect(lodash).toBe('lodash')
      expect(jmespath).toBe('jmespath')
      expect(jsonquery).toBe('jsonquery')
      expect(jsonpath).toBe('jsonpath')
    })
  })

  describe('JSONValue', () => {
    it('should accept any value type', () => {
      const stringValue: JSONValue = 'hello'
      const numberValue: JSONValue = 42
      const booleanValue: JSONValue = true
      const nullValue: JSONValue = null
      const objectValue: JSONValue = { key: 'value' }
      const arrayValue: JSONValue = [1, 2, 3]

      expect(stringValue).toBe('hello')
      expect(numberValue).toBe(42)
      expect(booleanValue).toBe(true)
      expect(nullValue).toBeNull()
      expect(objectValue).toEqual({ key: 'value' })
      expect(arrayValue).toEqual([1, 2, 3])
    })
  })

  describe('TextContent', () => {
    it('should have text property', () => {
      const content: TextContent = { text: '{"key": "value"}' }
      expect(content.text).toBe('{"key": "value"}')
    })

    it('should accept empty string', () => {
      const content: TextContent = { text: '' }
      expect(content.text).toBe('')
    })
  })

  describe('JSONContent', () => {
    it('should have json property with object', () => {
      const content: JSONContent = { json: { key: 'value' } }
      expect(content.json).toEqual({ key: 'value' })
    })

    it('should have json property with array', () => {
      const content: JSONContent = { json: [1, 2, 3] }
      expect(content.json).toEqual([1, 2, 3])
    })

    it('should have json property with primitive', () => {
      const stringContent: JSONContent = { json: 'hello' }
      const numberContent: JSONContent = { json: 42 }
      const boolContent: JSONContent = { json: true }
      const nullContent: JSONContent = { json: null }

      expect(stringContent.json).toBe('hello')
      expect(numberContent.json).toBe(42)
      expect(boolContent.json).toBe(true)
      expect(nullContent.json).toBeNull()
    })
  })

  describe('Content', () => {
    it('should be either TextContent or JSONContent', () => {
      const textContent: Content = { text: '{}' }
      const jsonContent: Content = { json: {} }

      expect('text' in textContent).toBe(true)
      expect('json' in jsonContent).toBe(true)
    })

    it('should work with type guards', () => {
      const content: Content = { text: '{"key": "value"}' }

      if ('text' in content) {
        expect(content.text).toBe('{"key": "value"}')
      }
    })
  })

  describe('JSONEditorOptions', () => {
    it('should accept all optional properties', () => {
      const options: JSONEditorOptions = {
        readOnly: true,
        indentation: 2,
        tabSize: 4,
        mode: 'tree',
        mainMenuBar: true,
        navigationBar: true,
        statusBar: true,
        askToFormat: true,
        escapeControlCharacters: false,
        escapeUnicodeCharacters: false,
        flattenColumns: true,
        height: '400px',
        fullWidthButton: true,
        darkTheme: false,
      }

      expect(options.readOnly).toBe(true)
      expect(options.indentation).toBe(2)
      expect(options.tabSize).toBe(4)
      expect(options.mode).toBe('tree')
    })

    it('should accept empty options', () => {
      const options: JSONEditorOptions = {}
      expect(options).toEqual({})
    })

    it('should accept queryLanguagesIds', () => {
      const options: JSONEditorOptions = {
        queryLanguagesIds: ['javascript', 'lodash', 'jmespath'],
        queryLanguageId: 'javascript',
      }

      expect(options.queryLanguagesIds).toEqual(['javascript', 'lodash', 'jmespath'])
      expect(options.queryLanguageId).toBe('javascript')
    })

    it('should accept numeric height', () => {
      const options: JSONEditorOptions = {
        height: 400,
      }

      expect(options.height).toBe(400)
    })

    it('should accept string height', () => {
      const options: JSONEditorOptions = {
        height: '400px',
      }

      expect(options.height).toBe('400px')
    })

    it('should accept string indentation', () => {
      const options: JSONEditorOptions = {
        indentation: '\t',
      }

      expect(options.indentation).toBe('\t')
    })
  })
})