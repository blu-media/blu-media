import React from 'react';
import logo from '../assets/cubal-logo.png'
import '../styles/NavBar.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


class NavBar extends React.Component {
    render() {
        return (
            <header>
                <Navbar bg="light" variant="light">
                    <div id="header-logo-wrapper">
                        <Navbar.Brand href="#home">
                            <a href="/">
                                <img
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </a>
                        </Navbar.Brand>
                    </div>
                    <section id="header-right-wrapper">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#events">Events</Nav.Link>
                            <Nav.Link href="#organizations">Organizations</Nav.Link>
                            {/* <div class="buttons-wrapper">
                                <button id="log-in-button">Log in</button>
                                <button id="sign-up-button">Sign Up</button>
                            </div> */}
                        </Nav>
                    </section>
                </Navbar>
            </header>
        );
    }
}


export default NavBar;