import React, { useState,useEffect } from 'react'
import './counter.css'



const easeOutQuad = t => t * ( 2 - t );
const frameDuration = 1000 / 60;

const CountUpAnimation = ( { children, duration = 2000 } ) => {
	const countTo = parseInt( children, 10 );
	const [ count, setCount ] = useState( 0 );

	useEffect( () => {
		let frame = 0;
		const totalFrames = Math.round( duration / frameDuration );
		const counter = setInterval( () => {
			frame++;
			const progress = easeOutQuad( frame / totalFrames );
			setCount( countTo * progress );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [] );

	return Math.floor( count );
};





export default function CounterSite(count) {
    return (
        <div className="counter-section">
            
            <div className="counter-row">
             <div className="counter-col">
                 <div className="icon-box">
                 <i class="fas fa-rocket"></i>
                 </div>
                 <p className="counter"><CountUpAnimation duration={4000}>3000</CountUpAnimation></p>
             <p>Projects Completed</p>
             </div>
             <div className="counter-col">
                 <div className="icon-box">
                 <i class="fas fa-user-tie"></i>
                 </div>
                 <p className="counter"><CountUpAnimation duration={4000}>500</CountUpAnimation></p>
             <p>Clients</p>
             </div>
             <div className="counter-col">
                 <div className="icon-box">
                 <i class="fas fa-calendar-day"></i>
                 </div>
                 <p className="counter"><CountUpAnimation duration={4000}>3</CountUpAnimation></p>
             <p>Successfull Years</p>
             </div>
            </div>         
        </div>
    )
}
