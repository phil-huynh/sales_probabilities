import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FactorList from "./FactorList.js";
import DoughnutChart from "../../tools/DoughnutChart.js";
import { useContextStore } from "../../Context.js";

export default function WinFactors({ increasing, decreasing }) {
  const { pilyBlue, pilyTeal, chartRed } = useContextStore();


  const getFactors = (list, type) => {
    const weights = ["Strong", "Medium", "Weak"];
    const obj = {};
    let total = 0;

    weights.forEach((weight) => (obj[`${weight} ${type}`] = []));

    if (list) {
      list.forEach((entry) => {
        total += entry.weight.value;
        obj[entry.weight.description].push([entry.name, entry.message]);
      });
    }
    Object.keys(obj).forEach((key) => {
      if (obj[key].length === 0) {
        delete obj[key];
      }
    });
    return [obj, total];
  };


  const [positiveFactors, totalIncrease] = getFactors(
    increasing,
    "Positive",
    "Increasing"
  );
  const [negativeFactors, totalDecrease] = getFactors(
    decreasing,
    "Negative",
    "Decreasing"
  );

  const donutHole = {
    beforeDatasetDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();

      const value = data.datasets[0].data[1] + data.datasets[0].data[0];
      ctx.font = "bold 3rem sans-serif";
      ctx.fillStyle = value >= 0 ? pilyTeal : chartRed;
      ctx.textAlign = "center";
      ctx.textBaseline = "mid";
      ctx.fillText(
        value,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    }
  };

  return (
    <>
      <Grid
        container
        item
        spacing={7}
        sx={{
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <Grid item xs={6} md={4}>
          <Paper elevation={10} sx={{ padding: "4%", height: "92%" }}>
            <DoughnutChart
              labels={["Factors Decreasing Win", "Factors Increasing Win"]}
              chartData={[totalDecrease, totalIncrease]}
              color={["rgba(255, 99, 132, 1)", "#74ACFA"]}
              plugin={donutHole}
              opts={{ cutout: "75%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <FactorList
            obj={positiveFactors}
            color={pilyBlue}
            verb={"Increasing"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FactorList
            obj={negativeFactors}
            color={chartRed}
            verb={"Decreasing"}
          />
        </Grid>
      </Grid>
    </>
  );
}
