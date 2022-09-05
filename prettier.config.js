module.exports = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  printWidth: 100,
  // Bug: Prettier may not work with plugins
  // https://github.com/prettier/prettier-vscode/issues/2259
  plugins: [require('prettier-plugin-tailwindcss')],
}
