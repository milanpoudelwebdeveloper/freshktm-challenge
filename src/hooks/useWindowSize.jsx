import { useEffect, useState } from 'react'

//this custom hook useWindowSize is used to get the width of the current device/window
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
    //handleResize function sets the current window size to the windowSize variable
    const handleResize = () => setWindowSize(window.innerWidth)

    //setting event listener, so whenever window is resized, it will call handleResize function
    window.addEventListener('resize', handleResize)

    //calling handleResize() so when app starts , it will get the current window size for the first time
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { typeOfDevice }
}
