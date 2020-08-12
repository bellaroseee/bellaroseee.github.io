import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import '../css/ProjectItem.css';

class ProjectItem extends Component {

    render() {
        const { projectName, projectDesc, projectImg } = this.props;
        return (
            <Link to={`/projects/${projectName}`}>
            <Card style={{width: '18rem'}}
                  as = {Button} active
                  variant={"light"}
                  className={"m-1"}
            >
                <Card.Img variant="top" src={projectImg}/>
                <Container className={"projectItem"}>
                    <Card.Body>
                        <Card.Title>{projectName}</Card.Title>
                        <Card.Text>
                            {projectDesc}
                        </Card.Text>
                    </Card.Body>
                </Container>
            </Card>
            </Link>
        );
    }
}

export default ProjectItem;