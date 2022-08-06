import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
                <h1 style={{"color":"blue", "fontWeight":"bold","fontStyle":"italic"}}>LeadMetrics</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard" style={{color:"white"}} >Dashboard</Nav.Link>
                    <Nav.Link href="#link">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header