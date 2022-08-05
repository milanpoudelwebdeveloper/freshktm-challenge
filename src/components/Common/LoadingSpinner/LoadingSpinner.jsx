import React from 'react'
import { MoonLoader } from 'react-spinners'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner">
      <MoonLoader color="#0071bd" />
    </div>
  )
}

export default LoadingSpinner
