import React from "react";
import { useContextStore } from "../Context.js";

export default function TypeLabel({ type }) {
  const { pilyTeal, pilyBlue } = useContextStore();
  return (
    <>
      {type === "B2B" ? (
        <span>
          <span
            style={{ color: pilyTeal, fontWeight: "bold", fontSize: "1.3rem" }}>B</span>
          <span
            style={{ color: "blue", fontWeight: "bold", fontSize: "9.rem" }}>2</span>
          <span
            style={{ color: pilyBlue, fontWeight: "bold", fontSize: "1.3rem" }}>B</span>
        </span>
      ) : (
        <span>
          <span
            style={{ color: pilyBlue, fontWeight: "bold", fontSize: "1.3rem" }}>B</span>
          <span
            style={{ color: "blue", fontWeight: "bold", fontSize: "9.rem" }}>2</span>
          <span
            style={{ color: pilyTeal, fontWeight: "bold", fontSize: "1.3rem" }}>C</span>
        </span>
      )}
    </>
  );
}
