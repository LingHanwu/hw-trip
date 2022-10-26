import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver(), VarletUIResolver()],
    }),
    autoImport({
      resolvers: [VantResolver({ autoImport: true }), VarletUIResolver({ autoImport: true })]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
