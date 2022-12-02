import type { StorybookConfig } from '@storybook/react-vite'
// import type { StorybookConfig } from '@storybook/react-webpack5'
// import { DefinePlugin } from 'webpack'
// import { resolve } from 'path'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    // name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  // webpackFinal: (config) => {
  //   if (config.module?.rules) {
  //     config.module.rules = config.module.rules.map((rule) => {
  //       // HACK: Override SVG loader to not use file-loader
  //       if (rule !== '...' && rule.test?.toString().indexOf('svg') !== -1) {
  //         rule.exclude = /\.svg$/
  //       }
  //       return rule
  //     })

  //     config.module.rules.push({
  //       test: /\.svg$/,
  //       use: ['@svgr/webpack'],
  //       issuer: /\.tsx$/,
  //     })
  //   }

  //   if (config.resolve?.alias) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       ...{
  //         '@assets': resolve(__dirname, '../src/assets/'),
  //         '@components': resolve(__dirname, '../src/components/'),
  //         '@libs': resolve(__dirname, '../src/libs/'),
  //       },
  //     }
  //   }

  //   // HACK: STORYBOOK environment variable is not working, so set
  //   // https://github.com/storybookjs/storybook/pull/12997
  //   config.plugins?.push(
  //     new DefinePlugin({
  //       STORYBOOK: true,
  //     })
  //   )

  //   return config
  // },
}

export default config
