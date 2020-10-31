import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_lxwnkfc', e.target, 'user_KULH77I63xzS80l08UPZr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }



function Contact() {
    return (
        <div>
            <section class="parallax_bg parallax contact_bg sec_padding top-banner">
                <div className="contact-container paralax_content"> 
                <div class="row">
                     <div> 
                     <div class="top_banner_big primary_color_wh">
                         <h2>Drop us a line</h2></div> <div class="top_banner_small primary_color_wh">
                              <p>For more information about our products and services contact us</p>
                              </div></div></div></div></section>

<section> 
<div className="contact-container"> 
<div class="row">
<div> 
<div class="contact_block"> <div class="row">
 <div> 
 <div class="contact_form_block">  <p>Fill the form, we will contact you soon!</p> 
 <div class="row"> 
 <form onSubmit={sendEmail}>
 <div class="col-md-6 col-sm-6 col-xs-12 col-lg-6"> <div class="form-group"> <input type="text" name="name" required="required"/> <label >Name</label><i class="bar"></i></div></div>
  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-6"> <div class="form-group"> <input type="text" name="mobile_no" required="required"/> <label>Mobile No.</label><i class="bar"></i></div></div> 
  <div class="col-md-6 col-xs-12 col-lg-6 col-sm-6"> <div class="form-group"> <input type="text"  name="email" required="required"/> <label>Email</label><i class="bar"></i></div></div>
   <div class="col-md-6 col-xs-12 col-lg-6 col-sm-6"> <div class="form-group"> <input type="text"  name="subject" required="required"/> <label>Subject</label><i class="bar"></i></div></div> 
   <div class="col-md-12 col-xs-12 col-lg-12 col-sm-6"> <div class="form-group"> <input type="text" required="required" name="message"/><i class="bar"></i> <label>Message</label></div></div> 
   <div class="col-md-12 col-xs-12 col-lg-12 col-sm-6"> <div class="submitclass"> <div class="submit_btn zr_btn_primary btn-primary fadeInUp _btn_act_mn745 animate-in"><input type="submit" value="Submit" /></div></div></div></form>
</div></div></div> 
<div class="address"> 
<div class="contact_address"> <h2>Contact</h2> <span class="font">Everon Roofing Solutions</span> <span class="font">Manufacturer and Supplier of PPGL Roofing Sheets </span> <p className="font">S.f.No. 164/3A2, Near SVGV School, Sirumugai Road, Karamadai, Coimbatore-641 104</p>
</div> 
<div class="contact-detail-contact"> 
 <div class="cont_num_contact"> <span class="contact_phone-icon"><i class="fa fa-mobile mobile-icon-size" aria-hidden="true"></i></span> <span className="font"><a href="tel:9500993784">+91 95009 93784</a>, <a href="tel:9500993585">95009 93585</a><br/> <a href="tel:9500993472">+91 95009 93472</a>, <a href="tel:9500993756">95009 93756</a></span></div>
 <div> <span class="cont_mail"><i class="fa fa-envelope contact_mail-icon" aria-hidden="true"></i></span> <span class="font"> everonroofingsolutions@gmail.com </span></div>
</div>
</div>  
</div></div></div></div></div>
</section>
</div>
    )
}

export default Contact