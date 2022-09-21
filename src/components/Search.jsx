import React, { useState } from 'react';
import { useGlobalContext } from '../lib/context/context';
import HomeIcon from '../icons/HomeIcon/HomeIcon';

export default function Search() {
  const { setsearchTerm, getRandomMeal, home, sethome } = useGlobalContext();

  const [text, settext] = useState('');
  const handleChange = (e) => {
    settext(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setsearchTerm(text);
    settext('');
  };
  return (
    <>
      <header className={`search-container`}>
        <form onSubmit={handleSubmit}>
          <button
            onClick={() => {
              if (home) {
                sethome(false);
                setsearchTerm('');
              } else {
                sethome(true);
                setsearchTerm('');
              }
            }}
            type='button'
            className='btn'
          >
            <HomeIcon color={'white'} />
          </button>
          <input
            onChange={handleChange}
            value={text}
            type='search'
            placeholder='start fooding...'
            className={`form-input`}
          />
          <button type={`submit`} className={`btn`}>
            Search
          </button>
          <button
            onClick={getRandomMeal}
            type={`button`}
            className={`btn btn-hipster`}
          >
            Surprise Me
          </button>
        </form>
      </header>
    </>
  );
}
