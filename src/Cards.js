import React from 'react';
import './Cards.css';
import {Link} from 'react-router-dom';

function Cards() {
    return (
        <div class="services" >
        <h1>Our Products</h1>
        <div class="services__wrapper">
          <div class="services__card">
            <h2>Color coated Roofing sheet</h2>
            <div class="services__btn"><Link to="/Color_Roof" className="button">Click to Know More</Link></div>
          </div>
          <div class="services__card">
            <h2>Aluminium Roofing Sheet</h2>
            <div class="services__btn"><Link to="/Aluminium_Roof" className="button">Click to Know More</Link></div>
          </div>
          <div class="services__card">
            <h2>Corrogated Sheet</h2>
            <div class="services__btn"><Link to="/Corrogated_sheet" className="button">Click to Know More</Link></div>
          </div>
          <div class="services__card">
            <h2>Polycarbonate Sheet</h2>
            <div class="services__btn"><Link to="/Polycarbonate_sheet" className="button">Click to Know More</Link></div>
          </div>
          
        </div>
      </div>

        )
    }
    
    export default Cards
   