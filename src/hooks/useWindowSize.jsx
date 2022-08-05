import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(undefined)

  const typeOfDevice = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  }

  if (windowSize) {
    if (windowSize > 514 && windowSize < 1024) {
      typeOfDevice.isTablet = true
    } else if (windowSize > 1024) {
      typeOfDevice.isDesktop = true
    } else if (windowSize < 514) {
      typeOfDevice.isMobile = true
    }
  }

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { typeOfDevice }
}
