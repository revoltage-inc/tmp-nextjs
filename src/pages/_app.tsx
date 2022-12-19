import '@assets/css/global.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
// import type { NextWebVitalsMetric } from 'next/app'

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // HACK: IE Access Block
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
      location.replace('../unsupport.html')
    }
  }, [])

  return <Component {...pageProps} />
}
