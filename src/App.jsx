import React from 'react';
import Favourites from './components/Favourites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

function App() {
  return (
    <>
      <Search />
      {/* <Favourites /> */}
      <Meals />
      {/* <Modal /> */}
    </>
  );
}

export default App;
