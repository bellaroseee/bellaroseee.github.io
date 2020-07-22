import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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

    render() {
        const { projectName, projectURL } = this.props;
        const { projectContent } = this.state;
        return (
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
                    <Breadcrumb.Item active>{projectName}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col className="col-10">
                        <ReactMarkdown source={projectContent}/>
                    </Col>
                    <Col>
                        <Button href={projectURL}>
                            <FontAwesomeIcon icon={faGithub} fixedWidth/>
                            Github
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProjectDisplay;