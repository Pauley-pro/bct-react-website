import React from 'react';
import './Footer.css';
import Logo from '../Logo.js';
import Twitter from '../images/Twitter.jpg';
import Instagram from '../images/Instagram.jpg';
import Facebook from '../images/Facebook.jpg';
import Linkedin from '../images/Linkedin.jpg';
import { Col, Container, Row } from 'react-grid-system';






function Footer(){
    return (
        <div className="Foote">
            <Container>
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="footerLogo">
                            <Logo />
                        </div>
                        
                    </Col>
                    <Col xs={12} sm={6} lg={3} >
                        <h5>SERVICES</h5>
                        <div className="Div1">
                            <ul>
                                <li className="div1">Code Review & QA</li>
                                <li className="div2">Automated Systems Engineering</li>
                                <li className="div3">Talent Outsourcing</li>
                                <li className="div4">Feature & Full Product Development</li>
                                <li className="div5">Data Analytics Pipeline</li>
                                <li className="div6">ML Pipeline</li>
                            </ul>
                        </div>    
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <h5>STACK</h5>
                        <div className="Div1">
                            <ul>
                                <li className="div7">Full Stack JS</li>
                                <li className="div8">React Native</li>
                                <li className="div9">Ruby on Nails</li>
                                <li className="div10">Swift</li>
                                <li className="div11">PHP(Laravel)</li>
                                <li className="div12">Others</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <h5>RESOURCES</h5>
                        <div className="Div1">
                            <ul>
                                <li className="div13">Blog</li>
                            </ul>
                        </div>
                        <h5>COMPANY</h5>
                        <div className="Div1">
                            <ul>
                                <li className="div14">About us</li>
                                <li className="div15">Careers</li>
                                <li className="div16">Legal</li>
                                <li className="div17">Contact us</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            
              
            <div className="Copyright">
                <div className="Soc-media">
                    <img src={Twitter} alt="" className="Twitter"/>
                    <img src={Instagram} alt="" className="Instagram"/>
                    <img src={Facebook} alt="" className="Facebook"/>
                    <img src={Linkedin} alt="" className="Linkedin"/>
                </div>
                <p className="Right">&copy; Copyright by BuildCodeTogether</p>
            </div>
        </div>
    )
}




export default Footer;