import React from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../constants/barchartColors";
import { getTimeAndPrice } from "../utils/getTimeAndPrice";

const BarChart = ({ cryptoDetails }) => {
  const { timeLine, prices } = getTimeAndPrice(cryptoDetails);

  const data = {
    labels: timeLine.slice(0, 10),
    datasets: [
      {
        label: "Price in USD",
        data: prices.slice(0, 10),
        fill: true,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
