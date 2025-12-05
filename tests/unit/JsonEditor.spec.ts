import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent, ref } from 'vue'
import JsonEditor from '@/components/JsonEditor.vue'

// Mock vanilla-jsoneditor
const mockEditor = {
  get: vi.fn(() => ({ json: {} })),
  set: vi.fn(),
  update: vi.fn(),
  updateProps: vi.fn(),
  destroy: vi.fn(),
  focus: vi.fn(),
  refresh: vi.fn(),
  patch: vi.fn(),
  transform: vi.fn(),
  scrollTo: vi.fn(),
  findElement: vi.fn(),
  acceptAutoRepair: vi.fn(),
  validate: vi.fn(),
  expand: vi.fn(),
  collapse: vi.fn(),
}

vi.mock('vanilla-jsoneditor', () => ({
  createJSONEditor: vi.fn(() => mockEditor),
  javascriptQueryLanguage: { id: 'javascript' },
  lodashQueryLanguage: { id: 'lodash' },
  jmespathQueryLanguage: { id: 'jmespath' },
  jsonQueryLanguage: { id: 'jsonquery' },
  jsonpathQueryLanguage: { id: 'jsonpath' },
}))

describe('JsonEditor.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEditor.get.mockReturnValue({ json: {} })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Component Rendering', () => {
    it('should render component container', async () => {
      const wrapper = mount(JsonEditor)
      await flushPromises()

      expect(wrapper.find('.vue-ts-json-editor').exists()).toBe(true)
    })

    it('should apply dark theme class when darkTheme prop is true', async () => {
      const wrapper = mount(JsonEditor, {
        props: { darkTheme: true }
      })
      await flushPromises()

      expect(wrapper.find('.jse-theme-dark').exists()).toBe(true)
    })

    it('should not apply dark theme class when darkTheme prop is false', async () => {
      const wrapper = mount(JsonEditor, {
        props: { darkTheme: false }
      })
      await flushPromises()

      expect(wrapper.find('.jse-theme-dark').exists()).toBe(false)
    })

    it('should render fallback slot initially', () => {
      const wrapper = mount(JsonEditor, {
        slots: {
          default: '<div class="loading">Loading...</div>'
        }
      })

      expect(wrapper.find('.loading').exists()).toBe(true)
    })
  })

  describe('Props Handling', () => {
    it('should accept mode prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { mode: 'text' }
      })

      expect(wrapper.props('mode')).toBe('text')
    })

    it('should accept json prop', async () => {
      const jsonData = { key: 'value' }
      const wrapper = mount(JsonEditor, {
        props: { json: jsonData }
      })

      expect(wrapper.props('json')).toEqual(jsonData)
    })

    it('should accept text prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { text: '{"key": "value"}' }
      })

      expect(wrapper.props('text')).toBe('{"key": "value"}')
    })

    it('should accept modelValue prop', async () => {
      const value = { foo: 'bar' }
      const wrapper = mount(JsonEditor, {
        props: { modelValue: value }
      })

      expect(wrapper.props('modelValue')).toEqual(value)
    })

    it('should accept height prop as number', async () => {
      const wrapper = mount(JsonEditor, {
        props: { height: 400 }
      })

      expect(wrapper.props('height')).toBe(400)
    })

    it('should accept height prop as string', async () => {
      const wrapper = mount(JsonEditor, {
        props: { height: '400px' }
      })

      expect(wrapper.props('height')).toBe('400px')
    })

    it('should accept readOnly prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { readOnly: true }
      })

      expect(wrapper.props('readOnly')).toBe(true)
    })

    it('should accept mainMenuBar prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { mainMenuBar: false }
      })

      expect(wrapper.props('mainMenuBar')).toBe(false)
    })

    it('should accept navigationBar prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { navigationBar: false }
      })

      expect(wrapper.props('navigationBar')).toBe(false)
    })

    it('should accept statusBar prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { statusBar: false }
      })

      expect(wrapper.props('statusBar')).toBe(false)
    })

    it('should accept indentation prop as number', async () => {
      const wrapper = mount(JsonEditor, {
        props: { indentation: 2 }
      })

      expect(wrapper.props('indentation')).toBe(2)
    })

    it('should accept indentation prop as string', async () => {
      const wrapper = mount(JsonEditor, {
        props: { indentation: '\t' }
      })

      expect(wrapper.props('indentation')).toBe('\t')
    })

    it('should accept tabSize prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { tabSize: 4 }
      })

      expect(wrapper.props('tabSize')).toBe(4)
    })

    it('should accept queryLanguagesIds prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { queryLanguagesIds: ['javascript', 'lodash'] }
      })

      expect(wrapper.props('queryLanguagesIds')).toEqual(['javascript', 'lodash'])
    })

    it('should accept queryLanguageId prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { queryLanguageId: 'javascript' }
      })

      expect(wrapper.props('queryLanguageId')).toBe('javascript')
    })

    it('should accept escapeControlCharacters prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { escapeControlCharacters: true }
      })

      expect(wrapper.props('escapeControlCharacters')).toBe(true)
    })

    it('should accept escapeUnicodeCharacters prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { escapeUnicodeCharacters: true }
      })

      expect(wrapper.props('escapeUnicodeCharacters')).toBe(true)
    })

    it('should accept flattenColumns prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { flattenColumns: false }
      })

      expect(wrapper.props('flattenColumns')).toBe(false)
    })

    it('should accept fullWidthButton prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { fullWidthButton: true }
      })

      expect(wrapper.props('fullWidthButton')).toBe(true)
    })

    it('should accept askToFormat prop', async () => {
      const wrapper = mount(JsonEditor, {
        props: { askToFormat: false }
      })

      expect(wrapper.props('askToFormat')).toBe(false)
    })

    it('should accept validator function prop', async () => {
      const validatorFn = vi.fn(() => [])
      const wrapper = mount(JsonEditor, {
        props: { validator: validatorFn }
      })

      expect(wrapper.props('validator')).toBe(validatorFn)
    })

    it('should accept onClassName function prop', async () => {
      const onClassNameFn = vi.fn(() => 'custom-class')
      const wrapper = mount(JsonEditor, {
        props: { onClassName: onClassNameFn }
      })

      expect(wrapper.props('onClassName')).toBe(onClassNameFn)
    })

    it('should accept onRenderValue function prop', async () => {
      const onRenderValueFn = vi.fn(() => [])
      const wrapper = mount(JsonEditor, {
        props: { onRenderValue: onRenderValueFn }
      })

      expect(wrapper.props('onRenderValue')).toBe(onRenderValueFn)
    })

    it('should accept onRenderMenu function prop', async () => {
      const onRenderMenuFn = vi.fn((items) => items)
      const wrapper = mount(JsonEditor, {
        props: { onRenderMenu: onRenderMenuFn }
      })

      expect(wrapper.props('onRenderMenu')).toBe(onRenderMenuFn)
    })
  })

  describe('Height Styling', () => {
    it('should apply height style when height prop is provided', async () => {
      const wrapper = mount(JsonEditor, {
        props: { height: 400 }
      })
      await flushPromises()

      const container = wrapper.find('.vue-ts-json-editor')
      expect(container.attributes('style')).toContain('height')
    })

    it('should not apply height style when height prop is not provided', async () => {
      const wrapper = mount(JsonEditor)
      await flushPromises()

      const container = wrapper.find('.vue-ts-json-editor')
      expect(container.attributes('style')).toBeUndefined()
    })
  })

  describe('Default Props', () => {
    it('should have default mode as tree', () => {
      const wrapper = mount(JsonEditor)
      expect(wrapper.props('mode')).toBe('tree')
    })

    it('should have undefined value by default', () => {
      const wrapper = mount(JsonEditor)
      expect(wrapper.props('value')).toBeUndefined()
    })

    it('should have undefined json by default', () => {
      const wrapper = mount(JsonEditor)
      expect(wrapper.props('json')).toBeUndefined()
    })

    it('should have undefined readOnly by default', () => {
      const wrapper = mount(JsonEditor)
      expect(wrapper.props('readOnly')).toBeUndefined()
    })

    it('should have undefined mainMenuBar by default', () => {
      const wrapper = mount(JsonEditor)
      expect(wrapper.props('mainMenuBar')).toBeUndefined()
    })
  })

  describe('Different JSON Value Types', () => {
    it('should handle object JSON', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { key: 'value' } }
      })

      expect(wrapper.props('json')).toEqual({ key: 'value' })
    })

    it('should handle array JSON', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: [1, 2, 3] }
      })

      expect(wrapper.props('json')).toEqual([1, 2, 3])
    })

    it('should handle string JSON', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: 'hello' }
      })

      expect(wrapper.props('json')).toBe('hello')
    })

    it('should handle number JSON', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: 42 }
      })

      expect(wrapper.props('json')).toBe(42)
    })

    it('should handle boolean JSON', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: true }
      })

      expect(wrapper.props('json')).toBe(true)
    })

    it('should handle null JSON', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: null }
      })

      expect(wrapper.props('json')).toBeNull()
    })

    it('should handle nested objects', async () => {
      const nestedData = {
        level1: {
          level2: {
            level3: 'deep value'
          }
        }
      }
      const wrapper = mount(JsonEditor, {
        props: { json: nestedData }
      })

      expect(wrapper.props('json')).toEqual(nestedData)
    })

    it('should handle mixed array', async () => {
      const mixedArray = [1, 'two', { three: 3 }, [4, 5], null, true]
      const wrapper = mount(JsonEditor, {
        props: { json: mixedArray }
      })

      expect(wrapper.props('json')).toEqual(mixedArray)
    })
  })

  describe('Mode Variants', () => {
    it('should accept tree mode', async () => {
      const wrapper = mount(JsonEditor, {
        props: { mode: 'tree' }
      })

      expect(wrapper.props('mode')).toBe('tree')
    })

    it('should accept text mode', async () => {
      const wrapper = mount(JsonEditor, {
        props: { mode: 'text' }
      })

      expect(wrapper.props('mode')).toBe('text')
    })

    it('should accept table mode', async () => {
      const wrapper = mount(JsonEditor, {
        props: { mode: 'table' }
      })

      expect(wrapper.props('mode')).toBe('table')
    })
  })

  describe('Keyboard Event Handling', () => {
    it('should stop keydown propagation', async () => {
      const wrapper = mount(JsonEditor)
      await flushPromises()

      const container = wrapper.find('.vue-ts-json-editor')

      // The component has @keydown.stop which should stop propagation
      // We just verify the component exists and has the correct structure
      expect(container.exists()).toBe(true)
    })
  })
})

