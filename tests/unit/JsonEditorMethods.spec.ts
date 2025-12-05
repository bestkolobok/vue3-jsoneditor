import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises, VueWrapper } from '@vue/test-utils'
import JsonEditor from '@/components/JsonEditor.vue'
import type { Content } from '@/types'
import type { ComponentPublicInstance } from 'vue'
import type { JSONPatchDocument } from 'immutable-json-patch'

// Interface for exposed methods
interface JsonEditorExposed {
  $get: () => Content
  $set: (content: Content) => void
  $update: (content: Content) => void
  $updateProps: (props: Record<string, unknown>) => void
  $refresh: () => Promise<void>
  $focus: () => void
  $destroy: () => Promise<void>
  $patch: (operations: JSONPatchDocument) => unknown
  $transform: (options?: Record<string, unknown>) => void
  $scrollTo: (path: (string | number)[]) => Promise<void>
  $findElement: (path: (string | number)[]) => HTMLElement | undefined
  $acceptAutoRepair: () => Content
  $validate: () => unknown
  $collapseAll: () => void
  $expandAll: () => void
  $expand: (path: (string | number)[], callback?: (path: (string | number)[]) => boolean) => void
}

type JsonEditorInstance = ComponentPublicInstance & JsonEditorExposed

// Mock vanilla-jsoneditor with more complete implementation
const mockEditor = {
  get: vi.fn(() => ({ json: { test: 'data' } })),
  set: vi.fn(),
  update: vi.fn(),
  updateProps: vi.fn(),
  destroy: vi.fn().mockResolvedValue(undefined),
  focus: vi.fn(),
  refresh: vi.fn().mockResolvedValue(undefined),
  patch: vi.fn(() => ({ json: {} })),
  transform: vi.fn(),
  scrollTo: vi.fn().mockResolvedValue(undefined),
  findElement: vi.fn(() => document.createElement('div')),
  acceptAutoRepair: vi.fn(() => ({ json: {} })),
  validate: vi.fn(() => undefined),
  expand: vi.fn(),
  collapse: vi.fn(),
}

vi.mock('vanilla-jsoneditor', () => ({
  createJSONEditor: vi.fn(() => mockEditor),
  javascriptQueryLanguage: { id: 'javascript', name: 'JavaScript', description: '', createQuery: () => {} },
  lodashQueryLanguage: { id: 'lodash', name: 'Lodash', description: '', createQuery: () => {} },
  jmespathQueryLanguage: { id: 'jmespath', name: 'JMESPath', description: '', createQuery: () => {} },
  jsonQueryLanguage: { id: 'jsonquery', name: 'JSON Query', description: '', createQuery: () => {} },
  jsonpathQueryLanguage: { id: 'jsonpath', name: 'JSON Path', description: '', createQuery: () => {} },
}))

// Helper function to get typed wrapper
function getTypedVm(wrapper: VueWrapper): JsonEditorInstance {
  return wrapper.vm as JsonEditorInstance
}

