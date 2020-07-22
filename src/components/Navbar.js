import React, {Component} from 'react';
import '../css/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from "react-bootstrap/Navbar";

class Navbar extends Component {

    render() {
        return (
            <NavbarBootstrap bg="light" expand="lg">
                <NavbarBootstrap.Brand href="/">Bella Rose</NavbarBootstrap.Brand>
                <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBootstrap.Collapse id="basic-navbar-nav">
                <Nav
                     className="ml-auto"
                     defaultActiveKey="/home"
                >
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                </Nav>
                </NavbarBootstrap.Collapse>
            </NavbarBootstrap>
        );
    }
}

export default Navbar;