import React from "react";
import LikeButton from "../icons/LikeButton/LikeButton";
import { useGlobalContext } from "../lib/context/context";

export default function Meals() {
  const { allMeals, loading } = useGlobalContext();
  return (
    <>
      <section className={`section-center`}>
        {loading && "loading"}
        {!loading &&
          allMeals &&
          allMeals.map((e) => {
            const { idMeal, strMeal, strMealThumb } = e;
            return (
              <article key={idMeal} className={`single-meal`}>
                <img
                  src={strMealThumb}
                  alt={`img-meal-${idMeal}`}
                  className={`img`}
                />
                <footer>
                  <h5>{strMeal}</h5>
                  <button type={`button`} className={`like-btn`}>
                    <LikeButton />
                  </button>
                </footer>
              </article>
            );
          })}
      </section>
    </>
  );
}
