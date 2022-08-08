import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const logout = () => {
        history.push('/');
    }


    return (
        <Navbar collapseOnSelect bg="secondary" variant="dark" expand="md">
            <Navbar.Brand>
                <h1 style={{"color":"White", "fontWeight":"bold","fontStyle":"italic","marginLeft":"20px"}}>Leap Metrics</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" ms-auto me-4 " >
                    {/* <Link to="/dashboard">Dashboard</Link>
                    <Link to="/tickets">Tickets</Link>
                    <Link to="#">Logout</Link> */}



                    {/* <LinkContainer to="/dashboard" >
                        <Nav.Link  variant="primary" >Dashboard</Nav.Link> </LinkContainer>
                    <LinkContainer to="/tickets">    
                        <Nav.Link>Tickets</Nav.Link></LinkContainer>
                    <Nav.Link href="/">Logout</Nav.Link> */}
                    
                    
                        <Nav.Link as={Link} to="/dashboard" variant="primary" >Dashboard</Nav.Link> 
                        
                        <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>

                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header