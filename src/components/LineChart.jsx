import React from 'react'
import { Line } from 'react-chartjs-2'
import { getTimeAndPrice } from '../utils/getTimeAndPrice'

const LineChart = ({ cryptoDetails }) => {
  const { timeLine, prices } = getTimeAndPrice(cryptoDetails)
  const data = {
    labels: timeLine.slice(0, 20),
    datasets: [
      {
        label: 'Price in USD',
        data: prices.slice(0, 20),
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  }
  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default LineChart
