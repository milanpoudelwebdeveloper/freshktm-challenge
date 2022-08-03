import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = ({ cryptoDetails }) => {
  const timeLine = [];
  const prices = [];

  cryptoDetails?.forEach(({ priceUsd, time }) => {
    prices.push(priceUsd);
    timeLine.push(new Date(time).toLocaleDateString());
  });

  const data = {
    labels: timeLine,
    datasets: [
      {
        label: "Price in USD",
        data: prices,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
