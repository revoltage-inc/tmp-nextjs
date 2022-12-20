import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Image from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import '../src/assets/css/font.css'
import '../src/assets/css/global.css'

// @ts-ignore
Image.defaultProps = {
  unoptimized: true,
}

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
  nextRouter: {
    Provider: RouterContext.Provider,
    push(url: string) {
      console.log('Route page: ' + url)
    },
  },
}
