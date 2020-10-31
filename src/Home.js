import React from 'react';
import './App.css';
import Cards from './Cards';
import CounterSite from './CounterSite';
import Introsite from './Introsite';
import Qualities from './Qualities';
import Colorlist from './Colorlist';
import All_Products from './All_Products';
import axios from 'axios';
import './Introsite.css'
import Download from './Download';

function Home() {
  
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
    <>
      <Introsite />
       <div className="download__button" onClick={()=>download()}>
        <div><table><tr><td className="satisfaction">We Provide 100% Customer Satisfied Service</td>
        <td className="brochure">
          <button onClick={()=>download()}>DOWNLOAD BROUCHER<i class="fas fa-download"></i></button></td>
        </tr>
        </table>
        
      </div></div>
      {/* <Download/> */}
      <div><h1 className="color">Our Products</h1></div>
      <All_Products/>
      <CounterSite/>
      <Qualities/>
    </>
  );
}

export default Home;