# tmp-nextjs(α)

This repository is template for Next.js.  
This includes Storybook and TailwindCSS.  

> **Warning**  
> This template is still in alpha stage.  
> Beware destructive changes.  

<h2 id="setting">Setting</h2>

<h3>Premise</h3>

- [Install VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [Install Workspace recommended VSCode extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Install Volta](https://docs.volta.sh/guide/getting-started)

<h3>Create environment</h3>

Create environment with following command.  

```zsh
volta install node@18.12.0 npm@9.0.0

npm install
```

Then create environment file with following command.  

```zsh
cp .env.template .env
```

Environment variables in the .env file
`BASIC_AUTH_USERNAME` and `BASIC_AUTH_PASSWORD` with any user and password to set up Basic Authentication.

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
- [Prisma](https://www.prisma.io/)

## License

[MIT](https://opensource.org/licenses/MIT)
