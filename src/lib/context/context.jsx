import React, { useContext, createContext } from 'react';
import { ALL_MEALS_URL, RANDOM_MEAL_URL } from '../../config/config';

const AppContext = createContext();

const AppProider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProider, useGlobalContext };
