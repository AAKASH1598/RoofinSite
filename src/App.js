import React from 'react';
import './App.css';
import Navbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact';
import Services from './Services'
import About from './About';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import component from './component';
import Roofing_Sheet_Path from './Product_List/Roofing_Sheet_Path';
import Steel_Roof_Path from './Product_List/Steel_Roof_Path';
import Color_Roof_Path from './Product_List/Color_Roof_Path';
import MS_Roof_Path from './Product_List/MS_Roof_Path';
import Aluminium_Roof_Path from './Product_List/Aluminium_Roof_Path';
import Paper_Sheet_Path from './Product_List/Paper_Sheet_Path';
import Industrial_Roof_Path from './Product_List/Industrial_Roof_Path';
function App() {
  return (
    <>
    <Router>
      
    <Navbar/>
    <ScrollTop/>
        <Switch>
        <Route path='/'  exact component={Home} />
        <Route path='/home'  component={Home} />
        <Route path='/contact'  component={Contact} />
        <Route path='/services'  component={Services} />
        <Route path='/products' component={component} />
        <Route path='/about'  component={About} />
        <Route path='/Roofing_Sheet' component={Roofing_Sheet_Path}/>
        <Route path='/Steel_Roof' component={Steel_Roof_Path}/>
        <Route path='/Color_Roof' component={Color_Roof_Path}/>
        <Route path='/MS_Roof' component={MS_Roof_Path}/>
        <Route path='/Aluminium_Roof' component={Aluminium_Roof_Path}/>
        <Route path='/Paper_Sheet' component={Paper_Sheet_Path}/>
        <Route path='/Industrial_Roof' component={Industrial_Roof_Path}/>
      </Switch>
     
      <Footer/>
    </Router>

    </>
  );
}

export default App;
