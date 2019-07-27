import React from 'react';
import logo from '../assets/cubal-logo.png';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom'; //To set path and route to compent
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from 'react-bootstrap';


// class NavBar extends React.Component {
//     render() {
//         return (
//             <header>
//                 <Navbar bg="light" variant="light">
//                     <div id="header-logo-wrapper">
//                         <Navbar.Brand href="#home">
//                             <a href="/">
//                                 <img
//                                     src={logo}
//                                     width="30"
//                                     height="30"
//                                     className="d-inline-block align-top"
//                                     alt="React Bootstrap logo"
//                                 />
//                             </a>
//                         </Navbar.Brand>
//                     </div>
//                     <section id="header-right-wrapper">
//                         <Nav className="mr-auto">
//                             <Link to='/' >
//                                 <Nav.Link href="#home">Home</Nav.Link>
//                             </Link>
//                             <Link to='/events'>
//                                 <Nav.Link href="#events">Events</Nav.Link>
//                             </Link>
//                             <Link to='/organizations'>
//                                 <Nav.Link href="#organizations">Organizations</Nav.Link>
//                             </Link>
//                             {/* <div class="buttons-wrapper">
//                                 <button id="log-in-button">Log in</button>
//                                 <button id="sign-up-button">Sign Up</button>
//                             </div> */}
//                         </Nav>
//                     </section>
//                 </Navbar>
//             </header>
//         );
//     }
// }

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
                                    <Dropdown.Item href="#/action-3">Orgnaizations</Dropdown.Item>
                                </Link>
                                <Link to='/organizations'>
                                    <Dropdown.Item href="#/action-3">My CUBAL</Dropdown.Item>
                                </Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
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
                </Navbar>
            </header>
        )
    }
}

export default NavBarOnPhone;