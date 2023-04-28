import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Web developer", "Network Geek", "Backend Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
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
            setDelta(500);
        }
    }


    return (

        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Welcone to my Portfolio</span>
                                    <h1>
                                        {`Hi I am TUSHAR `}
                                        <br />
                                        <span className='wrap'>
                                            {text}
                                        </span>
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laborum, cumque error porro dolorum ut possimus explicabo aut deleniti! Quo aliquam exercitationem vitae dolores praesentium.
                                    </p>
                                    <button onClick={() => console.log("connect")}>
                                        Let's connect
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Banner;