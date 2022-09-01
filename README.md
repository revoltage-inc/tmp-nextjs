# tmp-nextjs

This repository is template for Next.js.  
This includes Storybook and TailwindCSS.  

## Setting

- [Install VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Install Workspace recommended VSCode extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Install Volta](https://docs.volta.sh/guide/getting-started)
- [Install direnv](https://github.com/direnv/direnv)

## Usage

```zsh
direnv allow

volta install node@18.8.0 npm@8.19.0

npm install

npm run dev
```

## Script

```zsh
# Run in development mode
npm run dev

# Production build
npm run build

# Boot Storybook
npm run storybook
```

## Reference

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindui.com/)

## License

[MIT](https://opensource.org/licenses/MIT)
