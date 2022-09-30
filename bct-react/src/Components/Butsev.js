import React from 'react';
import './Butsev.css';
import Vector from '../images/Vector.png';
import { Container, Row, Col } from 'react-grid-system';


function Butsev(){
    return (
        <div className="But-cen">
            <Container>
                <Row>
                    <Col xs={12} sm={6} lg={4}>
                        <button className='But1'>
                            <img src={Vector} alt="" className="Img-res"/>
                            CODE REVIEW AND QA
                        </button>
                    </Col>
                    <Col xs={12} sm={6} lg={6}>
                        <button className='But2'>
                            <img src={Vector} alt="" className="Img-res"/>
                            AUTOMATED SYSTEMS ENGINEERING
                        </button>
                    </Col>
                    <Col xs={12} sm={6} lg={6}>
                        <button className='But3'>
                            <img src={Vector} alt="" className="Img-res"/>
                            DATA ANALYTICS AND HL PIPELINES
                        </button>
                    </Col>
                    <Col xs={12} sm={6} lg={6}>
                        <button className='But4'>
                            <img src={Vector} alt="" className="Img-res"/>
                            TALENT OUTSOURCING
                        </button>
                    </Col>
                    <Col lg={12}>
                        <button className='But5'>
                            <img src={Vector} alt="" className="Img-res"/>
                            FEATURE AND FULL PRODUCT DEVELOPMENT
                        </button>
                    </Col>                
                </Row>          
            </Container>
        </div>
    )
}




export default Butsev;




