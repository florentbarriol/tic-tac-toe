import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';

class RetryButton extends Component {

    retry(e) {
        this.props.dispatch(resetGame());
    }

    render() {
        const { text } = this.props;
        return (
            <button onClick={this.retry.bind(this)}>{text}</button>
        );
    }
}

export default connect()(RetryButton);
