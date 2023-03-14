import React from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useContextStore } from "../../Context";

export default function Label({ label }) {
  const { pilyTeal, darkMode} = useContextStore();
  return (
    <Divider>
      <Chip
        size="small"
        sx={{ color: "black", background: pilyTeal }}
        label={label}
      />
    </Divider>
  );
}
