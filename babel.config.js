module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@svg': './src/svg',
        },
      },
    ],
    'inline-react-svg',
  ],
}
