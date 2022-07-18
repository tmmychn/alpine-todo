import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const vueJsx = require('@vitejs/plugin-vue-jsx');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ]
})
