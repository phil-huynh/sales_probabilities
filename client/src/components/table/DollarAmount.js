import React from "react";
import { Typography } from "@mui/material";

const DollarAmount = ({ amount }) => (
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    {amount}
  </Typography>
);
export default DollarAmount;
