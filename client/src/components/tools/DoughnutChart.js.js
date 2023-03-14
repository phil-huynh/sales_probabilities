import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  labels,
  tipLabel,
  chartData,
  color,
  plugin,
  opts
}) {
  const options = opts;
  const data = {
    labels: labels,
    datasets: [
      {
        label: tipLabel,
        data: chartData,
        backgroundColor: color,
        borderWidth: 1
      }
    ]
  };
  return <Doughnut data={data} options={options} plugins={[plugin]} />;
}
