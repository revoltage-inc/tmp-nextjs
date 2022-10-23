import '@assets/css/globals.css'
import type { AppProps } from 'next/app'
// import type { NextWebVitalsMetric } from 'next/app'

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
