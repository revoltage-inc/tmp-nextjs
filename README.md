# tmp-nextjs

このリポジトリは、Next.jsのテンプレートです。  
構成にはStorybookとTailwindCSSが含まれます。  

> **Warning**  
> このテンプレートは個人的なベストプラクティスに基づいて作成されたものです。  
> 破壊的な変更に注意してください。  

## 前提

- [VSCodeのインストール](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [VSCodeの推奨拡張機能のインストール](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Voltaのインストール](https://docs.volta.sh/guide/getting-started)

## 設定

### 実行環境の作成

下記のコマンドで実行環境を作成します。  

```zsh
volta install node@18.16.1 npm@9.5.1 pnpm@8.6.5

pnpm install
```

### 環境変数の設定

下記のコマンドで実行環境を作成します。  
.envファイルに環境変数を記述します。  

```zsh
cp .env.template .env
```

## 使用方法

下記コマンドでローカルサーバーを起動する。  

```zsh
pnpm run dev
```

## デプロイ

Vercelでデプロイする場合は[こちらの記事](https://vercel.com/docs/concepts/deployments/overview)などを参考にデプロイを行う。  

デプロイにVercel Botを使用していると、デフォルトではコミットのたびにデプロイが発生するため、  
Git > Ignored Build Stepで下記のコマンドを指定することで、  
mainなど特定のブランチにマージされた場合のみデプロイするように設定できる。  

```zsh
bash scripts/vercel-ignore-build-step.sh
```

## スクリプト

| スクリプト | 説明 |
|:-------|:--------|
| `pnpm run update`| パッケージを一括更新する |
| `pnpm run dev` | ローカルサーバーを起動する |
| `pnpm run build` | 本番ビルドする |
| `pnpm run sb` | Storybookを起動する |

## 参考

### ドキュメント

- [Node.js](https://nodejs.org/ja/download/releases)
- [Next.js](https://nextjs.org/)
- [Turbopack](https://turbo.build/pack)
- [Storybook](https://storybook.js.org/)
- [TailwindCSS](https://tailwindui.com/)
- [Vercel](https://vercel.com/)

### 記事

### Storybook

- [Integrate Next.js and Storybook automatically](https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/)
- [Integrate Next.js and Storybook](https://storybook.js.org/recipes/next)

### Vercel

- [Ignored Build Step](https://zenn.dev/bisque/scraps/50a51a28d6eb85)

## 推奨ライブラリ

- [Zod](https://zod.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Headless UI](https://headlessui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [date-fns](https://date-fns.org/)
- [SWR](https://github.com/vercel/swr)
- [NextAuth.js](https://next-auth.js.org/)
- [Recoil](https://recoiljs.org/)

## ライセンス

[MIT](https://opensource.org/licenses/MIT)
