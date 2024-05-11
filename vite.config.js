import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'pages')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
	root,
    build: {
        outDir,
        rollupOptions: {
            input: {
                QuickRoute: resolve(root, 'QuickRoute', 'index.html'),
                
                RouteCheck: resolve(root, 'RouteCheck', 'index.html'),
            }
        }
    }
})