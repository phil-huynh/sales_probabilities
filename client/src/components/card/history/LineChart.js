import React from "react";
import Paper from "@mui/material/Paper";
import { useContextStore } from "../../Context.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const { selected, pilyTeal, pilyBlue } = useContextStore();
  const options = {
    responsive: true,
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 1
      }
    },
    plugins: {
      legend: {
        position: "bottom"
      },
      title: {
        display: true,
        text: "Probablity History"
      }
    }
  };
  const [labels, pilProbs, repProbs] = [
    ["Today"],
    [selected.pilytixProbability],
    [selected.repProbability]
  ];
  selected.probabilityHistory.forEach((entry) => {
    labels.splice(
      labels.length - 1,
      0,
      entry.daysAgo / 7 > 1
        ? `${entry.daysAgo / 7} wks ago`
        : `${entry.daysAgo / 7} wk ago`
    );
    pilProbs.splice(pilProbs.length - 1, 0, entry.pilytixProb);
    repProbs.splice(repProbs.length - 1, 0, entry.repProb);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Company Probability",
        data: pilProbs,
        borderColor: pilyTeal,
        backgroundColor: pilyTeal,
        pointRadius: 2
      },
      {
        label: "Sales Rep Probability",
        data: repProbs,
        borderColor: pilyBlue,
        backgroundColor: pilyBlue,
        pointRadius: 2
      }
    ]
  };

  return (
    <Paper elevation={6} sx={{ padding: "2%", height: "95%" }}>
      <Line options={options} data={data} sx={{ height: "50%" }} />
    </Paper>
  );
}
