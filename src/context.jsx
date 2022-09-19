import React, { useContext, createContext } from "react";

const AppContext = createContext();

const AppProider = ({ children }) => {
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
};

export { AppContext, AppProider };
