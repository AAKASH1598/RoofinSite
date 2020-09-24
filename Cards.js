import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
    return (
        <div className="card">
            <h1> Find the best of our innovation</h1>
            <div className="card__container">
                <div className="card__wrapper">
                    <ul className="card__items">
                      <CardItems 
                      src="/img-5.jpg"
                      text="Best in Class"
                      label="Luxury"
                      path='/services'
                      
                      />
                      <CardItems 
                      src="/img-2.jpg"
                      text="Toughened"
                      label="Solid"
                      path="/services"
                      
                      />
                      <CardItems 
                      src="/img-3.jpg"
                      text="Traditional"
                      label="Rigid"
                      path="/services"
                      
                      />
                      <CardItems 
                      src="/img-4.jpg"
                      text="Waterproofing"
                      label="Glossy"
                      path="/services"
                      
                      />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
