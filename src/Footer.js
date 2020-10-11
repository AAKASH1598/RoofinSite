import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'


function Footer() {
    return (
        <div className='footer-container'>
          <div class="row"> 
          <div class="col-md-12 col-lg-12 col-sm col-xs"> 
          <div class="footer_link"> 
          <ul> 
            
            <li className="paddingclass" ><Link to="/Color_Roof">Colour Coated Roofing Sheet</Link></li>  
             <li className="paddingclass"><Link to="/Aluminium_Roof">Aluminium Roofing Sheet</Link></li> 
             <li className="paddingclass"><Link to="/Corrogated_sheet">Corrogated Sheet</Link></li> 
             <li className="paddingclass"><Link to="/Polycarbonate_sheet">Polycarbonate Sheet</Link></li>  
            </ul></div>
           <div class="footer_link"> 
          <ul>
             <li className="paddingclass"><a href="/home">Home</a></li> 
             <li className="paddingclass"><a href="/about">About Us</a></li>
              <li className="paddingclass"><a href="/contact">Contact Us</a></li>
              </ul></div>
               <div class="footer_link footer-social">
                 <div>
                  <ul> 
                    <li className="paddingclass"><span><i class="fa fa-mobile mobile-icon" aria-hidden="true"></i></span>+91 95009 93784, 95009 93585, 95009 93472, 95009 93756</li> 
                    <li className="paddingclass"><span><i class="fa fa-envelope contact_mail-icon" aria-hidden="true"></i></span>everonroofingsolutions@gmail.com</li>
                     </ul></div><div><ul> <li> <a href="https://www.facebook.com/everonrooofingsolutions/" target="blank"> <i class="fab fa-facebook-f"></i></a></li>
                       <li> <a href="#"><i class="fab fa-youtube"></i></a></li> 
                       <li> <a href="https://goo.gl/maps/iFT3xr86C8LF827o9" target="_blank"><i class="fas fa-map-marker"></i></a></li>
                       <li> <a href="#"><i class="fab fa-instagram"></i></a></li>
                      </ul></div></div>
                        </div></div>
                        <div className="copy__box">
<div class="copy"> 
Copyright © 2020 All rights reserved.
</div>
</div>
         </div>
    )
}

export default Footer