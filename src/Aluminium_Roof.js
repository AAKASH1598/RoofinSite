import React from 'react';
import DetailsThumb from './DetailsThumb';
import './Product.css'

class App extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Color Coated Roofing Sheet","Aluminium Roofing Sheet","Corrogated Sheet","Polycarbonate Sheet"],
        "src": [
          "/img-18.jpg",
          "/img-4.jpg",
          "/corrugated.jpg",
            "/polycarbonate.jpg"
        ],
        "description": "EVERON ROOFING EXCLUSIVES",
        "content":[ "Color Roofing Sheets offered are made available by us in different finish specifications so as to perfectly match up with the exact finish demands of the customers. These sheets can be made available by us in different color specifications and are designed using superior-grade material in conformance to defined international quality standards. Further, we also ensure these are well tested on defined parameters so as to ensure flawlessness finish standards. We provide 21 vibrant shades of color coated sheets",
        "It has the highest strength to weight ratio which is even greater than steel. The robustness and lesser weight make it an ideal solution for roofing. Aluminum sheets doesn't rust or corrode even in the highly corrosive environments. Aluminium is resistant to weathering, even in industrial atmospheres",
        "Corrugated sheets are stronger than other alternatives due to their rippled structure, as compared to plain surfaces of other sheets. Their repetitive folds on the surface are what offers them the better durability and enhanced strength that they possess. They also pave the way for increased strength across smaller surface areas. Corrugated sheets can also withstand strong impacts from objects falling onto them. This makes them durable and impact resistant, thus long-lasting.",
        "Polycarbonate sheet is the choice of manufacturers in a wide range of industries because of its benefits. One of the most important is its strength combined with design flexibility. Polycarbonate is 30 times stronger than acrylic and over 200 times stronger than glass. However, it's also more easily molded than glass and is much lighter."
        ],
        "count": 1
      }
    ],
    index: 1
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
                <a href="/Aluminium_Roof"><h2>{item.title[1]}</h2></a>
                </div>

                <a href="/Aluminium_Roof"><p>{item.description}</p></a>
                <a href="/Aluminium_Roof"><p>{item.content[1]}</p></a>

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