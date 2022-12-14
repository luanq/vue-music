import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    base:'./',
    css: {
        preprocessorOptions: {
            less: {
                charset:false,
                modifyVars: {
                    hack: `true; @import (reference) "${resolve('src/assets/less/main.less')}";`,
                },
                javascriptEnabled: true,
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@apis': resolve(__dirname, 'src/apis'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@plugins': resolve(__dirname, 'src/plugins'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@views': resolve(__dirname, 'src/views'),
        }
    },
    server: {
        port: 1234,
        host: '0.0.0.0',
        https: false
    },
    build:{
        minify:false,
        assetsPublicPath:'./'
    }
})