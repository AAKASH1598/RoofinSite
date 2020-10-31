import React from 'react';
import './App.css';
import CounterSite from './CounterSite';
import Introsite from './Introsite';
import Qualities from './Qualities';
import All_Products from './All_Products';
import './Introsite.css'
import Download from './Download';
import HomeAbout from './HomeAbout';

function Home() {
  
  
  return (
    <>
      <Introsite />
      <Download/> 
      <HomeAbout/>
      <div><h1 className="color">Our Products</h1></div>
      <All_Products/>
      <CounterSite/>
      <Qualities/>
    </>
  );
}

export default Home;