import React from 'react'
import './Qualities.css'
function Qualities() {
return (
 <div className="outer">     
    <div className="container__flex">
        <div className="card">
                <div className="imgBox" data-text='Everon'>
                    <h3><i class="fas fa-user-tie"></i></h3>
                </div>
            <div className="content">
                <div>
                <h3>Everon</h3>
                <p>Largest Manufacturer of Roofs</p>
                </div>
            </div>
        </div>  
        <div className="card">
                <div className="imgBox" data-text='Time'>
                    <h3><i class="fas fa-stopwatch"></i></h3>
                </div>
            <div className="content">
                <div>
                <h3>Time</h3>
                <p>We deliver the products at the right time</p>
                </div>
            </div>
        </div>   
        <div className="card">
                <div className="imgBox" data-text='Value for Money'>
                    <h3><i class="fas fa-dollar-sign"></i>
</h3>
                </div>
            <div className="content">
                <div>
                <h3>Value for Money</h3>
                <p>Competitive Cost Advantage</p>
                </div>
            </div>
        </div>   
        <div className="card">
                <div className="imgBox" data-text='Customer Service'>
                    <h3><i class="fas fa-handshake"></i></h3>
                </div>
            <div className="content">
                <div>
                <h3>Customer Service</h3>
                <p>Always we deliver more than expected</p>
                </div>
            </div>
        </div>   
        <div className="card">
                <div className="imgBox" data-text='Achievements'>
                     <h3><i class="fas fa-trophy"></i></h3>
                </div>
            <div className="content">
                <div>
                <h3>Achievements</h3>
                <p>True excellence is a product of synergy.</p>
                </div>
            </div>
        </div>     
    </div>
</div>
)
}

export default Qualities
