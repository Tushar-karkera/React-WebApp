import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import heading from "../assets/img/heading.svg"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Telecom Networks", "Cyber security", "Wireless Technology"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 200);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker);
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.5);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    }


    return (

        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Welcome to CCE</span>
                                    <h1>
                                        {`We focus on`}
                                        <br />
                                        <div className='wrap custom-heading'>
                                            {text}
                                        </div>
                                    </h1>
                                    <p>
                                        
                                    </p>
                                    <button onClick={() => console.log("connect")}>
                                        <a href="https://github.com/Tushar-karkera" style={{textDecoration:"none",color:"white"}}>
                                            Lets Ascend
                                            <ArrowRightCircle size={25} />
                                        </a>
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={heading} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Banner;