module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-import': {},
    'postcss-inline-svg': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    },
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
}
