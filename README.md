# tmp-nextjs

This repository is template for Next.js.  
This includes Storybook and TailwindCSS.  

<h2 id="setting">Setting</h2>

<h3>Premise</h3>

- [Install VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Install Workspace recommended VSCode extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Install Volta](https://docs.volta.sh/guide/getting-started)
- [Install direnv](https://github.com/direnv/direnv)

<h3>Create environment</h3>

Create environment with following command.  

```zsh
direnv allow

volta install node@18.8.0 npm@8.19.0

npm install
```

## Usage

After completing [Setting](./README.md#setting), run develop server with following command.  

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
- [Storybook](https://storybook.js.org/)
- [Vite](https://ja.vitejs.dev/)
- [TailwindCSS](https://tailwindui.com/)
- [tRPC](https://trpc.io/)

## License

[MIT](https://opensource.org/licenses/MIT)
