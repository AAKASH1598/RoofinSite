import React from 'react';
import './App.css';
import Cards from './Cards';
import CounterSite from './CounterSite';
import Introsite from './Introsite';
import Qualities from './Qualities';
import Colorlist from './Colorlist';
import All_Products from './All_Products';

function Home() {
  return (
    <>
      <Introsite />
      <div><h1 className="color">Our Products</h1></div>
      <All_Products/>
      <CounterSite/>
      <Qualities/>
    </>
  );
}

export default Home;