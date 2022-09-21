import React from 'react';
import { useGlobalContext } from '../lib/context/context';
import LikeButton from '../icons/LikeIcon/LikeIcon';
import LoadingOverLay from '../icons/LoadingOverLay/LoadingOverLay';

export default function Meals() {
  const { allMeals, loading, searchTerm, chooseMeal, addFavourite } = useGlobalContext();
  return (
    <>
      {searchTerm && (
        <div className='search-tag-container'>
          <span className='search-tag'>{searchTerm}</span>
        </div>
      )}
      {loading && (
        <div className='search-tag-container'>
          <LoadingOverLay />
        </div>
      )}
      <section className={`section-center`}>
        {!loading &&
          (allMeals ? (
            allMeals.map((e) => {
              const { idMeal, strMeal, strMealThumb } = e;
              return (
                <article key={idMeal} className={`single-meal`}>
                  <img
                    onClick={() => chooseMeal(idMeal)}
                    src={strMealThumb}
                    alt={`img-meal-${strMeal}`}
                    className={`img`}
                  />
                  <footer>
                    <h5>{strMeal}</h5>
                    <button onClick={() => addFavourite(idMeal)} type={`button`} className={`like-btn`}>
                      <LikeButton className={`like-btn`} color={'red'} />
                    </button>
                  </footer>
                </article>
              );
            })
          ) : (
            <h3>No Items to show 😔</h3>
          ))}
      </section>
    </>
  );
}
