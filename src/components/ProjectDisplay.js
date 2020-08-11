import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../css/ProjectDisplay.css';
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

class ProjectDisplay extends Component {
    state = {
        projectContent: ''
    };

    componentDidMount() {
        const {projectContent} = this.props;

        fetch(projectContent)
            .then(response=> {return response.text()})
            .then(text=> {this.setState({projectContent: text})});
    }

    displayProjectLink () {
        const {projectLink} = this.props;
        if (projectLink !== "") {
            return (
                <Button href={projectLink}
                        className={'m-1'}
                        size={"sm"}
                >
                    <FontAwesomeIcon icon={faExternalLinkAlt}
                                     fixedWidth
                                     className={"mr-1"}
                    />
                    Demo
                </Button>
            )
        }
    }

    render() {
        const { projectName, projectURL, projectLink } = this.props;
        const { projectContent } = this.state;
        return (
            <Container className="mt-4 projectDisplay">
                <Helmet>
                    <meta name="description"
                          content={projectName}/>
                    <link
                        rel="canonical"
                        href={`https://bellaroseee.github.io/projects/${projectName}`}
                    />
                </Helmet>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
                    <Breadcrumb.Item active>{projectName}</Breadcrumb.Item>
                </Breadcrumb>
                <Container>
                <Row>
                    <Col className="col-9">
                        <ReactMarkdown source={projectContent}/>
                    </Col>
                    <Col>
                        <Button href={projectURL}
                                className={'m-1'}
                                size={"sm"}
                        >
                            <FontAwesomeIcon icon={faGithub} 
                                             fixedWidth
                                             className={"mr-1"}
                            />
                            Github
                        </Button>
                        {this.displayProjectLink()}
                    </Col>
                </Row>
                </Container>
            </Container>
        );
    }
}

export default ProjectDisplay;