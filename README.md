# tmp-nextjs

This repository is template for Next.js.  
This includes Storybook and TailwindCSS.  

## Setting

### Premise

- [Install VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Install Workspace recommended VSCode extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Install Volta](https://docs.volta.sh/guide/getting-started)
- [Install direnv](https://github.com/direnv/direnv)

### Execution environment setting

Install Node.js and npm and packages with following command.  

```zsh
direnv allow

volta install node@18.8.0 npm@8.19.0

npm install
```

## Usage

After completing Setting], run develop server with following command.  

```zsh
npm run dev
```

## Script

| Script | Content |
|:-------|:--------|
| `npm run update`| Bulk update of packages |
| `npm run dev` | Run develop server |
| `npm run build` | Production build |
| `npm run sb` | Run Storybook |

## Reference

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindui.com/)

## License

[MIT](https://opensource.org/licenses/MIT)
