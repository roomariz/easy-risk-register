if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
  // Ensure React's test/dev helpers (e.g. act) are available during Vitest runs
  process.env.NODE_ENV = 'test'
}

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    // Include tests from the new dedicated test directory structure
    include: ['test/**/*.test.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
    exclude: [
      'node_modules/**',
      'dist/**',
      'cypress/**',
      '.{git,svn,hg}/**'
    ]
  }
})
