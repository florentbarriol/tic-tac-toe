import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h1>Tic Tac Toe</h1>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

Header.Proptypes = {

}

export default Header;
