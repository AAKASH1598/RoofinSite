import React from 'react';
import DetailsThumb from './DetailsThumb';
import './Product.css'
import './Contact.css'

class App extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Polycarbonate Sheet"],
        "src": [
          "/polycarbonate.jpg"
],
        // "description": "EVERON ROOFING EXCLUSIVES",
        "content":[ "Polycarbonate sheet is the choice of manufacturers in a wide range of industries because of its benefits."],
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
                <div><div class="zr_btn_primary btn-primary padding"><a href="/Polycarbonate_sheet">Know more </a></div></div>
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