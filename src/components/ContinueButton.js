import React, { Component } from 'react';
import { connect } from 'react-redux';
import { continueGame } from '../actions';
import { Button, Glyphicon } from 'react-bootstrap';

class ContinueButton extends Component {

    continue(e) {
        this.props.dispatch(continueGame());
    }

    render() {
        return (
            <Button
                bsStyle="success"
                onClick={this.continue.bind(this)}
            >
                <Glyphicon glyph="play" /> Continue
            </Button>
        );
    }
}

export default connect()(ContinueButton);
