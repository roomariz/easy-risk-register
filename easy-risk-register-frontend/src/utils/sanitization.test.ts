import { describe, it, expect } from 'vitest'
import { sanitizeTextInput, sanitizeRiskInput } from './sanitization'

describe('Sanitization utility functions', () => {
  describe('sanitizeTextInput', () => {
    it('should remove HTML tags from text', () => {
      const input = '<script>alert("xss")</script>Hello World'
      const result = sanitizeTextInput(input)
      expect(result).toBe('Hello World')
    })

    it('should remove dangerous attributes from text', () => {
      const input = '<p onclick="alert(\'xss\')">Safe text</p>'
      const result = sanitizeTextInput(input)
      expect(result).toBe('<p>Safe text</p>')
    })

    it('should allow safe HTML elements', () => {
      const input = '<p>This is <strong>bold</strong> and <em>italic</em> text</p>'
      const result = sanitizeTextInput(input)
      expect(result).toBe('<p>This is <strong>bold</strong> and <em>italic</em> text</p>')
    })

    it('should handle empty strings', () => {
      expect(sanitizeTextInput('')).toBe('')
    })

    it('should handle non-string inputs', () => {
      // @ts-expect-error Testing invalid input type
      expect(sanitizeTextInput(123)).toBe(123)
    })

    it('should trim whitespace', () => {
      const input = '  Hello World  '
      const result = sanitizeTextInput(input)
      expect(result).toBe('Hello World')
    })
  })

  describe('sanitizeRiskInput', () => {
    it('should sanitize title field', () => {
      const input = {
        title: '<script>alert("xss")</script>Risk Title',
        description: 'Safe description',
        category: 'Operational',
        probability: 3,
        impact: 3
      }
      const result = sanitizeRiskInput(input)
      expect(result.title).toBe('Risk Title')
      expect(result.description).toBe('Safe description')
    })

    it('should sanitize description field', () => {
      const input = {
        title: 'Risk Title',
        description: '<h1>Dangerous description<script>alert(1)</script></h1>',
        category: 'Operational',
        probability: 3,
        impact: 3
      }
      const result = sanitizeRiskInput(input)
      expect(result.description).toBe('<h1>Dangerous description</h1>')
    })

    it('should sanitize mitigationPlan field', () => {
      const input = {
        title: 'Risk Title',
        description: 'Safe description',
        mitigationPlan: '<iframe src="javascript:alert(1)"></iframe>Plan text',
        category: 'Operational',
        probability: 3,
        impact: 3
      }
      const result = sanitizeRiskInput(input)
      expect(result.mitigationPlan).toBe('Plan text')
    })

    it('should sanitize category field', () => {
      const input = {
        title: 'Risk Title',
        description: 'Safe description',
        category: '<script>document.location="http://evil.com"</script>Security',
        probability: 3,
        impact: 3
      }
      const result = sanitizeRiskInput(input)
      expect(result.category).toBe('Security')
    })

    it('should not affect non-text fields', () => {
      const input = {
        title: 'Risk Title',
        description: 'Safe description',
        category: 'Operational',
        probability: 3,
        impact: 4,
        status: 'open'
      }
      const result = sanitizeRiskInput(input)
      expect(result.probability).toBe(3)
      expect(result.impact).toBe(4)
      expect(result.status).toBe('open')
    })

    it('should handle input without text fields', () => {
      const input = {
        probability: 3,
        impact: 4
      }
      const result = sanitizeRiskInput(input)
      expect(result).toEqual({ probability: 3, impact: 4 })
    })
  })
})