import type { StorybookConfig } from '@storybook/nextjs'
import { resolve } from 'node:path'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: (config) => {
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule) => {
        // HACK: Override SVG loader to not use file-loader
        if (rule !== '...' && rule.test?.toString().indexOf('svg') !== -1) {
          rule.exclude = /\.svg$/
        }
        return rule
      })

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        issuer: /\.tsx$/,
      })
    }

    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        ...{
          '@assets': resolve(__dirname, '../src/assets/'),
          '@components': resolve(__dirname, '../src/components/'),
          '@libs': resolve(__dirname, '../src/libs/'),
        },
      }
    }

    return config
  },
}

export default config
