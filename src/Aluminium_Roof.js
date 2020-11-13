import React from 'react';
import DetailsThumb from './DetailsThumb';
import './Product.css'

class Aluminium_Roof extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Aluminium Roofing Sheet"],
        "src": [
          
          "/img-4.jpg"
          
        ],
        // "description": "EVERON ROOFING EXCLUSIVES",
        "content": "THE WORLD TURNS TO ALUMINIUM.",

        "content1":"Today, Aluminium is the most widely used non-ferrous metal in construction. Aluminium Roofing Sheets are the market leaders in its segment. Perfect for industrial, commercial and residential buildings, Aluminium is lightweight, yet strong. It is non-corrosive, durable, sleek and versatile.",
        
        "content2":"When it comes to metal roofing with exceptional looks and enduring quality, that brings the quality level to world-class standards. Widely preferred for residential roofing and also ideal for industrial applications as well, especially in developed countries. From small buildings to huge complexes.",
        
        "content3":"Aluminium is just the right material for constructions, thanks to its unique properties.  Aluminium helps to create aesthetically pleasing structures that are long-lasting and low on maintenance. They add elegance to the aesthetics of building exteriors.",
        
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  // componentDidMount(){
  //   const {index} = this.state;
  //   this.myRef.current.children[index].className = "active";
  // }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item.id}>
              <div className="big-img zoom">
                 <img src={item.src[index] } alt="" ></img>
              
              </div>

              <div className="box">
                <div className="row">
                <a href="/Aluminium_Roof"><h2>{item.title[0]}</h2></a>
                </div>

                <a href="/Aluminium_Roof"><p>{item.description}</p></a>
                <a href="/Aluminium_Roof"><p>{item.content}</p></a>
                <p>{item.content1}</p>
                <p>{item.content2}</p>
                <p>{item.content3}</p>
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Aluminium_Roof;