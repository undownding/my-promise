import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        preserveModules: false,
      },
    },
  },
  plugins: [
    tsconfigPaths({
      loose: true,
      root: './',
    }),
    dts({
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
})
