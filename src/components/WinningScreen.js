import React, { Component } from 'react';
import RetryButton from './RetryButton';
import ContinueButton from './ContinueButton';

class WinningScreen extends Component {

    render() {
        const { winner } = this.props;
        return (
            <div>
                <h2>Congratulations {winner.name}</h2>
                <p><ContinueButton text="Continue"/></p>
                <p><RetryButton text="New game" /></p>
            </div>
        );
    }
}

export default WinningScreen;
