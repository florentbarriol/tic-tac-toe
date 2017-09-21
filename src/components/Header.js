import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="">Tic Tac Toe</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavItem eventKey={2} href="#">About</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

Header.Proptypes = {

}

export default Header;
