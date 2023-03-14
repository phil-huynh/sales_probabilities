import React from "react";
import Chip from "@mui/material/Chip";
import { useContextStore } from "../Context.js";

export default function Product({ product, style }) {
  const { pilyTeal } = useContextStore();
  return <Chip sx={{ ...style, background: pilyTeal }} label={product} />;
}
