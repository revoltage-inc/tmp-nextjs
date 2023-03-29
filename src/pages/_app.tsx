import '@assets/css/global.css'
import type { AppProps } from 'next/app'
import { Noto_Sans_JP } from 'next/font/google'
import { useEffect } from 'react'
// import type { NextWebVitalsMetric } from 'next/app'

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // HACK: IE Access Block
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
      location.replace('../unsupport.html')
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSansJP.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
