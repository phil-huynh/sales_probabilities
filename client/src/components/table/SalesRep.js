import React from "react";
import { Typography } from "@mui/material";
import { useContextStore } from "../Context.js";

export default function SalesRep({ rep }) {
  const { pilyBlue } = useContextStore();
  return (
    <Typography variant="body1" sx={{ color: pilyBlue, fontWeight: "bold" }}>
      {rep}
    </Typography>
  );
}
