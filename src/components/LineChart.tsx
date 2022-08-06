import React from 'react'
import { Line } from 'react-chartjs-2'
import { getTimeAndPrice } from '../utils/getTimeAndPrice'

import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

interface props {
  cryptoDetails: ICurrencyHistory[]
}

const LineChart: React.FC<props> = ({ cryptoDetails }) => {
  //here getTimeAndPrice is the utils function that will return us array of all date/time and array of prices separately
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
