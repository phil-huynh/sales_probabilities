import React from "react";
import { Typography } from "@mui/material";

const Probability = ({ probability, style }) => (
  <Typography sx={style}>{probability}</Typography>
);

export default Probability;
