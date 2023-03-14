import React from "react";
import Grid from "@mui/material/Grid";
import CardButton from "./CardButton.js";
import { useContextStore } from "../../Context.js";

export default function Header() {
  const {
    handleClose,
    getNextOpp,
    getPrevOpp,

    darkMode
  } = useContextStore();

  const textColor = () => (darkMode ? "white" : "black");

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "flex-start"
        }}
      >
        <CardButton
          func={getPrevOpp}
          text="PREV"
          color={textColor()}
          align="left"
        />
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <CardButton
          func={getNextOpp}
          text="NEXT"
          color={textColor()}
          align="left"
        />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <CardButton
          func={handleClose}
          text="CLOSE"
          color={textColor()}
          align="right"
        />
      </Grid>
    </Grid>
  );
}
