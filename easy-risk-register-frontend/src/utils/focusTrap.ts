/**
 * Utility to trap focus within a given element (e.g., modal)
 * This ensures keyboard users can't tab outside of the focused element
 */
export const createFocusTrap = (element: HTMLElement | null) => {
  if (!element) return () => {}

  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>

  if (focusableElements.length === 0) {
    // If no focusable elements, return a function that does nothing
    return () => {}
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        lastElement.focus()
        e.preventDefault()
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        firstElement.focus()
        e.preventDefault()
      }
    }
  }

  // Focus the first element when focus trap is created
  firstElement.focus()

  document.addEventListener('keydown', handleTabKey)

  return () => {
    document.removeEventListener('keydown', handleTabKey)
  }
}

/**
 * Utility to manage focus when elements are added or removed from the DOM
 */
export const focusElement = (element: HTMLElement | null) => {
  if (element && element.focus) {
    element.focus()
  }
}

/**
 * Utility to return focus to a specific element (e.g., when closing a modal)
 */
export const returnFocusTo = (element: HTMLElement | null) => {
  if (element && element.focus) {
    element.focus({ preventScroll: true })
  }
}