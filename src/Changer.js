import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Changer.css'
import sample1 from './images/roofsample1.jpg'
import sample2 from './images/roofsample2.jpg'
import sample3 from './images/roofsample3.jpg'
import sample4 from './images/roofsample4.jpg'
import sample5 from './images/roofsample5.jpg'

export default function SimpleSlider() {
    const data = [
        { id: 2,  img: sample1 },
        { id: 3,  img: sample2 },
        { id: 4,  img: sample3 },
        { id: 5,  img: sample4 },
        { id: 6,  img: sample5 }
    ]
  const renderSlides = () =>
    data.map((type,index) => (
      <div key ={ index }>
        <img className="imagefix" src= {type.img}/>
      </div>
    ));

  return (
    <div className="App">
      <Slider dots={true} slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}>{renderSlides()}
        </Slider>
    </div>
  );
}