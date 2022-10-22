import { defineConfig } from 'vite'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [svgr({ exportAsDefault: true })],
  resolve: {
    alias: {
      '@css': resolve(__dirname, './public/css/'),
      '@svg': resolve(__dirname, './public/svg/'),
    },
  },
  // HACK: STORYBOOK environment variable is not working, so set
  // https://github.com/storybookjs/storybook/pull/12997
  define: {
    'process.env.STORYBOOK': true,
  },
})
