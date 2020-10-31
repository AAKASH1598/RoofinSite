import React from 'react';
import axios from 'axios'
import './App.css';
import './Introsite.css'



function Introsite() {

  function download(){
  
    
      axios(  {
          url:'https://images.unsplash.com/photo-1603012618665-6f825a48243f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
          method:'GET',
          responseType:'blob'
      })
  
      .then((response) => {
          const URL = window.URL.createObjectURL(new Blob([response.data]))
          const link=document.createElement('a')
          link.href=URL
          link.setAttribute('download','Broucher.jpg')
          document.body.appendChild(link)
          link.click()
      })

  
  }
       
  
  
  
  return (
   
    <div className='hero-container'>
      <div className="text">
        <span className="word1">EVERON ROOFINGS</span>
        <span className="word2">We are all under the same sky</span>
      </div>
      {/* <div className="download__button" onClick={()=>download()}>
        <button className="download">DOWNLOAD OUR BROUCHER FROM JUST ONE CLICK<i class="fas fa-download"></i></button> 
      </div>  */}
    </div>
  );
 
}

export default Introsite;