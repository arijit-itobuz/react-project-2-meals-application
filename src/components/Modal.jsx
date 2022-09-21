import React from 'react';
import { useGlobalContext } from '../lib/context/context';

export default function Modal() {
  const { selectedMeal, setshowModal } = useGlobalContext();
  const { strMealThumb, strMeal, strInstructions, strSource } = selectedMeal;
  return (
    <>
      <aside className='modal-overlay'>
        <div className='modal-container'>
          <img
            src={strMealThumb}
            alt={`img-meal-${strMeal}`}
            className={`img modal-img`}
          />
          <div className={`modal-content`}>
            <h4>{strMeal}</h4>
            <p>Cooking Instructions</p>
            <p>{strInstructions}</p>
            <div className='modal-footer'>
              <a href={strSource} target='_blank' rel='noopener noreferrer'>
                Source
              </a>
              <button
                onClick={() => setshowModal(false)}
                type={`button`}
                className={`btn btn-hipster close-btn`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
