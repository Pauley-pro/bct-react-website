import React from 'react';
import './Hero.css';
import Icon1 from '../images/Group 30(1).jpg';
import Icon2 from '../images/Group 37.jpg';
import Icon3 from '../images/Group 27.jpg';
import Icon4 from '../images/Group 28.jpg';
import Icon5 from '../images/Group 41.jpg';
import Icon6 from '../images/Group 44.jpg';
import Icon7 from '../images/Group 42.jpg';
import Icon8 from '../images/Group 43.jpg';
import { Container, Row, Col } from 'react-grid-system';



function Hero(){
    return(
        <div className="Center">
            <Container>
                <Row>
                    <Col lg={2}>
                        <img src={Icon1} alt='' className="Icon1"/>
                    </Col>

                    <Col lg={7}>
                        <div  className="Dive">
                            <div className="Div">
                                <img src={Icon1} alt="" className="Icon-none"/>
                                <img src={Icon2} alt="" className="Icon-none"/>
                                <img src={Icon3} alt="" className="Icons3"/>
                                <img src={Icon4} alt="" className="Icons4"/>
                                <img src={Icon5} alt="" className="Icons5"/>
                                <img src={Icon6} alt="" className="Icons6"/>
                                <img src={Icon7} alt="" className="Icons7"/>
                                <img src={Icon8} alt="" className="Icons8"/>
                            </div>
                            <div className="sect">
                                <p className="Para">We help companies<br/>implement their<br/>engineering operations,</p>
                                <p className="Pa2">From small coding tasks to full<br/>product outsourcing</p>
                            </div> 
                            <div className="Span-class">
                                <Row>
                                    <Col xs={12} sm={6} lg={6}>
                                        <button className='Schedule'>
                                            Schedule a meeting
                                        </button>
                                    </Col>
                                    
                                    <Col xs={12} sm={6} lg={6}>
                                        <p className='Justify'>Build performant and scalable<br/>products while optimizing costs</p>
                                    </Col>
                                </Row>
                            </div>    
                        </div> 
                    </Col>

                    <Col lg={3}>
                        <img src={Icon2} alt="" className="Icon2"/>
                    </Col>
                </Row>
            </Container>                                 
        </div>  
    )
}


export default Hero