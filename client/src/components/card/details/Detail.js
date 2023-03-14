import React from "react";
import Typography from "@mui/material/Typography";
import { useContextStore } from "../../Context";

export default function Detail({ info, style, variant }) {
  const { pilyBlue } = useContextStore();
  return (
    <div style={style}>
      <Typography
        align="center"
        variant={variant ? variant : "body1"}
        sx={{ color: pilyBlue, fontWeight: "bold" }}
      >
        {info}
      </Typography>
    </div>
  );
}
