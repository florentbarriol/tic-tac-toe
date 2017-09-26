import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';
import { Button, Glyphicon } from 'react-bootstrap';

class RetryButton extends Component {

    retry(e) {
        this.props.dispatch(resetGame());
    }

    render() {
        return (
            <Button
                bsStyle="warning"
                onClick={this.retry.bind(this)}
            >
            <Glyphicon glyph="repeat"/> Reset game
            </Button>
        );
    }
}

export default connect()(RetryButton);
