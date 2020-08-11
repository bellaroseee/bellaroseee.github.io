import React, { Component } from 'react';
import {Helmet} from "react-helmet";
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
            <Container className="mt-4 text-center align-items-center">
                <Helmet>
                    <meta name="google-site-verification" content="U0IdEyZqNrBmlyh2kLqeTtkQ8gDHFub7Fe7YpYBwNfM" />
                    <meta name="description"
                          content="Bella Rose's Portfolio Website"/>
                    <link
                        rel="canonical"
                        href="https://bellaroseee.github.io/home"
                    />
                </Helmet>
                    <h1>Welcome!</h1>
                    <Button variant="outline-primary"
                            href={"https://raw.githubusercontent.com/bellaroseee/bellaroseee.github.io/master/Resume_Bella_Rose.pdf"}>Resume</Button>
            </Container>
        )
    }
}

export default Home;