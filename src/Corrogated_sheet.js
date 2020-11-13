import React from 'react';
import DetailsThumb from './DetailsThumb';
import './Product.css'

class Corrogated_sheet extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Corrogated Sheet"],
        "src": [
            "/corrugated.jpg"
          ],
        // "description": "EVERON ROOFING EXCLUSIVES",
        "content":"EVERON supplies Galvanized Corrugated (GC) sheets to customer requirements. It not only specialises in thin guage corrugated sheets with thicknesses as low as 0.12mm suitable for low cost roofing for residential homes and industrial sheds but also roofing for heavy industrial housing with thickness upto 0.50mm.",
        

        "content1":"ALL WEATHER-PROOF",

        "content2":"The Galvanized substrate is available in a wide range of zinc coating to provide supreme corrosion protection in various environmental conditions. GC products are subjected to strict quality control tests to assure performance in all climatic conditions.",

        "content3":"LIGHT WEIGHT & HIGH STRENGTH",

        "content4":"The above attributes have made a household name as people trust it implicitly. Because of these user-friendly attributes, it has been a great success with the customer.",


        "content5":"CONVENIENT TO INSTALL AND MAINTENANCE FREE",

        "content6":"GC sheets are easy and quick to install for roofing and cladding applications and totally maintenance free.",
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
                <a href="/Corrogated_sheet"><h2>{item.title[0]}</h2></a>
                </div>

                <a href="/Corrogated_sheet"><p>{item.description}</p></a>
                <a href="/Corrogated_sheet"><p>{item.content}</p></a>
                <p className="product__header">{item.content1}</p>
                <p>{item.content2}</p>
                <p className="product__header">{item.content3}</p>
                <p>{item.content4}</p>
                <p className="product__header">{item.content5}</p>
                <p>{item.content6}</p>


                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Corrogated_sheet;