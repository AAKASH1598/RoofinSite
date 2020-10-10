import React from 'react';
import './App.css';
import Cards from './Cards';
import CounterSite from './CounterSite';
import Introsite from './Introsite';
import Qualities from './Qualities';
function Home() {
  return (
    <>
      <Introsite />
      <CounterSite/>
      <Cards/>
      <Qualities/>
    </>
  );
}

export default Home;