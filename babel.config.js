module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@svg': './public/svg',
        },
      },
    ],
    'inline-react-svg',
  ],
}