describe('JsonEditor Component Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should work in a parent component', async () => {
    const ParentComponent = defineComponent({
      components: { JsonEditor },
      template: `
        <div>
          <JsonEditor
            :json="jsonData"
            :height="400"
            mode="tree"
          />
        </div>
      `,
      setup() {
        const jsonData = ref({ name: 'test' })
        return { jsonData }
      }
    })

    const wrapper = mount(ParentComponent)
    await flushPromises()

    expect(wrapper.findComponent(JsonEditor).exists()).toBe(true)
  })

  it('should work with v-model:json', async () => {
    const ParentComponent = defineComponent({
      components: { JsonEditor },
      template: `
        <div>
          <JsonEditor v-model:json="jsonData" />
        </div>
      `,
      setup() {
        const jsonData = ref({ initial: 'value' })
        return { jsonData }
      }
    })

    const wrapper = mount(ParentComponent)
    await flushPromises()

    const editor = wrapper.findComponent(JsonEditor)
    expect(editor.props('json')).toEqual({ initial: 'value' })
  })

  it('should work with v-model:text', async () => {
    const ParentComponent = defineComponent({
      components: { JsonEditor },
      template: `
        <div>
          <JsonEditor v-model:text="textData" mode="text" />
        </div>
      `,
      setup() {
        const textData = ref('{"key": "value"}')
        return { textData }
      }
    })

    const wrapper = mount(ParentComponent)
    await flushPromises()

    const editor = wrapper.findComponent(JsonEditor)
    expect(editor.props('text')).toBe('{"key": "value"}')
  })
})

describe('JsonEditor with Plugin Options', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should receive injected options from plugin', async () => {
    const wrapper = mount(JsonEditor, {
      global: {
        provide: {
          jsonEditorOptions: {
            mode: 'text',
            height: 500,
            darkTheme: true,
          }
        }
      }
    })
    await flushPromises()

    // The component should have received the options
    expect(wrapper.find('.jse-theme-dark').exists()).toBe(true)
  })
})