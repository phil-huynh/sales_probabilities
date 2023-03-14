import React from "react";
import Paper from "@mui/material/Paper";
import { useContextStore } from "../../Context.js";
import DoughnutChart from "../../tools/DoughnutChart.js";

export default function Probabilities() {
  const { selected, pilyTeal, pilyBlue } = useContextStore();

  const formatData = (data) => [data, 1 - data];
  const colorData = (color) => [color, "rgba(255,255,255,0)"];

  const pilyProb = {
    beforeDatasetDraw(chart) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bold 1rem sans-serif";
      ctx.fillStyle = pilyTeal;
      ctx.textAlign = "center";
      ctx.textBaseline = "mid";
      ctx.fillText(
        data.datasets[0].data[0],
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    }
  };

  const repProb = {
    beforeDatasetDraw(chart) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bold 1rem sans-serif";
      ctx.fillStyle = pilyBlue;
      ctx.textAlign = "center";
      ctx.textBaseline = "mid";
      ctx.fillText(
        data.datasets[0].data[0],
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    }
  };

  const style = {
    marginY: "1%",
    padding: "4%",
    height: "49%",
    marginBottom: "2.75%"
  };

  return (
    <div style={{ height: "95%" }}>
      <Paper elevation={10} sx={style}>
        <DoughnutChart
          labels={["Company Probability", ""]}
          chartData={formatData(selected.pilytixProbability)}
          color={colorData(pilyTeal)}
          plugin={pilyProb}
          opts={{ cutout: "75%" }}
        />
      </Paper>
      <Paper elevation={10} sx={style}>
        <DoughnutChart
          labels={["Rep Probability", ""]}
          chartData={formatData(selected.repProbability)}
          color={colorData(pilyBlue)}
          plugin={repProb}
          opts={{ cutout: "75%" }}
        />
      </Paper>
    </div>
  );
}
