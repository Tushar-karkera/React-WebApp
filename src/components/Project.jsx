import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import ColorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css'

const projects = [
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
    },
];

const Project = () => {
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__pulse animate__slow" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quos.</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem ipsum </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img src={ColorSharp2} className='background-image-right' alt="" />
        </section>
    )
}

export default Project;