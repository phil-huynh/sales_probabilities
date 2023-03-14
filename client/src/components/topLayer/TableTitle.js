import React from "react";

const TableTitle = ({ tableTitle, color, background }) => (
  <span
    style={{
      color: color,
      background: background,
      paddingTop: "5%",
      fontSize: "2rem",
      fontWeight: "bold"
    }}
  >
    {tableTitle}
  </span>
);
export default TableTitle;
