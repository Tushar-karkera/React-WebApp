import React from 'react';
import { useState ,useEffect } from 'react';
import { Navbar, Container ,Nav,NavDropdown} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
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
                        <Nav.Link href="#home" className={active == 'home' ? "active navbar-link" : "navbar-link"} onClick={() => { setActive('home') }}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={active == 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => { setActive('skills') }}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={active == 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => { setActive('projects') }}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className='vvd' onClick={console.log('connect')}>
                            <span>
                                lets connect
                            </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar;