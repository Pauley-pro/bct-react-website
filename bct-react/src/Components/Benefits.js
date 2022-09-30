import React from 'react';
import './Benefits.css';
import Image1 from '../images/primarybid.JPG';
import Image2 from '../images/smarg.JPG';
import Img1 from '../images/img1.jpg';
import Img2 from '../images/img2.jpg';
import Img3 from '../images/img3.jpg';
import line from '../images/line.jpg';





function Benefits(){
    return (
      <div className="Benediv">
        <h2 className="H2-style">
          TRUSTED BY SCALING ENGINEERING BEST ENGINEERING
        </h2>

        <div className="Ben-img">
          <img src={Image1} alt='' className='Img1'/>
          <img src={Image2} alt='' className='Img1'/>
          <img src={Image1} alt='' className='Img1' id="Img1"/>
          <img src={Image2} alt='' className='Img1' id="Img1"/>
        </div>
        
        <div className="Ben-div">
          <img src={Img1} alt='' className='Images1'/>
          <span className="Ben-style">
            <h6>BENEFITS</h6>
            <h1>best engineeering<br/> practices and<br/>processes,</h1>
          </span>
        </div>
        <div className="Clear"></div>

        <div className="Img-div">
          <img src={Img2} alt='' className='Images2'/>
          <span className="Ben-style">
            <h6>BENEFITS</h6>
            <h1>build perfomant<br/> and scalable<br/> products,</h1>
          </span>
        </div>
        <div className="Clear"></div>

        <div className="Ben-div" id="Ben-div">
          <img src={Img3} alt='' className='Images3'/>
          <span className="Ben-style">
            <h6>BENEFITS</h6>
            <h1>efficiency and<br/> productivity,</h1>
          </span>
        </div>
        <div className="clear"></div>
        
        <img src={line} alt='' className='Line'/>
      </div> 
        
      );
    }  
    
  export default Benefits;
  