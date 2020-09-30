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

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <ScrollTop/>
        <Switch>
        <Route path='/home'  component={Home} />
        <Route path='/Contact'  component={Contact} />
        <Route path='/services'  component={Services} />
        <Route path='/About'  component={About} />
      </Switch>
      
      <Footer/>
    </Router>

    </>
  );
}

export default App;
