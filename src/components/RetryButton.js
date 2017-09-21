import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';
import { Button } from 'react-bootstrap';

class RetryButton extends Component {

    retry(e) {
        this.props.dispatch(resetGame());
    }

    render() {
        const { text } = this.props;
        return (
            <Button
                bsStyle="warning"
                onClick={this.retry.bind(this)}
            >
                {text}
            </Button>
        );
    }
}

export default connect()(RetryButton);
