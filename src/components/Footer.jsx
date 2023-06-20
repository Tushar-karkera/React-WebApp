import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/Access.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import TrackVisibility from 'react-on-screen';


const Footer = () => {
    return (
        <footer className='footer'>
            <Container className='py-5'>
                <Row className='align-item-center text-center' >
                    <Col sm={6} className='p-2'>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInUp align-items-center " : ""}>
                                    <img src={logo} alt="Logo" />
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end p-2'>
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="" /></a>
                            <a href=""><img src={navIcon2} alt="" /></a>
                            <a href=""><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>
                            CopyRight 2023, All rights reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer;