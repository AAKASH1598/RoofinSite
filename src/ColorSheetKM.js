import React,{useState} from 'react';
import DetailsThumb from './DetailsThumb';
import './Product.css'
import './Contact.css'

// const [ toggle, setToggle ] = useState(0);
// function handleToggle (val){
//   setToggle(!toggle);
// }

class App extends React.Component{
  
  state = {
    products: [
      {
        "id": "1",
        "title": ["Color Coated Roofing Sheet"],
        "src1": ["/colormainimg.jpg"],
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
          "/roofsigalviolet.jpg"
          ],
        // "description": "EVERON ROOFING EXCLUSIVES",
        "content":[ "Color Roofing Sheets offered are made available by us in different finish specifications so as to perfectly match up with the exact finish demands of the customers. We provide 21 vibrant shades of color coated sheets"],
        
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

  



  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item.id}>
              <div className="big-img zoom">
              {/* toggle?<img src={item.src1[index] } alt="" ></img>:*/}
              <img src={item.src[index] } alt="" ></img> 
                
              </div>

              <div className="box">
                <div className="row">
                <a href="/Color_Roof_Variety"><h2>{item.title[0]}</h2></a>
                </div>
                <a href="/Color_Roof_Variety"><p className="link">Click to view available colors</p></a>
                <a href="/Color_Roof_Variety"><p>{item.description}</p></a>
                <a href="/Color_Roof_Variety"><p>{item.content[0]}</p></a>
                <div><div class="zr_btn_primary btn-primary padding"><a href="/Color_Roof">Know more </a></div></div>
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