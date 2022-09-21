import React from 'react';
import CloseIcon from '../icons/CloseIcon/CloseIcon';
import { useGlobalContext } from '../lib/context/context';

export default function Modal() {
  const { selectedMeal, setshowModal } = useGlobalContext();
  const { strMealThumb, strMeal, strInstructions, strSource } = selectedMeal;
  return (
    <>
      <aside className='modal-overlay'>
        <div className='modal-container'>
          <button
            onClick={() => setshowModal(false)}
            type='button'
            className={`close-icon-container`}
          >
            <CloseIcon className={`close-icon`} />
          </button>
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
              <button
                onClick={() => setshowModal(false)}
                type={`button`}
                className={`btn btn-hipster close-btn`}
              >
                Close
              </button>
              <a href={strSource} target='_blank' rel='noopener noreferrer'>
                Source
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
