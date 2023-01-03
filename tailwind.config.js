const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {
      colors: {
        main: colors.white,
      },
      fontFamily: {
        'noto-sans-jp': ['var(--font-noto-sans-jp)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('not-first', '&:not(:first-child)')
      addVariant('not-last', '&:not(:last-child)')
    }),
    plugin(({ addUtilities }) => {
      addUtilities([
        {
          '.line-clamp-1': {
            display: '-webkit-box',
            '-webkit-line-clamp': '1',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
        },
        {
          '.line-clamp-2': {
            display: '-webkit-box',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
        },
        {
          '.line-clamp-3': {
            display: '-webkit-box',
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
        },
      ])
    }),
  ],
  important: false,
}
