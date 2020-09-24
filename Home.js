import React from 'react';
import './App.css';
import Cards from './Cards';
import Footer from './Footer';
import Introsite from './Introsite';

function Home() {
  return (
    <>
      <Introsite />
      <Cards/>
      <Footer/>
    </>
  );
}

export default Home;