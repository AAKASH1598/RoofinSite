import React from 'react'
import axios from 'axios';
import './Introsite.css'


function Download() {
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
        <div className="download__button">
        <div><table className="align"><tr><td className="satisfaction">We Provide 100% Customer Satisfied Service</td>
        <td className="brochure">
          <button className="buttonColor" onClick={()=>download()}>DOWNLOAD BROUCHER<i class="fas fa-download"></i></button></td>
        </tr>
        </table>
        
      </div></div>
    )
}

export default Download
