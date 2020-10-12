import React from 'react';
import axios from 'axios'
import './App.css';
import './Introsite.css'



function Introsite() {

  function download(){
  
    
      axios(  {
          url:'https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
          method:'GET'
      })
  
      .then((response) => {
         console.log(response)
          const URL = window.URL.createObjectURL(new Blob([response.data]))
          const link=document.createElement('a')
          link.href=URL
          link.setAttribute('download','Broucher.jpg')
          document.body.appendChild(link)
          link.click()
      }).catch((err)=>{
        console.log(err)
      })

  
  }
       
  
  
  
  return (
   
    <div className='hero-container'>
      <h1>WE ARE EVERON</h1>
      <p>We are all under the same sky</p>
      <div onClick={()=>download()}>
        <button className="downlaod">DOWNLOAD OUR BROUCHER FROM JUST ONE CLICK<i class="fas fa-download"></i></button> 
      </div>
     
    </div>
  );
 
}

export default Introsite;