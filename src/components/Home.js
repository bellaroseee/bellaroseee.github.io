import React, { Component } from 'react';
import '../css/Home.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import ReactMarkdown from "react-markdown";

class Home extends Component {
    // state = {
    //     markdown: ''
    // };

    // componentDidMount() {
    //     const markdownPath = require("../text/Home.md");
    //
    //     fetch(markdownPath)
    //         .then(response=> {return response.text()})
    //         .then(text=> {this.setState({markdown: text})})
    // }

    render() {
        return (
            <Container className="mt-4 mx-auto text-center align-items-center">
                    <h1>Welcome!</h1>
                    <Button variant="outline-primary" href={"../../public/Resume_Bella_Rose.pdf"}>Resume</Button>
            </Container>
        )
    }
}

export default Home;