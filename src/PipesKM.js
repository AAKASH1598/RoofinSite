import React from 'react';
import DetailsThumb from './DetailsThumb';
import './Product.css'
import './Contact.css'

class App extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Pipes"],
        "src": [
          "/pipes/pipe1.jpg",
          "/pipes/pipe2.jpg",
          "/pipes/pipe3.jpg",
          "/pipes/pipe4.jpg",
          "/pipes/mainPipe.jpg",
          "/pipes/pipe5.jpg",
          "/pipes/pipe6.jpg",
          "/pipes/pipe7.jpg",
          "/pipes/pipe8.jpg",
          "/pipes/pipe9.jpg"
          
        ],
        // "description": "EVERON ROOFING EXCLUSIVES",
        "content":[ "Pipes are used to lay roofing sheets. It provides the strong basement for the roofing sheets."
        ],
        "count": 1
      }
    ],
    index: 4
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
                <a href="/Pipes"><h2>{item.title[0]}</h2></a>
                </div>

                <a href="/Pipes"><p>{item.description}</p></a>
                <a href="/Pipes"><p>{item.content[0]}</p></a>
                <div><div class="zr_btn_primary btn-primary padding"><a href="/Pipes">Know more </a></div></div>
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