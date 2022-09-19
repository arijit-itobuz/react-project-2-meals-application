import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import { ALL_MEALS_URL, RANDOM_MEAL_URL } from "../../config/config";

const AppContext = createContext();

const AppProider = ({ children }) => {
  const [allMeals, setallMeals] = useState([]);

  const getAllMeals = async () => {
    try {
      const { data } = await axios.get(ALL_MEALS_URL);
      setallMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <AppContext.Provider value={{ allMeals }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProider, useGlobalContext };
