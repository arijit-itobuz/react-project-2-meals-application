import React from "react";
import LikeButton from "../icons/LikeButton";
import { useGlobalContext } from "../lib/context/context";

export default function Meals() {
  const { allMeals } = useGlobalContext();
  console.log(allMeals);
  return (
    <>
      <section className={`section-center`}>
        {allMeals &&
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
