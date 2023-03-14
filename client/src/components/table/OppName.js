import React from "react";
import { Typography } from "@mui/material";

const OppName = ({ name }) => (
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    {name}
  </Typography>
);

export default OppName;
