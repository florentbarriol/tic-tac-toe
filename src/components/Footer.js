import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends Component {

    render() {
        return (
            <Navbar componentClass="footer" className="footer" fixedBottom>
                <Navbar.Text>
                    &copy; 2017 - <a href="http://www.florentbarriol.com">florentbarriol.com</a>
                </Navbar.Text>
            </Navbar>
        );
    }
}

Footer.Proptypes = {

}

export default Footer;
