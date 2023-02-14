import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'
import { Link } from 'react-router-dom'
import React from "react";

function Menu() {
    return (
        <Navbar variant="dark" collapseOnSelect expand="lg" className='menu' >
            <Container className='py-1'>
                <Link className="navbar-brand" to="/">LGA dashboard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav className="justify-content-end">
                        <Link className="nav-link" to="/maptools" >Map Tools</Link>
                        <Link className="nav-link" to="/" >About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Menu;