import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutItem from "./AboutItem";

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
                <Row className={"m-2"}>
                    <Col >
                        {intro}
                    </Col>
                    <Col>
                        test
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