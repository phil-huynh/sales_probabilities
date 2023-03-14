import * as React from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import WinFactors from "./factors/WinFactors.js";
import Detailsbox from "./details/DetailsBox.js";
import Probabilities from "./probabilities/Probabilities";
import Header from "./header/Header.js";
import HistoryWindow from "./history/HistoryWindow.js";
import { useContextStore } from "../Context.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "95%",
  overflow: "hidden",
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2.1,
  paddingX: "3.5%"
};

export default function TransitionsModal() {
  const {
    open,
    selected,
    getOppName,
    toDollars,
    handleKeyDown,
    darkMode
  } = useContextStore();

  const OppName = () => (
    <Typography
      id="opportunity-details"
      variant="h4"
      component="h2"
      sx={{ color: textColor }}
    >
      {getOppName(selected.oppName)}
    </Typography>
  );

  const textColor = () => (darkMode ? "white" : "black");

  return (
    <div>
      <Modal
        aria-labelledby="opportunity-data-card"
        aria-describedby="opportunity-probability-data"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Paper
            sx={style}
            elevation={10}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          >
            <Header />
            <Divider />
            <Grid
              container
              spacing={2}
              sx={{ paddingY: ".7%", color: textColor() }}
            >
              <Grid item xs={7}>
                <OppName />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Typography variant="h3">
                  {selected ? toDollars(selected.amount.toString()) : ""}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid container item spacing={2}>
                <Grid item xs={8} md={3}>
                  <Detailsbox />
                </Grid>
                <Grid item xs={4} md={2}>
                  <Probabilities />
                </Grid>
                <Grid item xs={12} md={7}>
                  <HistoryWindow />
                </Grid>
                <WinFactors
                  increasing={selected.pilytixFactorsIncreasingWin}
                  decreasing={selected.pilytixFactorsDecreasingWin}
                />
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
