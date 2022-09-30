import React from "react";
import './Logo.css';
import Logo1 from './images/logo1.jpg';
import Logo2 from './images/logo2.jpg';



function Logo(){
    return (
      <>
        <div className="Img">
          <img src={Logo1} alt='' className="Logo1"/> 
          <img src={Logo2} alt='' className="Logo2"/>
        </div>
      </>
    );
  }  
    
  export default Logo;