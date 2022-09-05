import { StorybookConfig } from '@storybook/react-vite'
// import { StorybookConfig } from '@storybook/react-webpack5'
// import { DefinePlugin } from 'webpack'
// import { resolve } from 'path'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
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
  //       if (rule !== '...' && rule.oneOf) {
  //         rule.oneOf = rule.oneOf.map((oneOfRule) => {
  //           // HACK: Override SVG loader to not use file-loader
  //           if (String(oneOfRule.test) === String(/\.svg$/)) {
  //             return {
  //               test: /\.svg$/,
  //               use: ['@svgr/webpack'],
  //               issuer: /\.tsx$/,
  //             }
  //           }
  //           return oneOfRule
  //         })
  //       }

  //       return rule
  //     })
  //   }

  //   if (config.resolve?.alias) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       ...{
  //         '@css': resolve(__dirname, '../src/assets/css/'),
  //         '@svg': resolve(__dirname, '../src/assets/svg/'),
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
