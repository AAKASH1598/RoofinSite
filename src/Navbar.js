import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
function Navbar() {

    const[click,setClick]=useState(false)

    const[button,SetButton]=useState(true)

    const handleClick=()=>setClick(!click)

    const CloseMenu=()=>setClick(false);

    const showMenu=()=>{
        if(window.innerWidth<=960){
            SetButton(false)

        }
        else{
            SetButton(true)

        }
    }

    useEffect(()=>{
        showMenu()
    },[])

    window.addEventListener('resize',showMenu)
    return (
        
        <div className="navbar">
        <div className="navbar-container">
            <Link to='/home' className="navbar-logo" onClick={CloseMenu}>
            EVERON<i class="fab fa-rockrms"></i>
            </Link>
         <div className="menu-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"} />
         </div>
         <ul className={click ? "menu active" : "menu"}>
             <li className="nav-item">
                 <Link to='/home' className="nav-links" onClick={CloseMenu}>
                  HOME
                 </Link>
             </li>

             <li className="nav-item">
                 <Link to='/services' className="nav-links" onClick={CloseMenu}>
                  SERVICES
                 </Link>
             </li>

             <li className="nav-item">
                 <Link to='/products' className="nav-links" onClick={CloseMenu}>
                  PRODUCTS
                 </Link>
             </li>
            
             <li className="nav-item">
                 <Link to='/contact' className="nav-links" onClick={CloseMenu}>
                  CONTACT US
                 </Link>
             </li>

             <li className="nav-item">

              <Link to='/about' className="nav-links-sign" onClick={CloseMenu}>
                  ABOUT-US
                 </Link> 
             </li>
         </ul>
        {button && <Button buttonStyle="btn--outline">ABOUT-US</Button>} 
        </div>
        </div>
       
    )
}

export default Navbar