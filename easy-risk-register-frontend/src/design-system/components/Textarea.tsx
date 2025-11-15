import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'

import { cn } from '../../utils/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const hasError = Boolean(error)
    const errorId = error ? `error-${id || props.name || ''}` : undefined
    const helperId = helperText ? `helper-${id || props.name || ''}` : undefined

    return (
      <div className="w-full">
        {label && (
          <label
            className="block text-sm font-medium text-text-high mb-2"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          className={cn(
            'w-full rounded-xl border border-border-subtle bg-surface-primary px-4 py-3 text-text-high placeholder:text-text-low focus:outline-none focus:ring-4 focus:ring-brand-primary/20 disabled:cursor-not-allowed disabled:opacity-50 resize-y',
            hasError && 'border-status-danger focus:ring-status-danger/20',
            className
          )}
          ref={ref}
          aria-describedby={helperId || errorId ? `${helperId || ''} ${errorId || ''}`.trim() : undefined}
          aria-invalid={hasError}
          {...props}
        />
        {helperText && !hasError && (
          <p id={helperId} className="mt-2 text-sm text-text-low">{helperText}</p>
        )}
        {error && (
          <p id={errorId} className="mt-2 text-sm text-status-danger">{error}</p>
        )}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'

export default Textarea