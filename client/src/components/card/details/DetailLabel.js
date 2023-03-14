import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useContextStore } from "../../Context";

export default function Label({ label }) {
  const { pilyTeal } = useContextStore();
  return (
    <Divider>
      <Chip
        size="small"
        sx={{ color: "white", background: pilyTeal }}
        label={label}
      />
    </Divider>
  );
}
