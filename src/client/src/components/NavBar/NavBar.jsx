import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'; //To set path and route to compent
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from 'react-bootstrap';

class NavBarOnPhone extends React.Component {
    render() {
        return (
            <header>
                <Navbar bg="light" variant="light">
                    <div id="header-menu-wrapper">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                MENU
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to='/'>
                                    <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
                                </Link>
                                <Link to='/events'>
                                    <Dropdown.Item href="#/action-2">Events</Dropdown.Item>
                                </Link>
                                <Link to='/organizations'>
                                    <Dropdown.Item href="#/action-3">Organizations</Dropdown.Item>
                                </Link>
                                <Link to='/organizations'>
                                    <Dropdown.Item href="#/action-3">My CUBAL</Dropdown.Item>
                                </Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar>
            </header>
        )
    }
}

export default NavBarOnPhone;
