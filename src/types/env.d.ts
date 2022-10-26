// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  // eslint-disable-next-line no-unused-vars
  interface ProcessEnv extends Partial<Readonly<typeof import('./env')>> {
    readonly STORYBOOK?: boolean
  }
}
