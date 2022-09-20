import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import { ALL_MEALS_URL, RANDOM_MEAL_URL } from "../../config/config";

const AppContext = createContext();

const AppProider = ({ children }) => {
  const [allMeals, setallMeals] = useState([]);
  const [loading, setloading] = useState(false);

  const getAllMeals = async () => {
    setloading(true);
    try {
      const { data } = await axios.get(ALL_MEALS_URL);
      setallMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <AppContext.Provider value={{ allMeals, loading }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProider, useGlobalContext };
