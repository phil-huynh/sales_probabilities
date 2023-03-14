import React from "react";
import LineChart from "./LineChart.js";
import MissingHistory from "./MissingHistory.js";
import { useContextStore } from "../../Context.js";

export default function HistoryWindow() {
  const { selected } = useContextStore();

  return (
    <>{selected.probabilityHistory ? <LineChart /> : <MissingHistory />}</>
  );
}
