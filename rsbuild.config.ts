import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import packageJson from './package.json'
import envConfig, { processPblVars } from './env'

export default defineConfig({
  server: {
    port: envConfig.port
  },
  source: {
    define: processPblVars
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
