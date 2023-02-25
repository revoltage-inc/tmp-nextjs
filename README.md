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

<h3>Create execution environment</h3>

Create execution environment with following command.  

```zsh
volta install node@18.14.2 npm@9.5.0

npm install
```

<h3>Create environment file</h3>

Then create environment file with following command.  
Set environment variables in environment file.  

```zsh
cp .env.template .env
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

### Document

- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [TailwindCSS](https://tailwindui.com/)

### Article

- [Integrate Next.js and Storybook automatically](https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/)
- [Ignored Build Step](https://zenn.dev/bisque/scraps/50a51a28d6eb85)

## Recommended

- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [date-fns](https://date-fns.org/)

## License

[MIT](https://opensource.org/licenses/MIT)
