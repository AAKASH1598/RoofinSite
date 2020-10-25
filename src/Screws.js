import React from 'react';
import DetailsThumb from './DetailsThumb';
import './Product.css'

class App extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Color Coated Roofing Sheet","Aluminium Roofing Sheet","Corrogated Sheet","Polycarbonate Sheet","Pipes","Screws"],
        "src": [
          "/img-18.jpg",
          "/img-4.jpg",
          "/corrugated.jpg",
            "/polycarbonate.jpg",
            "/Pipes.jpg",
            "/Screws.jpg"
        ],
        "description": "EVERON ROOFING EXCLUSIVES",
        "content":[ "Color Roofing Sheets offered are made available by us in different finish specifications so as to perfectly match up with the exact finish demands of the customers. These sheets can be made available by us in different color specifications and are designed using superior-grade material in conformance to defined international quality standards. Further, we also ensure these are well tested on defined parameters so as to ensure flawlessness finish standards. We provide 21 vibrant shades of color coated sheets",
        "It has the highest strength to weight ratio which is even greater than steel. The robustness and lesser weight make it an ideal solution for roofing. Aluminum sheets doesn't rust or corrode even in the highly corrosive environments. Aluminium is resistant to weathering, even in industrial atmospheres",
        "Corrugated sheets are stronger than other alternatives due to their rippled structure, as compared to plain surfaces of other sheets. Their repetitive folds on the surface are what offers them the better durability and enhanced strength that they possess. They also pave the way for increased strength across smaller surface areas. Corrugated sheets can also withstand strong impacts from objects falling onto them. This makes them durable and impact resistant, thus long-lasting.",
        "Polycarbonate sheet is the choice of manufacturers in a wide range of industries because of its benefits. One of the most important is its strength combined with design flexibility. Polycarbonate is 30 times stronger than acrylic and over 200 times stronger than glass. However, it's also more easily molded than glass and is much lighter.",
        "Pipes are used to lay roofing sheets. It provides the strong basement for the roofing sheets. We provide the best quality of pipes which are rust resistance, better duarability. Our Pipes doesn't rust or corrode even in highly corrosive enviroments. It is capable of holding heavy weights.",
        "In order to attach two or more objects together, a fastener is used; specially to create temporary joints. Screws are a type of fastener that is used in fastening objects by drilling into the material. Made of hardened carbon steel or stainless steel, roofing screws or roof fasteners can be used for metal, plastic and fibreglass roofing applications. However, both metal and wood structures require different screw points. In order to stop water from penetrating, the roofing screw are required to have a sealing washer attached to it. We offer long durability screws."
        ],
        "count": 1
      }
    ],
    index: 5
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
                <a href="/Screws"><h2>{item.title[5]}</h2></a>
                </div>

                <a href="/Screws"><p>{item.description}</p></a>
                <a href="/Screws"><p>{item.content[5]}</p></a>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;