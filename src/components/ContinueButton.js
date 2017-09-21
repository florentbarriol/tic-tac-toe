import React, { Component } from 'react';
import { connect } from 'react-redux';
import { continueGame } from '../actions';
import { Button } from 'react-bootstrap';

class ContinueButton extends Component {

    continue(e) {
        this.props.dispatch(continueGame());
    }

    render() {
        const { text } = this.props;
        return (
            <Button
                bsStyle="success"
                onClick={this.continue.bind(this)}
            >
                {text}
            </Button>
        );
    }
}

export default connect()(ContinueButton);
