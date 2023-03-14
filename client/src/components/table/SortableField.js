import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

const SortableField = ({ label, field, setField, setType }) => (
  <span>
    <span>{label}</span>
    <span>
      <ButtonGroup aria-label="contained button group">
        <Button
          onClick={() => {
            setField(field);
            setType("descend");
          }}
          sx={{ width: ".1rem" }}
        >
          <ArrowUpwardOutlinedIcon sx={{ fontSize: "1rem" }} />
          <ArrowDownwardOutlinedIcon sx={{ fontSize: "1rem" }} />
        </Button>
        <Button
          onClick={() => {
            setField(field);
            setType("ascend");
          }}
          sx={{ width: ".1rem" }}
        >
          <ArrowDownwardOutlinedIcon sx={{ fontSize: "1rem" }} />
          <ArrowUpwardOutlinedIcon sx={{ fontSize: "1rem" }} />
        </Button>
      </ButtonGroup>
    </span>
  </span>
);
export default SortableField;
