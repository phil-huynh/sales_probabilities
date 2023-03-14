import React from "react";
import BasicTable from "./table/Table.js";
import TransitionsModal from "./card/Card.js";
import TableTitle from "./topLayer/TableTitle.js";
import LightSwitch from "./topLayer/LightSwitch.js";
import { useContextStore } from "./Context.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const App = (props) => {
  const { selected, pilyTeal, darkMode } = useContextStore();

  const background = () => (darkMode ? "#1E1E1E" : "#FFFFFF");
  const mode = () => (darkMode ? "dark" : "light");

  const darkTheme = createTheme({
    palette: {
      mode: mode()
    }
  });
  return (
    <div
      className="App"
      style={{ background: background(), height: "100%", paddingTop: "2%" }}
    >
      <ThemeProvider theme={darkTheme}>
        <LightSwitch />
        <TableTitle
          tableTitle="PILYTIX Scored Opportunities"
          color={pilyTeal}
          background={background()}
        />
        <BasicTable />
        {selected ? <TransitionsModal /> : null}
      </ThemeProvider>
    </div>
  );
}

export default App;
