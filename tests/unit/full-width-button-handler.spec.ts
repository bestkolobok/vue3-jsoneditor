import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { getElement, createElement } from '@/components/full-width-button-handler'

describe('full-width-button-handler.ts', () => {
  let parentElement: HTMLElement

  beforeEach(() => {
    parentElement = document.createElement('div')
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    document.body.removeChild(parentElement)
  })

  describe('getElement', () => {
    it('should find element by class selector', () => {
      const childElement = document.createElement('div')
      childElement.className = 'test-class'
      parentElement.appendChild(childElement)

      const result = getElement(parentElement, '.test-class')
      expect(result).toBe(childElement)
    })

    it('should find element by id selector', () => {
      const childElement = document.createElement('div')
      childElement.id = 'test-id'
      parentElement.appendChild(childElement)

      const result = getElement(parentElement, '#test-id')
      expect(result).toBe(childElement)
    })

    it('should find element by tag selector', () => {
      const childElement = document.createElement('span')
      parentElement.appendChild(childElement)

      const result = getElement(parentElement, 'span')
      expect(result).toBe(childElement)
    })

    it('should return null when element not found', () => {
      const result = getElement(parentElement, '.non-existent')
      expect(result).toBeNull()
    })

    it('should find nested element', () => {
      const wrapper = document.createElement('div')
      const nested = document.createElement('button')
      nested.className = 'nested-button'
      wrapper.appendChild(nested)
      parentElement.appendChild(wrapper)

      const result = getElement(parentElement, '.nested-button')
      expect(result).toBe(nested)
    })

    it('should find first matching element when multiple exist', () => {
      const first = document.createElement('div')
      first.className = 'duplicate'
      first.textContent = 'first'

      const second = document.createElement('div')
      second.className = 'duplicate'
      second.textContent = 'second'

      parentElement.appendChild(first)
      parentElement.appendChild(second)

      const result = getElement(parentElement, '.duplicate')
      expect(result).toBe(first)
      expect(result?.textContent).toBe('first')
    })

    it('should work with complex selectors', () => {
      const wrapper = document.createElement('div')
      wrapper.className = 'menu'

      const button = document.createElement('button')
      button.className = 'btn primary'
      wrapper.appendChild(button)
      parentElement.appendChild(wrapper)

      const result = getElement(parentElement, '.menu .btn.primary')
      expect(result).toBe(button)
    })

    it('should work with attribute selectors', () => {
      const input = document.createElement('input')
      input.setAttribute('data-testid', 'my-input')
      parentElement.appendChild(input)

      const result = getElement(parentElement, '[data-testid="my-input"]')
      expect(result).toBe(input)
    })
  })

  describe('createElement', () => {
    it('should create div element', () => {
      const element = createElement('div')
      expect(element.tagName.toLowerCase()).toBe('div')
    })

    it('should create button element', () => {
      const element = createElement('button')
      expect(element.tagName.toLowerCase()).toBe('button')
    })

    it('should create span element', () => {
      const element = createElement('span')
      expect(element.tagName.toLowerCase()).toBe('span')
    })

    it('should create input element', () => {
      const element = createElement('input')
      expect(element.tagName.toLowerCase()).toBe('input')
    })

    it('should create element that can be appended to DOM', () => {
      const element = createElement('p')
      element.textContent = 'Test paragraph'

      parentElement.appendChild(element)

      const found = getElement(parentElement, 'p')
      expect(found).toBe(element)
      expect(found?.textContent).toBe('Test paragraph')
    })

    it('should create element that can have class added', () => {
      const element = createElement('div')
      element.classList.add('my-class')

      expect(element.classList.contains('my-class')).toBe(true)
    })

    it('should create element that can have id set', () => {
      const element = createElement('div')
      element.id = 'my-id'

      expect(element.id).toBe('my-id')
    })

    it('should create element that can have innerHTML set', () => {
      const element = createElement('div')
      element.innerHTML = '<span>Inner content</span>'

      expect(element.innerHTML).toBe('<span>Inner content</span>')
      expect(element.querySelector('span')).not.toBeNull()
    })

    it('should create element with no children by default', () => {
      const element = createElement('div')
      expect(element.children.length).toBe(0)
    })

    it('should create element with empty class list', () => {
      const element = createElement('div')
      expect(element.classList.length).toBe(0)
    })
  })
})