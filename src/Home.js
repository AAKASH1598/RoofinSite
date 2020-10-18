import React from 'react';
import './App.css';
import Cards from './Cards';
import CounterSite from './CounterSite';
import Introsite from './Introsite';
import Qualities from './Qualities';
import Colorlist from './Colorlist';
function Home() {
  return (
    <>
      <Introsite />
      <CounterSite/> 
      <Cards/>
      <Colorlist/>
      <Qualities/>
    </>
  );
}

export default Home;