import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import image from "../download.jpg";

class ProjectItem extends Component {

    render() {
        const { projectName, projectURL } = this.props;
        return (
            <Link to={`/projects/${projectName}`}>
            <Card style={{width: '18rem'}}
                  as = {Button} active
                  variant={"light"}
            >
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{projectName}</Card.Title>
                    <Card.Text>
                        test some texts
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        );
    }
}

export default ProjectItem;