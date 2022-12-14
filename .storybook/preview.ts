import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/assets/css/global.css'
// FIX: Make fonts in next/font work by overriding cascading variables.
import '../src/assets/css/font.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  viewport: {
    defaultViewport: 'laptop',
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...{
        laptop: {
          name: 'Laptop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1536px',
            height: '960px',
          },
        },
      },
    },
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
