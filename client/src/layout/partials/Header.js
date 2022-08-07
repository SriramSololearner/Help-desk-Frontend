import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
                <h1 style={{"color":"White", "fontWeight":"bold","fontStyle":"italic","marginLeft":"20px"}}>Leap Metrics</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/dashboard"  variant="primary" >Dashboard</Nav.Link>
                    <Nav.Link href="#link">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header