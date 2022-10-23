import { useRouter } from 'next/router'
import en from '../locales/en'
import ja from '../locales/ja'

export const useLocale = () => {
  const { locale } = useRouter()
  const text = locale === 'en' ? en : ja
  return { text }
}
