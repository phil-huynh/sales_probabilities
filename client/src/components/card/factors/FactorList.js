import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";

const FactorList = ({ obj, color, verb }) => (
  <>
    {Object.keys(obj).length > 0 ? (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            align="center"
            variant="h6"
            sx={{
              color: "white",
              width: "78%",
              background: color,
              borderRadius: "20px",
              padding: "1.5%",
              marginY: "1%"
            }}
          >
            {`${verb} Win`}
          </Typography>
        </div>
        <div
          style={{
            maxHeight: "32vh",
            overflowY: "scroll"
          }}
        >
          {Object.keys(obj).map((key) => {
            if (obj[key].length > 0) {
              return (
                <div key={key}>
                  <Typography variant="button" sx={{ color: color }}>
                    {key}
                  </Typography>
                  {obj[key].map((entry) => (
                    <Paper
                      key={entry[0]}
                      elevation={10}
                      sx={{
                        background: color,
                        color: "white",
                        paddingX: "2%",
                        margin: "1%",
                        marginTop: "1%"
                      }}
                    >
                      <Divider>
                        <Chip sx={{ color: "white" }} label={entry[0]} />
                      </Divider>
                      <Typography variant="subtitle2" sx={{ paddingY: "2%" }}>
                        {entry[1]}
                      </Typography>
                    </Paper>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </>
    ) : (
      <Paper
        elevation={10}
        sx={{
          background: color,
          color: "white",
          paddingX: "4%",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          opacity: ".8"
        }}
      >
        <Typography align="center" variant="h6">
          {`Currently No Known Factors ${verb} Win Probabilily`}
        </Typography>
      </Paper>
    )}
  </>
);
export default FactorList;
