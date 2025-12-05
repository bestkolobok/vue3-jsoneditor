import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { createApp, defineComponent } from 'vue'
import { JsonEditorPlugin } from '@/JsonEditorPlugin'

describe('JsonEditorPlugin.ts', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  describe('JsonEditorPlugin', () => {
    it('should be a valid Vue plugin with install method', () => {
      expect(JsonEditorPlugin).toBeDefined()
      expect(typeof JsonEditorPlugin.install).toBe('function')
    })

    it('should register component with default name "JsonEditor"', () => {
      const app = createApp(defineComponent({
        template: '<div></div>'
      }))

      app.use(JsonEditorPlugin)

      // Check that the component is registered
      expect(app._context.components['JsonEditor']).toBeDefined()
    })

    it('should register component with custom name', () => {
      const app = createApp(defineComponent({
        template: '<div></div>'
      }))

      app.use(JsonEditorPlugin, { componentName: 'CustomJsonEditor' })

      expect(app._context.components['CustomJsonEditor']).toBeDefined()
    })

    it('should provide options to component', () => {
      const app = createApp(defineComponent({
        template: '<div></div>'
      }))

      const options = {
        mode: 'tree' as const,
        readOnly: true,
        height: 400,
      }

      app.use(JsonEditorPlugin, { options })

      // Check that options are provided
      expect(app._context.provides['jsonEditorOptions']).toEqual(options)
    })

    it('should not register plugin twice', () => {
      const app = createApp(defineComponent({
        template: '<div></div>'
      }))

      app.use(JsonEditorPlugin)
      app.use(JsonEditorPlugin)

      // Should not throw and component should still work
      expect(app._context.components['JsonEditor']).toBeDefined()
    })

    it('should set global property flag', () => {
      const app = createApp(defineComponent({
        template: '<div></div>'
      }))

      app.use(JsonEditorPlugin)

      expect(app.config.globalProperties.$_vue3TsJsoneditor).toBe(true)
    })

    it('should work with empty params', () => {
      const app = createApp(defineComponent({
        template: '<div></div>'
      }))

      app.use(JsonEditorPlugin, {})

      expect(app._context.components['JsonEditor']).toBeDefined()
    })
  })

  describe('Type exports', () => {
    it('should export Path type', async () => {
      const module = await import('@/JsonEditorPlugin')
      expect(module).toBeDefined()
    })

    it('should export JsonEditorPlugin', async () => {
      const module = await import('@/JsonEditorPlugin')
      expect(module.JsonEditorPlugin).toBeDefined()
    })

    it('should export default component', async () => {
      const module = await import('@/JsonEditorPlugin')
      expect(module.default).toBeDefined()
    })

    it('should export renderValue lazy function', async () => {
      const module = await import('@/JsonEditorPlugin')
      expect(module.renderValue).toBeDefined()
    })

    it('should export renderJSONSchemaEnum lazy function', async () => {
      const module = await import('@/JsonEditorPlugin')
      expect(module.renderJSONSchemaEnum).toBeDefined()
    })
  })
})