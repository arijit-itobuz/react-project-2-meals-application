import axios from 'axios';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { ALL_MEALS_URL, RANDOM_MEAL_URL } from '../../config/config';

const AppContext = createContext();

const AppProider = ({ children }) => {
  // states
  const [allMeals, setallMeals] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchTerm, setsearchTerm] = useState('');
  const [home, sethome] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [selectedMeal, setselectedMeal] = useState(null);
  const [favourites, setfavourites] = useState([]);

  // functions
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

  const chooseMeal = (idMeal) => {
    const meal = allMeals.find((e) => {
      return e.idMeal === idMeal;
    });
    setselectedMeal(meal);
    setshowModal(true);
  };

  const addFavourite = (idMeal) => {
    const alreadyFavourited = favourites.find((e) => e.idMeal === idMeal);
    if (!alreadyFavourited) {
      const meal = allMeals.find((e) => e.idMeal === idMeal);
      setfavourites([...favourites, meal]);
    }
  };

  const removeFavourite = (idMeal) => {
    const updatedFavourites = favourites.filter((e) => e.idMeal !== idMeal);
    setfavourites(updatedFavourites);
  };

  useEffect(() => {
    getAllMeals();
  }, [searchTerm, home]);

  return (
    <AppContext.Provider
      value={{
        allMeals,
        loading,
        setsearchTerm,
        searchTerm,
        getRandomMeal,
        home,
        sethome,
        showModal,
        chooseMeal,
        selectedMeal,
        setshowModal,
        addFavourite,
        removeFavourite,
        favourites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProider, useGlobalContext };
