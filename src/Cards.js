import React from 'react';
import './Cards.css';
import {Link} from 'react-router-dom';

function Cards() {
    return (
        <div class="services" >
        <h1>Our Services</h1>
        <div class="services__wrapper">
          <div class="services__card">
            <h2>Color coated Roofing sheet</h2>
            <div class="services__btn"><Link to="/Color_Roof" className="button">Get Started</Link></div>
          </div>
          <div class="services__card">
            <h2>Aluminium Roofing Sheet</h2>
            <div class="services__btn"><Link to="/Aluminium_Roof" className="button">Get Started</Link></div>
          </div>
          <div class="services__card">
            <h2>Corrogated Sheet</h2>
            <div class="services__btn"><Link to="/Corrogated_sheet" className="button">Get Started</Link></div>
          </div>
          <div class="services__card">
            <h2>Polycarbonate Sheet</h2>
            <div class="services__btn"><Link to="/Polycarbonate_sheet" className="button">Get Started</Link></div>
          </div>
          
        </div>
      </div>

        )
    }
    
    export default Cards
        // <div className="card">
        //     <h1> Find the best of our innovation</h1>
        //     <div className="card__container">
        //         <div className="card__wrapper">
        //             <ul className="card__items">
        //               <CardItems 
        //               src="/img-5.jpg"
        //               text="Best in Class"
        //               label="Luxury"
        //               path='/services'
                      
        //               />
        //               <CardItems 
        //               src="/img-2.jpg"
        //               text="Toughened"
        //               label="Solid"
        //               path="/services"
                      
        //               />
        //               <CardItems 
        //               src="/img-3.jpg"
        //               text="Traditional"
        //               label="Rigid"
        //               path="/services"
                      
        //               />
        //               <CardItems 
        //               src="/img-4.jpg"
        //               text="Waterproofing"
        //               label="Glossy"
        //               path="/services"
                      
        //               />
        //             </ul>
        //         </div>
        //     </div>
            
        // </div>

