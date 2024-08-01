import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'pages')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    base: process.env.GITHUB_PAGES  // この行を追加
        ? "Archive"            // この行を追加
        : "./", 
    publicDir: resolve(__dirname, 'public'), // publicディレクトリを明示的に指定
    build: {
        outDir,
        rollupOptions: {
            input: {
                //route
                hp: resolve(root, 'index.html'),
                // tsukisamu
                //tsukisamu: resolve(root, 'tsukisamu', 'index.html'),
                tsukisamuQuickRoute: resolve(root, 'tsukisamu', 'QuickRoute', 'index.html'),
                tsukisamuRouteView: resolve(root, 'tsukisamu', 'RouteView', 'index.html'),
                
                // maeda
                //maeda: resolve(root, 'maeda', 'index.html'),
                //maedaQuickRoute: resolve(root, 'maeda', 'QuickRoute', 'index.html'),
                maedaRouteView: resolve(root, 'maeda', 'RouteView', 'index.html'),
                
                // idemitsu
                //idemitsu: resolve(root, 'idemitsu', 'index.html'),
                //idemitsuQuickRoute: resolve(root, 'idemitsu', 'QuickRoute', 'index.html'),
                //idemitsuRouteView: resolve(root, 'idemitsu', 'RouteView', 'index.html')
            }
        }
    }
})
