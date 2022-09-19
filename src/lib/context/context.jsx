import React, { useContext, createContext } from "react";

const AppContext = createContext();

const AppProider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProider, useGlobalContext };
