import React from 'react';
import './App.css';
import CounterSite from './CounterSite';
import Introsite from './Introsite';
import Qualities from './Qualities';
import All_Products from './All_Products';
import './Introsite.css'
import Download from './Download';
import HomeAbout from './HomeAbout';
import SimpleSlider from './Changer'
import './Product.css'
function Home() {
  
  
  return (
    <>
      <Introsite />
      <Download/> 
      <HomeAbout/>
      <SimpleSlider/>
      <div className="title__container"><h1 className="color">OUR PRODUCTS</h1></div>
      <All_Products/>
      <CounterSite/>
      <div className="title__container"><h1 className="color">WHO WE ARE</h1></div>
      <Qualities/>
    </>
  );
}

export default Home;