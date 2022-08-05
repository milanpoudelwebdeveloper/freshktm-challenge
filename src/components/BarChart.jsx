import React from 'react'
import { Bar } from 'react-chartjs-2'
import { backgroundColors, borderColors } from '../constants/barchartColors'
import { getTimeAndPrice } from '../utils/getTimeAndPrice'

//eslint-disable-next-line
import Chart from 'chart.js/auto'

const BarChart = ({ cryptoDetails }) => {
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
