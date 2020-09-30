import React from 'react';
import './App.css';
import Cards from './Cards';
import CounterSite from './CounterSite';

import Introsite from './Introsite';
function Home() {
  return (
    <>
      <Introsite />
      <CounterSite/>
      <Cards/>
      
    </>
  );
}

export default Home;