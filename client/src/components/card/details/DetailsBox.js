import React from "react";
import Paper from "@mui/material/Paper";
import Stars from "../../tools/Stars.js";
import Detail from "./Detail.js";
import Label from "./DetailLabel.js";
import TypeLabel from "../../tools/TypeLabel.js";
import { useContextStore } from "../../Context";

export default function DetailBox() {
  const {
    selected,
    getOppYear,
    getOppType,
    getStageNum,
    getStageName
  } = useContextStore();

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "9%"
  };

  const OppType = () => (
    <div style={{ ...style, height: "11%" }}>
      <TypeLabel type={getOppType(selected.oppName)} />
    </div>
  );

  return (
    <Paper elevation={10} sx={{ paddingTop: "3%", height: "100%" }}>
      <Stars source={selected} style={style} />
      <Label label={"SALES REP"} />
      <Detail info={selected.salesRepName} style={style} variant={"h6"} />
      <Label label={`STAGE ${getStageNum(selected.stage)}`} />
      <Detail
        info={getStageName(selected.stage)}
        style={{ ...style, height: "11%" }}
      />
      <Label label={"PRODUCT"} />
      <Detail info={selected.product} style={style} />
      <Label label={"TYPE"} />
      <OppType />
      <Label label={"YEAR"} />
      <Detail
        info={getOppYear(selected.oppName)}
        style={{ ...style, height: "5%", paddingTop: "3%" }}
      />
    </Paper>
  );
}
