import React from 'react';
import './Service.css';
import Rectangle from '../images/rectangle.jpg';




function Service(){
    return (
        <div className="Div-ser">
            <p className="Service">SERVICES</p>
            <p className="Company">what we do for<br/>companies</p>
            <img src={Rectangle} alt="" className="Rectangle"/>

        </div>
    )
}




export default Service;