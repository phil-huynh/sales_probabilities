import React from "react";
import Rating from "@mui/material/Rating";

export default function Stars({ source, style }) {
  return (
    <div style={style ? style : null}>
      <Rating value={Number(source.pilytixTier.split(" ")[0])} readOnly />
    </div>
  );
}
