import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './LoadingSkeleton.css'
import { useWindowSize } from '../../../hooks/useWindowSize'

const LoadingSkeleton = () => {
  let width = 200
  const {
    typeOfDevice: { isDesktop, isMobile, isTablet },
  } = useWindowSize()

  if (isDesktop) {
    width = 210
  } else if (isTablet) {
    width = 160
  } else if (isMobile) {
    width = 145
  }

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
