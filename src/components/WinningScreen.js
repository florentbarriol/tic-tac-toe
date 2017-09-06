import React, { Component } from 'react';
import RetryButton from './RetryButton';

class WinningScreen extends Component {

    render() {
        const { winner } = this.props;
        return (
            <div>
                <h2>Congratulations {winner.name}</h2>
                <p><RetryButton text="New game" /></p>
            </div>
        );
    }
}

export default WinningScreen;
