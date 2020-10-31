import React from 'react';
import './App.css';
import CounterSite from './CounterSite';
import Introsite from './Introsite';
import Qualities from './Qualities';
import All_Products from './All_Products';
import './Introsite.css'
<<<<<<< HEAD

=======
import Download from './Download';
import HomeAbout from './HomeAbout';
>>>>>>> 9dddab76252229c50fd38886d25cfbe2d2ba2db0

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