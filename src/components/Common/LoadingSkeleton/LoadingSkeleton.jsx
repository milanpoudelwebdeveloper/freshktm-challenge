import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './LoadingSkeleton.css'

const LoadingSkeleton = () => {
  return (
    <div className="loadingSkeleton">
      {Array.from({ length: 10 }, (x) => (
        <div className="skeleton" key={x}>
          <Skeleton height={200} width={230} />
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
