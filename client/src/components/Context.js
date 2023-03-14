import React, { useState, createContext, useContext } from "react";
import * as opportunities from "../opportunities.json";

export const ContextStore = createContext(null);

export default ({ children }) => {
  const oppsData = opportunities.default;

  const [darkMode, setDarkMode] = useState(false);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getOppType = (str) => str.split(" - ")[0];
  const getOppYear = (str) => str.split(" - ")[1];
  const getOppName = (str) => str.split(" - ")[2];
  const getStageNum = (str) => str.split(". ")[0];
  const getStageName = (str) => str.split(". ")[1];

  const toDollars = (num) => {
    if (num.length <= 4) {
      return `$${num}`;
    }
    let digits = num.split("");
    let result = [];
    let count = 0;
    while (digits.length > 0) {
      result.unshift(digits.pop());
      count++;
      if (count === 3 && digits.length > 0) {
        result.unshift(",");
        count = 0;
      }
    }
    return `$${result.join("")}`;
  };

  const getNextOpp = () => {
    let index = oppsData.indexOf(selected) + 1;
    if (index === oppsData.length) {
      index = 0;
    }
    setSelected(oppsData[index]);
  };

  const getPrevOpp = () => {
    let index = oppsData.indexOf(selected) - 1;
    if (index < 0) {
      index = oppsData.length - 1;
    }
    setSelected(oppsData[index]);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      getPrevOpp();
    }
    if (e.keyCode === 39) {
      getNextOpp();
    }
  };

  const context = {
    open: open,
    setOpen: setOpen,
    handleOpen: handleOpen,
    handleClose: handleClose,
    handleKeyDown: handleKeyDown,
    opportunities: oppsData,
    selected: selected,
    setSelected: setSelected,
    getOppName: getOppName,
    getOppYear: getOppYear,
    getOppType: getOppType,
    getStageName: getStageName,
    getStageNum: getStageNum,
    toDollars: toDollars,
    getNextOpp: getNextOpp,
    getPrevOpp: getPrevOpp,
    pilyTeal: "#4BDCB4",
    pilyBlue: "#74ACFA",
    chartRed: "rgba(255, 99, 132, 1)",
    darkMode: darkMode,
    setDarkMode: setDarkMode
  };

  return (
    <ContextStore.Provider value={context}>{children}</ContextStore.Provider>
  );
};

export const useContextStore = () => useContext(ContextStore);
