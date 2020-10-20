import React, { useState} from 'react';
import './Colors.css';
import sample from './images/roofsample.jpg'
import sample1 from './images/roofsample1.jpg'
import sample2 from './images/roofsample2.jpg'
import sample3 from './images/roofsample3.jpg'
import sample4 from './images/roofsample4.jpg'
import sample5 from './images/roofsample5.jpg'
import sample6 from './images/roofsample6.jpg'
import sample7 from './images/roofsample7.jpg'
import sample8 from './images/roofsample8.jpg'
import sample9 from './images/roofsample9.jpg'
import sample10 from './images/roofsample10.jpg'
import sample11 from './images/roofsample11.jpg'
import sample12 from './images/roofsample1.jpg'
import sample13 from './images/roofsample3.jpg'
import sample14 from './images/roofsample4.jpg'
import sample15 from './images/roofsample5.jpg'
import sample16 from './images/roofsample6.jpg'
import sample17 from './images/roofsample7.jpg'
import sample18 from './images/roofsample8.jpg'
import sample19 from './images/roofsample9.jpg'
import sample20 from './images/roofsample10.jpg'


const Colors = () => {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ toggle, setToggle ] = useState(false);

    const data = [
        { id: 1,  img: sample },
        { id: 2,  img: sample1 },
        { id: 3,  img: sample2 },
        { id: 4,  img: sample3 },
        { id: 5,  img: sample4 },
        { id: 6,  img: sample5 },
        { id: 7,  img: sample6 },
        { id: 8,  img: sample7 },
        { id: 9,  img: sample8 },
        { id: 10, img: sample9 },
        { id: 11, img: sample10 },
        { id: 12, img: sample11 },
        { id: 13, img: sample12 },
        { id: 14, img: sample13 },
        { id: 15, img: sample14 },
        { id: 16, img: sample15 },
        { id: 17, img: sample16 },
        { id: 18, img: sample17 },
        { id: 19, img: sample18 },
        { id: 20, img: sample19 },
        { id: 21, img: sample20 }
        
    ];

    function handleToggle (val){
        setActiveIndex(val);
        setToggle(!toggle);
    }

    return (
        <div className="container__color">
            <h1 className="colorfortitle">VARIETY OF COLOR SHEETS</h1>
            <div className="roofContainer">
                {data.map(( type, index)=>(
                    <div key ={ index } onClick={ () => handleToggle(type.id)} className="roofContainer_list">
                        <img src={ type.img} />
                    </div>
                ))}
            </div>
            {toggle ?
                <div className="modalContainer" onClick={ () => handleToggle()} > 
                    <img  src={ (data.find(list => { if(list.id == activeIndex) return list.img }))['img'] }  />
                </div>
            : null}
        </div>
        
    )
}

export default Colors