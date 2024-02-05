import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import packageJson from './package.json'
export default defineConfig({
  server: {
    port: 9527
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      output: {
        library: `${packageJson.name}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${packageJson.name}`
      }
    }
  }
})
