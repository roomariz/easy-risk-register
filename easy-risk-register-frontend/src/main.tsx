import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Only run accessibility tests in development
if (process.env.NODE_ENV === 'development') {
  import('./components/AccessibilityTester').then(module => {
    const AccessibilityTester = module.default
    const rootElement = document.getElementById('root')!
    const root = createRoot(rootElement)

    root.render(
      <StrictMode>
        <App />
        <AccessibilityTester />
      </StrictMode>,
    )
  }).catch(() => {
    // Fallback if accessibility tester fails to load
    const rootElement = document.getElementById('root')!
    const root = createRoot(rootElement)

    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
} else {
  const rootElement = document.getElementById('root')!
  const root = createRoot(rootElement)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
