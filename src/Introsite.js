import React from 'react';
import './App.css';
import { Button } from './Button';
import './Introsite.css'

function Introsite() {
  return (
    <div className='hero-container'>
      {/* <video src='/video/video-2.mp4' autoPlay loop muted /> */}
      <h1>ROOFING SOLUTIONS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Introsite;