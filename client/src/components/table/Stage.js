import React from "react";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

const Stage = ({ name, number, style }) => (
  <Tooltip title={name} placement="right">
    <Chip sx={style} label={`STAGE ${number}`} />
  </Tooltip>
);
export default Stage;
