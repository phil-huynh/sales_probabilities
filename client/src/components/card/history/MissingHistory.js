import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function MissingHistory() {
  return (
    <Paper
      elevation={6}
      sx={{
        padding: "2%",
        height: "95%",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(345deg, rgba(116,172,250,1) 31%, rgba(63,206,173,1) 67%)"
      }}
    >
      <Typography align="center" variant="h4" sx={{ color: "white" }}>
        No History Available for This Opportunity
      </Typography>
    </Paper>
  );
}
