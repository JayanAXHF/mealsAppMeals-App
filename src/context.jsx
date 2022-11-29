import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = createContext();
const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const randomMealUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
/**
 * @param  {} {children}
 */
const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (err) {
      console.log(`JSC ~ file: context.jsx ~fetchMeals ~ Error`, err.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{ meals, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
