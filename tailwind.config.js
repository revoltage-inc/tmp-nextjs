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
      addUtilities([])
    }),
  ],
  important: false,
}
