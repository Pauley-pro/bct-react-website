import React from 'react';
import './Stack.css';
import Rectangle from '../images/rectangle.jpg';
import { Col, Container, Row } from 'react-grid-system';



function Butsev(){
    return (
        <div class="General">
            <p className="Stack">STACK</p>
            <p className="Tech">the technology<br/> stack we use</p>
            <img src={Rectangle} alt="Stack" className="Rectangle"/>
            <div className="Butdiv1">
                <Container>
                    <Row>
                        <Col xs={6} sm={4} lg={3}>
                            <button className='But6'>
                                FULL STACK JS
                            </button>
                        </Col>
                        <Col xs={6} sm={4} lg={3}>
                            <button className='But7'>
                                REACT NATIVE
                            </button>
                        </Col>
                        <Col xs={6} sm={4} lg={3}>
                            <button className='But8'>
                                SWIFT
                            </button>
                        </Col>
                        <Col xs={6} sm={4} lg={3}>
                            <button className='But9'>
                                RUBY ON RAILS
                            </button>
                        </Col>
                    </Row>
                </Container>        
            </div>
            <div className="Butdiv2">   
                <Container>
                    <Row> 
                        <Col xs={6} sm={4} lg={3}>
                            <button className='But10'>
                                PHP(LARAVEL)
                            </button>
                        </Col>
                        <Col xs={6} sm={4} lg={3}>
                            <button className='But11'>
                                OTHERS
                            </button>
                        </Col>
                        <Col xs={12} sm={4} lg={6}>
                            <button className='Transparent'>
                                LET'S SCHEDULE A MEETING
                            </button>
                        </Col>
                    </Row>    
                </Container>
            </div>
             
        </div>
    )
}




export default Butsev;




