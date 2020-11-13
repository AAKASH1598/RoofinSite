import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Changer.css'
import sample1 from './images/slider1.jpg'
import sample2 from './images/slider2.jpg'
import sample3 from './images/slider3.jpg'
import sample4 from './images/slider4.jpg'
import sample5 from './images/slider5.jpg'
import sample6 from './images/slider6.jpg'
import sample7 from './images/slider7.jpg'
import sample8 from './images/slider8.jpg'
import sample9 from './images/slider9.jpg'
import sample10 from './images/slider10.jpg'
import sample11 from './images/slider11.jpg'
import sample12 from './images/slider12.jpg'

export default function SimpleSlider() {
    const data = [
        { id: 2,  img: sample12 },
        { id: 3,  img: sample2 },
        { id: 4,  img: sample3 },
        { id: 5,  img: sample4 },
        { id: 6,  img: sample5 },
        { id: 7,  img: sample6 },
        { id: 8,  img: sample7 },
        { id: 9,  img: sample8 },
        { id: 10,  img: sample9 },
        { id: 11,  img: sample10 },
        { id: 12,  img: sample11 },
        { id: 13,  img: sample1 }
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