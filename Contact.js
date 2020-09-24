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
                     <div class="col-md-5 col-xs-12 col-sm-6"> 
                     <div class="top_banner_big primary_color_wh">
                         <h2>Let's connect</h2></div> <div class="top_banner_small primary_color_wh">
                              <p>Do you need more information? Please contact us to find more about our products and services.</p>
                              </div></div></div></div></section>

<section id="contact-wrap"> 
<div className="contact-container"> 
<div class="row">
<div> 
<div class="contact_block"> <div class="row">
 <div> 
 <div class="contact_form_block"> <h2>Send us a message</h2> <p>Feel free to reach out to us with feedback, we would love to hear from you!</p> 
 <div class="row"> 
 <form onSubmit={sendEmail}>
  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-6"> <div class="form-group"> <input type="text" name="name" required="required"/> <label for="input" class="control-label">Name</label><i class="bar"></i></div></div>
  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-6"> <div class="form-group"> <input type="text" name="mobile_no" required="required"/> <label for="input" class="control-label">Mobile / Contact No.</label><i class="bar"></i></div></div> 
  <div class="col-md-6 col-xs-12 col-lg-6 col-sm-6"> <div class="form-group"> <input type="text"  name="email" required="required"/> <label for="input" class="control-label">Email</label><i class="bar"></i></div></div>
   <div class="col-md-6 col-xs-12 col-lg-6 col-sm-6"> <div class="form-group"> <input type="text"  name="subject" required="required"/> <label for="input" class="control-label">Subject</label><i class="bar"></i></div></div> 
   <div class="col-md-12 col-xs-12 col-lg-12 col-sm-6"> <div class="form-group"> <textarea required="required" name="message"></textarea><i class="bar"></i> <label for="textarea" class="control-label">Message</label></div></div> 
   <div class="col-md-12 col-xs-12 col-lg-12 col-sm-6"> <div class="submitclass"> <div class="submit_btn zr_btn_primary btn-primary fadeInUp _btn_act_mn745 animate-in"><input type="submit" value="Submit" /></div></div></div></form>
</div></div></div> 
<div class="address"> 
<div class="contact_address"> <h2>Contact Information</h2> <span class="font">Everon Roofing Solutions</span> <span class="">Manufacturer and Supplier of PPGL Roofing Sheets </span> <p>S.f.No. 164/3A2, Near SVGV School, Sirumugai Road, Karamadai, Coimbatore-641 104</p>
</div> 
<div class="contact-detail"> 
 <div class="cont_num"> <span class="contact_phone-icon"><i class="fa fa-mobile mobile-icon-size" aria-hidden="true"></i></span> <span><a href="tel:9500993784">+91 95009 93784</a>, <a href="tel:9500993585">95009 93585</a><br/> <a href="tel:9500993472">+91 95009 93472</a>, <a href="tel:9500993756">95009 93756</a></span></div>
 <div class="cont_mail"> <span><i class="fa fa-envelope contact_mail-icon" aria-hidden="true"></i></span> <span class="font"> everonroofingsolutions@gmail.com </span></div>
</div>
</div>  
</div></div></div></div></div>
</section>
</div>
    )
}

export default Contact