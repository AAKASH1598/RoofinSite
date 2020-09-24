import React from 'react';
import './Footer.css';



function Footer() {
    return (
        <div className='footer-container'>
          <section className='footer-subscription'>
          <div> 
          <div class="row"> 
          <div class="col-md-12 col-lg-12 col-sm col-xs"> 
          <div class="footer_link"> 
          <ul> 
            <li><a href="#">Roofing Sheet</a></li> 
            <li><a href="#">Colour Coated Roofing Sheet</a></li> 
            <li><a href="#">MS Roofing Sheet</a></li>
             <li><a href="#">Aluminium Roofing Sheet</a></li> 
             <li><a href="#">Paper Sheet</a></li> 
             <li><a href="#">Industrial Roofing Sheet</a></li> 
             <li><a href="#">Stainless Steel Roofing Sheet</a></li> 
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
                    <li><span><i class="fa fa-mobile mobile-icon-size" aria-hidden="true"></i></span>+91 95009 93784</li> 
                    <li><span><i class="fa fa-envelope contact_mail-icon" aria-hidden="true"></i></span>everonroofingsolutions@gmail.com</li>
                    </ul></div></td>
                    <td class="width"></td>
                    <td>
                     <div> 
                    <div class="footer-social"> 
                    <ul> 
                      <li> <a href="https://www.facebook.com/everonrooofingsolutions/" target="blank"> <i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                       <li> <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li> 
                       <li> <a href="https://goo.gl/maps/iFT3xr86C8LF827o9" target="_blank"><i class="fa fa-map-marker" aria-hidden="true"></i></a></li>
                       <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul></div></div></td> </tr></table>
                        </div></div></section>
         </div>
    )
}

export default Footer
