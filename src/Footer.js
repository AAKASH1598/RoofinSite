import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'


function Footer() {
    return (
        <div className='footer-container'>
          <section className='footer-subscription'>
          <div> 
          <div class="row"> 
          <div class="col-md-12 col-lg-12 col-sm col-xs"> 
          <div class="footer_link"> 
          <ul> 
            <li><Link to="/product">Roofing Sheet</Link></li> 
            <li><Link to="/product">Colour Coated Roofing Sheet</Link></li> 
            <li><Link to="/product">MS Roofing Sheet</Link></li>
             <li><Link to="/product">Aluminium Roofing Sheet</Link></li> 
             <li><Link to="/product">Paper Sheet</Link></li> 
             <li><Link to="/product">Industrial Roofing Sheet</Link></li> 
             <li><Link to="/product">Stainless Steel Roofing Sheet</Link></li> 
            </ul></div>
           <div class="footer_link"> 
          <ul>
             <li><a href="/home">Home</a></li> 
             <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              </ul></div></div></div>
               <div>
                  <table class="table-width"><tr><td class="padding_left">
                  <div class="footer_contact"> 
                  <ul> 
                    <li><span><i class="fa fa-mobile mobile-icon" aria-hidden="true"></i></span>+91 95009 93784</li> 
                    <li><span><i class="fa fa-envelope contact_mail-icon" aria-hidden="true"></i></span>everonroofingsolutions@gmail.com</li>
                    </ul></div></td>
                    <td class="width"></td>
                    <td>
                     <div> 
                    <div class="footer-social"> 
                    <ul> 
                      <li> <a href="https://www.facebook.com/everonrooofingsolutions/" target="blank"> <i class="fab fa-facebook-f"></i></a></li>
                       <li> <a href="#"><i class="fab fa-youtube"></i></a></li> 
                       <li> <a href="https://goo.gl/maps/iFT3xr86C8LF827o9" target="_blank"><i class="fas fa-map-marker"></i></a></li>
                       <li> <a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul></div></div></td> </tr></table>
                        </div></div></section>
                        <div className="copy__box">
<div class="copy"> 
Copyright © 2020 All rights reserved.
</div>
</div>
         </div>
    )
}

export default Footer