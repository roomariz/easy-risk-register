import DOMPurify from 'isomorphic-dompurify'

// Configure DOMPurify to allow only safe HTML elements and attributes
// This prevents XSS attacks by removing any potentially dangerous code
const sanitizeHTML = (html: string): string => {
  if (!html) return html
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'b', 'i', 'u', 'ol', 'ul', 'li',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'code'
    ],
    ALLOWED_ATTR: [],
    FORBID_TAGS: ['script', 'object', 'embed', 'iframe', 'frame', 'frameset', 'form', 'input', 'button', 'select', 'textarea', 'link', 'meta', 'base'],
    FORBID_ATTR: ['src', 'href', 'on*', 'data*', 'form*', 'action', 'method', 'enctype', 'autocomplete']
  })
}

// Sanitize text input by removing HTML tags and other potentially unsafe content
export const sanitizeTextInput = (input: string): string => {
  if (typeof input !== 'string') return input as string

  // First, remove any HTML tags using DOMPurify
  const sanitized = sanitizeHTML(input)

  // Then trim whitespace and remove any remaining dangerous characters
  return sanitized.trim()
}

// Validate input length and content to prevent extremely large inputs
const validateInput = (input: string, maxLength: number = 5000): string | null => {
  if (input.length > maxLength) {
    return `Input exceeds maximum length of ${maxLength} characters`
  }
  return null
}

// Sanitize all text fields that can accept user input
export const sanitizeRiskInput = (input: Record<string, any>): Record<string, any> => {
  const sanitizedInput = { ...input }

  // Fields that should be sanitized with specific validation rules
  const textFields: Array<{ field: string, maxLength: number }> = [
    { field: 'title', maxLength: 200 },
    { field: 'description', maxLength: 5000 },
    { field: 'mitigationPlan', maxLength: 5000 },
    { field: 'category', maxLength: 100 }
  ]

  for (const { field, maxLength } of textFields) {
    if (typeof sanitizedInput[field] === 'string') {
      // Validate input length
      const validationError = validateInput(sanitizedInput[field], maxLength)
      if (validationError) {
        console.warn(`Validation error for ${field}: ${validationError}`)
        // Truncate to max length as a fallback
        sanitizedInput[field] = sanitizedInput[field].substring(0, maxLength)
      }

      sanitizedInput[field] = sanitizeTextInput(sanitizedInput[field])
    }
  }

  return sanitizedInput
}

// Additional validation function for CSV imports
export const validateCSVContent = (csv: string): boolean => {
  // Check for potential CSV injection patterns
  const injectionPatterns = [/^[\s]*[=+\-@]/, /[\r\n][\s]*[=+\-@]/] // Start with =, +, -, @
  return !injectionPatterns.some(pattern => pattern.test(csv))
}