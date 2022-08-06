import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './LoadingSkeleton.css'
import { useWindowSize } from '../../../hooks/useWindowSize'

const LoadingSkeleton = () => {
  let width = 200

  //typeOfDevice is used to determine the width of the current device/window
  const {
    typeOfDevice: { isDesktop, isMobile, isTablet },
  } = useWindowSize()

  //we are setting the skeleton width depending on the device/window size
  if (isDesktop) {
    width = 210
  } else if (isTablet) {
    width = 160
  } else if (isMobile) {
    width = 145
  }

  //creating the skeleton of count 10 to cover the screen
  return (
    <div className="loadingSkeleton">
      {Array.from({ length: 10 }, (_, index) => (
        <div className="skeleton" key={index}>
          <Skeleton height={180} width={width || 200} />
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
