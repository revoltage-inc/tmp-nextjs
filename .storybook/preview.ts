import { themes } from '@storybook/theming'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/assets/css/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' },
  },
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'gray',
        value: '#f3f4f6',
      },
    ],
  },
}
