import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectItem from "./ProjectItem";

class Projects extends Component {
    state = {
        projectList: JSON,
        projectName: ''
    };

    componentDidMount() {
        const markdownPath = require("../text/ProjectList.json");

        fetch(markdownPath)
            .then(text => {this.setState({projectList: markdownPath.projectList})})
            .catch(error => console.log(error));
    };

    showProjectList() {
        const { projectList } = this.state;
        let length = projectList.length;
        let items = [];
        for(let i = 0; i < length; i++) {
            items.push(<ProjectItem projectName={projectList[i]["project-name"]}
            />);
        }
        return(
                <CardDeck>
                    {items}
                </CardDeck>
            );
    };


    render() {
        return (
            <Container className={"mt-4"}>
                {this.showProjectList()}
            </Container>
        )
    }
}

export default Projects;