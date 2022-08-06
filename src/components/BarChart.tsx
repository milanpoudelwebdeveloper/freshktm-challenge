import React from 'react'
import { Bar } from 'react-chartjs-2'
import { backgroundColors, borderColors } from '../constants/barchartColors'
import { getTimeAndPrice } from '../utils/getTimeAndPrice'

import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

interface props {
  cryptoDetails: ICurrencyHistory[]
}

const BarChart: React.FC<props> = ({ cryptoDetails }) => {
  const { timeLine, prices } = getTimeAndPrice(cryptoDetails)

  const data = {
    //using slice to just show 10 data points, here timeline respresents the date of the data point
    labels: timeLine.slice(0, 10),
    datasets: [
      {
        label: 'Price in USD',
        data: prices.slice(0, 10),
        fill: true,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
      },
    ],
  }

  return (
    <div>
      <Bar data={data} />
    </div>
  )
}

export default BarChart
