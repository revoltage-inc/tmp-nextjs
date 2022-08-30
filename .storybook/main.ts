import { StorybookConfig } from '@storybook/core-common'
import { mergeConfig } from 'vite'
import { join } from 'path'

interface Config extends StorybookConfig {
  viteFinal?: (config: Record<string, any>) => Promise<Record<string, any>>
}

const config: Config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['../public'],
  async viteFinal(config: Record<string, any>) {
    return mergeConfig(config, {
      plugins: [],
      resolve: {
        alias: [],
      },
      // HACK: STORYBOOK environment variable is not working, so set
      // https://github.com/storybookjs/storybook/pull/12997
      define: {
        'process.env.STORYBOOK': true,
      },
    })
  },
}

export default config
