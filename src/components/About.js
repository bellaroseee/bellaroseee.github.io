import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AboutItem from "./AboutItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
    state = {
        intro: '',
        education: '' ,
        work: '',
        technical: ''
    };

    componentDidMount() {
        const introPath = require ('../text/About/Intro.md');
        const edPath = require('../text/About/Education.md');
        const workPath = require('../text/About/WorkLeadership.md');
        const techPath = require('../text/About/TechSkills.md');

        fetch(introPath)
            .then(response=> {return response.text()})
            .then(text=> {this.setState({intro: text})});

        fetch(edPath)
            .then(response=> {return response.text()})
            .then(text=> {this.setState({education: text})});

        fetch(workPath)
            .then(response=> {return response.text()})
            .then(text=> {this.setState({work: text})});

        fetch(techPath)
            .then(response=> {return response.text()})
            .then(text=> {this.setState({technical: text})});
    }

    render() {
        const { intro, education, work, technical } = this.state;
        return (
            <Container fluid="md" className={"mt-4"}>
                <Helmet>
                    <meta name="description"
                          content="about"/>
                    <link
                        rel="canonical"
                        href="https://bellaroseee.github.io/about"
                    />
                </Helmet>
                <Row className={"m-2"}>
                    <Col className={"col-8"}>
                        {intro}
                    </Col>
                    <Col>
                        <Button href={"https://github.com/bellaroseee"} 
                                size={"lg"}
                                className={"m-1"}
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                        </Button>
                        <Button href={"https://www.linkedin.com/in/brose714/"} 
                                size={"lg"}
                                className={"m-1"}
                        >
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </Button>
                        <Button href={"mailto:brose.workspace@gmail.com"}
                                size={"lg"}
                                className={"m-1"}
                        >
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </Button>
                    </Col>
                </Row>
                    <Accordion>
                        <AboutItem sectionTitle={"Education"} content={education} eventKey={"0"}/>
                        <AboutItem sectionTitle={"Leadership & Work Experience"} content={work} eventKey={"1"}/>
                        <AboutItem sectionTitle={"Technical Skills"} content={technical} eventKey={"2"}/>
                    </Accordion>
            </Container>
        )
    }
}

export default About;