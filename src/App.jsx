import React from 'react';
import { useGlobalContext } from './lib/context/context';
import Favourites from './components/Favourites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

function App() {
  const { showModal, favourites } = useGlobalContext();
  return (
    <>
      <Search />
      {favourites.length > 0 && <Favourites />}
      <Meals />
     { showModal &&  <Modal />}
    </>
  );
}

export default App;
