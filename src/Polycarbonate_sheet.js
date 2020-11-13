import React from 'react';
import DetailsThumb from './DetailsThumb';
import './Product.css'

class Polycarbonate_sheet extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Polycarbonate Sheet"],
        "src": [
          "/polycarbonate.jpg"
],
        // "description": "EVERON ROOFING EXCLUSIVES",
        "content":[ "Polycarbonate sheet is the choice of manufacturers in a wide range of industries because of its benefits. One of the most important is its strength combined with design flexibility. Polycarbonate is 30 times stronger than acrylic and over 200 times stronger than glass. However, it's also more easily molded than glass and is much lighter."],
        "count": 3
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
                  <a href="/Polycarbonate_sheet"><h2>{item.title[0]}</h2>
                  </a>
                </div>

                <a href="/Polycarbonate_sheet"><p>{item.description}</p></a>
                <a href="/Polycarbonate_sheet"><p>{item.content[0]}</p></a>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Polycarbonate_sheet;