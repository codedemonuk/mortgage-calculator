import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.{ts,svelte}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  },
})
