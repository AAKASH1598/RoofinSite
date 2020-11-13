import React from 'react';
import Colorlist from './Colorlist';
import DetailsThumb from './DetailsThumb';
import './Product.css'


class App extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Color Coated Roofing Sheet","Aluminium Roofing Sheet","Corrogated Sheet","Polycarbonate Sheet"],
        "src": [
          "/rooforange.jpg",
          "/roofbrickred.jpg",
          "/roofenviromentgreen.jpg",
          "/roofgoldenyellow.jpg",
          "/roofdarkgray.jpg",
          "/roofmistgreen.jpg",
          "/roofneonred.jpg",
          "/roofoffwhite.jpg",
          "/roofroyalblue.jpg",
          "/roofskyblue.jpg",
          "/roofslategray.jpg",
          "/rooftorquoiseblue.jpg",
          "/roofcaulifiedgreen.jpg",
          "/roofchocobrown.jpg",
          "/roofgalv.jpg",
          "/roofpurple.jpg",
          "/roofreliancegreen.jpg",
          "/roofterracotta.jpg",
          "/roofcherryred.jpg",
          "/roofsandal.jpg",
          "/roofsiganalviolet.jpg"
          ],
        // "description": "EVERON ROOFING EXCLUSIVES",
        "content":[ "Color Roofing Sheets offered are made available by us in different finish specifications so as to perfectly match up with the exact finish demands of the customers. These sheets can be made available by us in different color specifications and are designed using superior-grade material in conformance to defined international quality standards. Further, we also ensure these are well tested on defined parameters so as to ensure flawlessness finish standards. We provide 21 vibrant shades of color coated sheets"],
        
        "count": 15
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
                <a href="/Color_Roof"><h2>{item.title[0]}</h2></a>
                </div>

                <a href="/Color_Roof"><p>{item.description}</p></a>
                <a href="/Color_Roof"><p>{item.content[0]}</p></a>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                

              </div>
            </div>
          ))
        }
        <>
        <Colorlist/>
      </>
      </div>
      
      
    );
  };
}

export default App;
