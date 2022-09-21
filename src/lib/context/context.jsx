import axios from 'axios';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { ALL_MEALS_URL, RANDOM_MEAL_URL } from '../../config/config';

const AppContext = createContext();

const AppProider = ({ children }) => {
  const [allMeals, setallMeals] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchTerm, setsearchTerm] = useState('');
  const [home, sethome] = useState(false);

  const getAllMeals = async () => {
    setloading(true);
    try {
      const { data } = await axios.get(`${ALL_MEALS_URL}${searchTerm}`);
      setallMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  };

  const getRandomMeal = async () => {
    setloading(true);
    setsearchTerm('');
    try {
      const { data } = await axios.get(RANDOM_MEAL_URL);
      setallMeals(data.meals);
    } catch (error) {
    console.log(error);
    }
    setloading(false);
  };

  useEffect(() => {
    getAllMeals();
  }, [searchTerm, home]);

  return (
    <AppContext.Provider
      value={{ allMeals, loading, setsearchTerm, searchTerm, getRandomMeal, home, sethome }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProider, useGlobalContext };
