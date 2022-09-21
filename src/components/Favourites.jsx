import React from 'react';
import { useGlobalContext } from '../lib/context/context';

export default function Favourites() {
  const { favourites, chooseMeal, removeFavourite } = useGlobalContext();
  return (
    <>
      <section className={`favourites`}>
        <div className={`favourites-content`}>
          <h5>Favourites</h5>
          <div className={`favourites-container`}>
            {favourites.map((e) => {
              return (
                <div key={e.idMeal} className={`favourite-item`}>
                  {/* <div>{e.strMeal}</div> */}
                  <img
                    onClick={() => chooseMeal(e.idMeal, true)}
                    src={e.strMealThumb}
                    alt={`img-meal-${e.strMeal}`}
                    className={`favourites-img img`}
                  />
                  <button
                    onClick={() => removeFavourite(e.idMeal)}
                    type='button'
                    className={`remove-btn`}
                  >
                    remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
