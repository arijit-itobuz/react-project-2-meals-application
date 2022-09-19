import React from 'react';
import { useGlobalContext } from '../lib/context/context';

export default function Meals() {
  const context = useGlobalContext();
  console.log(context);

  return (
    <>
      <div>Meals</div>
    </>
  );
}
