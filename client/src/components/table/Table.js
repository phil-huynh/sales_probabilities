import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TypeLabel from "../tools/TypeLabel.js";
import Stars from "../tools/Stars.js";
import Stage from "./Stage.js";
import SalesRep from "./SalesRep.js";
import OppName from "./OppName.js";
import Probability from "./Probability.js";
import Product from "./Product.js";
import DollarAmount from "./DollarAmount.js";
import SortableField from "./SortableField.js";
import { useContextStore } from "../Context.js";

export default function BasicTable() {
  const {
    opportunities,
    getOppName,
    getOppType,
    getStageNum,
    getStageName,
    toDollars,
    setSelected,
    handleOpen,
    pilyTeal,
    pilyBlue
  } = useContextStore();

  let data = opportunities;

  const [sortField, setSortField] = useState(null);
  const [sortType, setSortType] = useState(null);

  const titleStyle = { fontWeight: "bold", fontSize: "1.4rem" };
  const rowStyle = {
    "&:last-child td, &:last-child th": { border: 0 },
    marginY: "2px",
    "&:hover": {
      borderTop: `${pilyTeal} double 2px`,
      borderBottom: `${pilyBlue} double 2px`,
      marginY: "none"
    },
    cursor: "pointer"
  };

  const style = {
    color: pilyBlue,
    fontWeight: "bold",
    fontSize: "1.2rem"
  };

  const tableChipStyle = {
    color: "white",
    background: pilyBlue,
    fontSize: "1.2rem",
    fontWeight: "bold"
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={titleStyle} align="left">
              Name
            </TableCell>
            <TableCell sx={titleStyle} align="center">
              Type
            </TableCell>
            <TableCell sx={titleStyle} align="center">
              Stage
            </TableCell>
            <TableCell sx={titleStyle} align="right">
              <SortableField
                label={"Rep Probability"}
                field={"repProbability"}
                setField={setSortField}
                setType={setSortType}
              />
            </TableCell>
            <TableCell sx={titleStyle} align="right">
              <SortableField
                label={"PX Probability"}
                field={"pilytixProbability"}
                setField={setSortField}
                setType={setSortType}
              />
            </TableCell>
            <TableCell sx={titleStyle} align="center">
              <SortableField
                label={"Opp PX Tier"}
                field={"pilytixTier"}
                setField={setSortField}
                setType={setSortType}
              />
            </TableCell>
            <TableCell sx={titleStyle} align="right">
              <SortableField
                label={"Opp Amount"}
                field={"amount"}
                setField={setSortField}
                setType={setSortType}
              />
            </TableCell>
            <TableCell sx={titleStyle} align="center">
              Product
            </TableCell>
            <TableCell sx={titleStyle} align="center">
              Sales Rep
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .sort((a, b) =>
              sortField === "pilytixTier" && sortType === "ascend"
                ? Number(a[sortField].split(" ")[0]) -
                  Number(b[sortField].split(" ")[0])
                : sortField === "pilytixTier" && sortType === "descend"
                ? Number(b[sortField].split(" ")[0]) -
                  Number(a[sortField].split(" ")[0])
                : sortField && sortType === "ascend"
                ? Number(a[sortField]) - Number(b[sortField])
                : sortField && sortType === "descend"
                ? Number(b[sortField]) - Number(a[sortField])
                : data
            )
            .map((row) => (
              <TableRow
                onClick={() => {
                  handleOpen();
                  setSelected(row);
                }}
                key={row.oppId}
                sx={rowStyle}
              >
                <TableCell component="th" scope="row">
                  <OppName name={getOppName(row.oppName)} />
                </TableCell>
                <TableCell align="center">
                  <TypeLabel type={getOppType(row.oppName)} />
                </TableCell>
                <TableCell align="left">
                  <Stage
                    name={getStageName(row.stage)}
                    number={getStageNum(row.stage)}
                    style={tableChipStyle}
                  />
                </TableCell>
                <TableCell align="right">
                  <Probability probability={row.repProbability} style={style} />
                </TableCell>
                <TableCell align="right">
                  <Probability
                    probability={row.pilytixProbability}
                    style={{ ...style, color: pilyTeal }}
                  />
                </TableCell>
                <TableCell align="left">
                  <Stars source={row} />
                </TableCell>
                <TableCell align="right">
                  <DollarAmount amount={toDollars(row.amount.toString())} />
                </TableCell>
                <TableCell align="center">
                  <Product product={row.product} style={tableChipStyle} />
                </TableCell>
                <TableCell align="center">
                  <SalesRep rep={row.salesRepName} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
