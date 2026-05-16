import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    base: './',
    plugins: [svelte()],
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['tests/**/*.test.{ts,svelte}'],
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
            threshold: {
                statements: 80,
                branches: 80,
                functions: 100,
                lines: 80
            }
        }
    },
})
