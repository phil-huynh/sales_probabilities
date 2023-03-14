import React from "react";
import Typography from "@mui/material/Typography";
import { useContextStore } from "../../Context.js";

export default function CardButton({ func, text, color, align }) {
  const { pilyTeal } = useContextStore();
  return (
    <Typography
      variant="button"
      align={align ? align : null}
      onClick={func}
      sx={{
        color: color,
        cursor: "pointer",
        "&:hover": { color: pilyTeal }
      }}
    >
      {text}
    </Typography>
  );
}
