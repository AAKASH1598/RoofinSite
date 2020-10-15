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
import Color_Roof_Path from './Product_List/Color_Roof_Path';
import Polycarbonate_Sheet_Path from './Product_List/Polycarbonate_Sheet_Path';
import Aluminium_Roof_Path from './Product_List/Aluminium_Roof_Path';
import Corrogated_Sheet_Path from './Product_List/Corrogated_Sheet_Path';

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
        <Route path='/Color_Roof' component={Color_Roof_Path}/>
        <Route path='/Polycarbonate_sheet' component={Polycarbonate_Sheet_Path}/>
        <Route path='/Aluminium_Roof' component={Aluminium_Roof_Path}/>
        <Route path='/Corrogated_sheet' component={Corrogated_Sheet_Path}/>
      </Switch>
      
      <Footer/>
    </Router>

    </>
  );
}

export default App;
