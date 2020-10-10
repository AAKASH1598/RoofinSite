import React from 'react';
import DetailsThumb from './DetailsThumb';
import {Link,animateScroll as top} from 'react-scroll'
import './Product.css'

class App extends React.Component{

  state = {
    products: [
      {
        "id": "1",
        "title": ["Roofing Sheet","Color Coated Roofing Sheet","MS Roofing Sheet","Aluminium Roofing Sheet","Paper Sheet",
    "Industrial Roofing Sheet","Stainless Steel Roofing Sheet"],
        "src": [
            "/img-17.jpg",
            "/img-18.jpg",
            "/img-19.jpg",
            "/img-4.jpg",
            "/img-3.jpg",
            "/img-14.jpg",
            "/img-20.jpg"
          ],
        "description": "EVERON ROOFING EXCLUSIVES",
        "content":[ "A roof is the top covering of a building, including all materials and constructions necessary to support it on the walls of the building or on uprights, providing protection against rain, snow, sunlight, extremes of temperature, and wind","Roof, covering of the top of a building, serving to protect against rain, snow, sunlight, wind, and extremes of temperature","Our Mission is to provide clients across India with Color Coated Roofing Solutions for all type of Industrial building from concept planning through to completion with a highly skilled, Professional team. Star Roofing Solutions provide color coated sheets in various colors, sizes, heights, thickness and coating","Aluminum Aluminium Roofing Sheet, Thickness Of Sheet: 0.2 - 2 Mm Rs 580/Square Meter. Aluminum Color Coated Aluminium Roofing Sheets, Thickness Of... Rs 650/Square Meter. Aluminium Fixing Onduline Sheets, Width: 600-1250 mm. Rs 125/ Square FeetGet Latest Price.","Roofing felt (felt paper, asphalt felt paper) is a sheet material impregnated with bitumen (asphalt), similar totar paper, used in building construction","These buildings are perfectly customized answers for a client's necessities and are specially crafted to meet careful prerequisites. These buildings are sufficiently adaptable to suit diverse building measurements, they are effortlessly expandable, can withstand cruel climatic conditions and accompany upkeep free outsides","3 layers of packing, inside is kraft paper, water plastic film is in the middle and ouside GI steel sheet to be covered by steel strips with lock, with inner coil sleeve."],
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
                <Link className="scrolling"  activeClass="active"
                                             spy={true}
                                             hashSpy={true}
                                             offset={50}
                                             isDynamic={true}  to= {item.title[index]} smooth={true} duration={500}>
                    <img src={item.src[index] } alt="" ></img>
                </Link>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title[index]}</h2>
                </div>

                <p>{item.description}</p>
                <p>{item.content[index]}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                

              </div>
            </div>
          ))
        }
               <div className="products_third" id="Roofing Sheet">
               <h1> First Product</h1>
                    <p>Google Docs is a word processor included as part of a free, web-based Google Docs suite offered by Google within its Google Drive service. Google Docs is available as a web application, mobile app for Android, iOS, Windows, BlackBerry, and as a desktop application on Google's ChromeOS. The app is compatible with Microsoft Office file formats.[1] The application allows users to create, view and edit files online while collaborating with other users in real-time. Edits are tracked by user with a revision history presenting changes. An editor's position is highlighted with an editor-specific color and cursor. A permissions system regulates what users can do. Updates have introduced features using machine learning, including "Explore", offering search results based on the contents of a document, and "Action items", allowing users to assign tasks to other user</p>
                </div>
                <div className="products_third" id="Color Coated Roofing Sheet">
                <h1> Second Product</h1>
                    <p>Google Docs is a word processor included as part of a free, web-based Google Docs suite offered by Google within its Google Drive service. Google Docs is available as a web application, mobile app for Android, iOS, Windows, BlackBerry, and as a desktop application on Google's ChromeOS. The app is compatible with Microsoft Office file formats.[1] The application allows users to create, view and edit files online while collaborating with other users in real-time. Edits are tracked by user with a revision history presenting changes. An editor's position is highlighted with an editor-specific color and cursor. A permissions system regulates what users can do. Updates have introduced features using machine learning, including "Explore", offering search results based on the contents of a document, and "Action items", allowing users to assign tasks to other user</p>
                </div>
                <div className="products_third" id="MS Roofing Sheet">
                <h1> Third Product</h1>
                    <p>Google Docs is a word processor included as part of a free, web-based Google Docs suite offered by Google within its Google Drive service. Google Docs is available as a web application, mobile app for Android, iOS, Windows, BlackBerry, and as a desktop application on Google's ChromeOS. The app is compatible with Microsoft Office file formats.[1] The application allows users to create, view and edit files online while collaborating with other users in real-time. Edits are tracked by user with a revision history presenting changes. An editor's position is highlighted with an editor-specific color and cursor. A permissions system regulates what users can do. Updates have introduced features using machine learning, including "Explore", offering search results based on the contents of a document, and "Action items", allowing users to assign tasks to other user</p>
                </div>
                <div className="products_third" id="Aluminium Roofing Sheet">
                <h1> Fourth Product</h1>
                    <p>Google Docs is a word processor included as part of a free, web-based Google Docs suite offered by Google within its Google Drive service. Google Docs is available as a web application, mobile app for Android, iOS, Windows, BlackBerry, and as a desktop application on Google's ChromeOS. The app is compatible with Microsoft Office file formats.[1] The application allows users to create, view and edit files online while collaborating with other users in real-time. Edits are tracked by user with a revision history presenting changes. An editor's position is highlighted with an editor-specific color and cursor. A permissions system regulates what users can do. Updates have introduced features using machine learning, including "Explore", offering search results based on the contents of a document, and "Action items", allowing users to assign tasks to other user</p>
                </div>
                <div className="products_third" id="Paper Sheet">
                <h1> Fifth Product</h1>
                    <p>Google Docs is a word processor included as part of a free, web-based Google Docs suite offered by Google within its Google Drive service. Google Docs is available as a web application, mobile app for Android, iOS, Windows, BlackBerry, and as a desktop application on Google's ChromeOS. The app is compatible with Microsoft Office file formats.[1] The application allows users to create, view and edit files online while collaborating with other users in real-time. Edits are tracked by user with a revision history presenting changes. An editor's position is highlighted with an editor-specific color and cursor. A permissions system regulates what users can do. Updates have introduced features using machine learning, including "Explore", offering search results based on the contents of a document, and "Action items", allowing users to assign tasks to other user</p>
                </div>
                <div className="products_third" id="Industrial Roofing Sheet">
                    <h1> Sixth Product</h1>
                    <p>Google Docs is a word processor included as part of a free, web-based Google Docs suite offered by Google within its Google Drive service. Google Docs is available as a web application, mobile app for Android, iOS, Windows, BlackBerry, and as a desktop application on Google's ChromeOS. The app is compatible with Microsoft Office file formats.[1] The application allows users to create, view and edit files online while collaborating with other users in real-time. Edits are tracked by user with a revision history presenting changes. An editor's position is highlighted with an editor-specific color and cursor. A permissions system regulates what users can do. Updates have introduced features using machine learning, including "Explore", offering search results based on the contents of a document, and "Action items", allowing users to assign tasks to other user</p>
                </div>
                <div className="products_third" id="Stainless Steel Roofing Sheet">
                <h1> Seventh Product</h1>
                    <p>Google Docs is a word processor included as part of a free, web-based Google Docs suite offered by Google within its Google Drive service. Google Docs is available as a web application, mobile app for Android, iOS, Windows, BlackBerry, and as a desktop application on Google's ChromeOS. The app is compatible with Microsoft Office file formats.[1] The application allows users to create, view and edit files online while collaborating with other users in real-time. Edits are tracked by user with a revision history presenting changes. An editor's position is highlighted with an editor-specific color and cursor. A permissions system regulates what users can do. Updates have introduced features using machine learning, including "Explore", offering search results based on the contents of a document, and "Action items", allowing users to assign tasks to other user</p>
                </div>
                <div className="top__scroll">
                        <i class="fas fa-arrow-up"onClick={()=>top.scrollToTop()}></i>
                        <h2>go to top</h2>
                </div>
      </div>
    );
  };
}

export default App;