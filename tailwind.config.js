const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    plugin(({ addVariant }) => {
      addVariant('not-first', '&:not(:first-child)')
      addVariant('not-last', '&:not(:last-child)')
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.box': {
          display: '-webkit-box',
        },
      })
    }),
  ],
  important: false,
}
