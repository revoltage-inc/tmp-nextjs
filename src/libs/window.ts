import { useEffect, useState } from 'react'

export const useWindow = () => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight })
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])
  return size
}