describe('JsonEditor Exposed Methods', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockEditor.get.mockReturnValue({ json: { test: 'data' } })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('$get()', () => {
    it('should return current content', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { initial: 'value' } }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$get()
      expect(mockEditor.get).toHaveBeenCalled()
    })
  })

  describe('$set()', () => {
    it('should set new content', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const newContent: Content = { json: { newKey: 'newValue' } }
      getTypedVm(wrapper).$set(newContent)

      expect(mockEditor.set).toHaveBeenCalledWith(newContent)
    })

    it('should set text content', async () => {
      const wrapper = mount(JsonEditor, {
        props: { mode: 'text', text: '{}' }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const textContent: Content = { text: '{"key": "value"}' }
      getTypedVm(wrapper).$set(textContent)

      expect(mockEditor.set).toHaveBeenCalledWith(textContent)
    })
  })

  describe('$update()', () => {
    it('should update content', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const updatedContent: Content = { json: { updated: true } }
      getTypedVm(wrapper).$update(updatedContent)

      expect(mockEditor.update).toHaveBeenCalledWith(updatedContent)
    })
  })

  describe('$updateProps()', () => {
    it('should update editor props', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {}, readOnly: false }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$updateProps({ readOnly: true })

      expect(mockEditor.updateProps).toHaveBeenCalledWith({ readOnly: true })
    })

    it('should update multiple props at once', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const newProps = {
        readOnly: true,
        mainMenuBar: false,
        navigationBar: false
      }
      getTypedVm(wrapper).$updateProps(newProps)

      expect(mockEditor.updateProps).toHaveBeenCalledWith(newProps)
    })
  })

  describe('$refresh()', () => {
    it('should refresh the editor', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      await getTypedVm(wrapper).$refresh()

      expect(mockEditor.refresh).toHaveBeenCalled()
    })
  })

  describe('$focus()', () => {
    it('should focus the editor', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$focus()

      expect(mockEditor.focus).toHaveBeenCalled()
    })
  })

  describe('$destroy()', () => {
    it('should destroy the editor', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      await getTypedVm(wrapper).$destroy()

      expect(mockEditor.destroy).toHaveBeenCalled()
    })
  })

  describe('$patch()', () => {
    it('should apply JSON patch operations', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { name: 'old' } }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const operations = [
        { op: 'replace' as const, path: '/name', value: 'new' }
      ]

      getTypedVm(wrapper).$patch(operations)

      expect(mockEditor.patch).toHaveBeenCalledWith(operations)
    })

    it('should apply add operation', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const operations = [
        { op: 'add' as const, path: '/newProp', value: 'newValue' }
      ]

      getTypedVm(wrapper).$patch(operations)

      expect(mockEditor.patch).toHaveBeenCalledWith(operations)
    })

    it('should apply remove operation', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { toRemove: 'value' } }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const operations = [
        { op: 'remove' as const, path: '/toRemove' }
      ]

      getTypedVm(wrapper).$patch(operations)

      expect(mockEditor.patch).toHaveBeenCalledWith(operations)
    })
  })

  describe('$transform()', () => {
    it('should open transform modal', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$transform()

      expect(mockEditor.transform).toHaveBeenCalled()
    })

    it('should open transform modal with options', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const options = { id: 'custom-transform' }
      getTypedVm(wrapper).$transform(options)

      expect(mockEditor.transform).toHaveBeenCalledWith(options)
    })
  })

  describe('$scrollTo()', () => {
    it('should scroll to specific path', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { nested: { deep: 'value' } } }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const path = ['nested', 'deep']
      await getTypedVm(wrapper).$scrollTo(path)

      expect(mockEditor.scrollTo).toHaveBeenCalledWith(path)
    })

    it('should scroll to root', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      await getTypedVm(wrapper).$scrollTo([])

      expect(mockEditor.scrollTo).toHaveBeenCalledWith([])
    })

    it('should scroll to array index', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { items: ['a', 'b', 'c'] } }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      await getTypedVm(wrapper).$scrollTo(['items', 1])

      expect(mockEditor.scrollTo).toHaveBeenCalledWith(['items', 1])
    })
  })

  describe('$findElement()', () => {
    it('should find element by path', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { key: 'value' } }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$findElement(['key'])

      expect(mockEditor.findElement).toHaveBeenCalledWith(['key'])
    })
  })

  describe('$acceptAutoRepair()', () => {
    it('should accept auto repair suggestions', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$acceptAutoRepair()

      expect(mockEditor.acceptAutoRepair).toHaveBeenCalled()
    })
  })

  describe('$validate()', () => {
    it('should validate the content', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: {} }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$validate()

      expect(mockEditor.validate).toHaveBeenCalled()
    })
  })

  describe('$collapseAll()', () => {
    it('should collapse all nodes in tree mode', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { nested: { deep: 'value' } }, mode: 'tree' }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$collapseAll()

      expect(mockEditor.collapse).toHaveBeenCalledWith([], true)
    })

    it('should not collapse in text mode', async () => {
      const wrapper = mount(JsonEditor, {
        props: { text: '{}', mode: 'text' }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      mockEditor.collapse.mockClear()

      getTypedVm(wrapper).$collapseAll()

      expect(typeof getTypedVm(wrapper).$collapseAll).toBe('function')
    })
  })

  describe('$expandAll()', () => {
    it('should expand all nodes in tree mode', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { nested: { deep: 'value' } }, mode: 'tree' }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      getTypedVm(wrapper).$expandAll()

      expect(mockEditor.expand).toHaveBeenCalledWith([])
    })

    it('should not expand in text mode', async () => {
      const wrapper = mount(JsonEditor, {
        props: { text: '{}', mode: 'text' }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      mockEditor.expand.mockClear()

      getTypedVm(wrapper).$expandAll()

      expect(typeof getTypedVm(wrapper).$expandAll).toBe('function')
    })
  })

  describe('$expand()', () => {
    it('should expand specific path', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { nested: { deep: 'value' } }, mode: 'tree' }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const path = ['nested']
      getTypedVm(wrapper).$expand(path)

      expect(mockEditor.expand).toHaveBeenCalledWith(path, undefined)
    })

    it('should expand with callback', async () => {
      const wrapper = mount(JsonEditor, {
        props: { json: { nested: { deep: 'value' } }, mode: 'tree' }
      })
      await flushPromises()
      await new Promise(resolve => setTimeout(resolve, 100))

      const path = ['nested']
      const callback = () => true
      getTypedVm(wrapper).$expand(path, callback)

      expect(mockEditor.expand).toHaveBeenCalledWith(path, callback)
    })
  })
})

describe('JsonEditor Event Emissions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should have correct emits defined', () => {
    const wrapper = mount(JsonEditor)

    const emits = wrapper.vm.$options.emits
    expect(emits).toContain('update:modelValue')
    expect(emits).toContain('update:json')
    expect(emits).toContain('update:text')
    expect(emits).toContain('update:jsonString')
    expect(emits).toContain('update:selection')
    expect(emits).toContain('change')
    expect(emits).toContain('error')
    expect(emits).toContain('change-mode')
    expect(emits).toContain('update:mode')
    expect(emits).toContain('change-query-language')
    expect(emits).toContain('focus')
    expect(emits).toContain('blur')
  })
})