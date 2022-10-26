import { useWindow } from '@libs/window'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Page } from '@components/sample/page'

export const Sample: NextPage = () => {
  const { width } = useWindow()

  return (
    <>
      <Head>
        <title>Storybook Sample page</title>
        <meta
          name="viewport"
          content={`width=${
            width > 375 ? 'device-width' : '375'
          }, height=device-height,initial-scale=1`}
        />
      </Head>

      <Page />
    </>
  )
}

export default Sample
