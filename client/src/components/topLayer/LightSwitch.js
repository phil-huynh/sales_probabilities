import React from "react";
import Tooltip from "@mui/material/Tooltip";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import { useContextStore } from "../Context.js";

export default function LightSwitch() {
  const { darkMode, setDarkMode, pilyTeal } = useContextStore();
  const mode = () => (darkMode ? "Light" : "Dark");
  const textColor = () => (darkMode ? "white" : "black");

  const changeMode = () => {
    let change = !darkMode;
    setDarkMode(change);
  };

  return (
    <Tooltip title={`Switch to ${mode()} Mode`} placement="right">
      <LightbulbCircleIcon
        onClick={changeMode}
        sx={{
          position: "absolute",
          left: "3%",
          top: "1.6%",
          fontSize: "2.8rem",
          color: textColor(),
          zIndex: "2000",
          cursor: "pointer",
          "&:hover": { color: pilyTeal }
        }}
      />
    </Tooltip>
  );
}
