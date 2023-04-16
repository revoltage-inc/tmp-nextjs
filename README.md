# tmp-nextjs

このリポジトリは、Next.js のテンプレートです。
これには、Storybook と Tailwind CSS が含まれます。

> **Warning**  
> このテンプレートはまだアルファ段階です。
> 破壊的な変更に注意してください。

## 前提

- [VSCodeのインストール](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
- [VSCodeの推奨拡張機能のインストール](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)
- [Voltaのインストール](https://docs.volta.sh/guide/getting-started)

## 設定

### 実行環境の作成

下記のコマンドで実行環境を作成します。  

```zsh
volta install node@18.16.0 npm@9.5.1 pnpm@8.2.0

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
npm run dev
```

## スクリプト

| スクリプト | 説明 |
|:-------|:--------|
| `npm run update`| パッケージを一括更新する |
| `npm run dev` | ローカルサーバーを起動する |
| `npm run build` | 本番ビルドする |
| `npm run sb` | Storybookを起動する |

## 参考

### ドキュメント

- [Node.js](https://nodejs.org/ja/download/releases)
- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [TailwindCSS](https://tailwindui.com/)

### 記事

- [Integrate Next.js and Storybook automatically](https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/)
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
