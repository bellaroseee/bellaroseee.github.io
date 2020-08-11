import React, {Component} from 'react';
import '../css/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavbarBootstrap from "react-bootstrap/Navbar";

class Navbar extends Component {

    render() {
        return (
            <NavbarBootstrap bg="light" expand="lg">
                <Container>
                    <NavbarBootstrap.Brand href="/">Bella Rose</NavbarBootstrap.Brand>
                    <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarBootstrap.Collapse id="basic-navbar-nav">
                    <Nav
                         className="ml-auto"

                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </Nav>
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap>
        );
    }
}

export default Navbar;