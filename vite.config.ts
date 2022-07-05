import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { ViteSentryPluginOptions } from 'vite-plugin-sentry'
import viteSentry from 'vite-plugin-sentry'

const sentryConfig: ViteSentryPluginOptions = {
  url: 'https://sentry.io',
  authToken: '6b41b79a0c564bcd838c4a0e7de148eae4bb6e2efa6c4858bc24fbfaa278f0cf',
  org: 'abunuo',
  project: 'vite-ts',
  release: '1.0.0',
  deploy: {
    env: 'production'
  },
  setCommits: {
    auto: true
  },
  sourceMaps: {
    include: ['./dist/assets'],
    ignore: ['node_modules'],
    urlPrefix: '~/assets'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSentry(sentryConfig)
  ],
  build: {
    sourcemap: true,
  },
  server: {
    port: 8081,
    open: true,
    proxy: { // 代理
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})
