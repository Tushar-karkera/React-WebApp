import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/Access.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
    const [active, setActive] = useState('home');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" className={scroll ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={active === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => { setActive('home') }}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={active === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => { setActive('skills') }}>Expertise</Nav.Link>
                        <Nav.Link href="#project" className={active === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => { setActive('projects') }}>Study Materials</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/Tushar-karkera/React-WebApp"><img src={navIcon2} alt="" /></a>
                            <a href="http://www.instagram.com/access__nmamit/"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className='vvd' onClick={console.log('connect')} >
                            <a href="mailto:email@example.com" className='text-white'>
                                <span>
                                    lets connect
                                </span>
                            </a>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar;