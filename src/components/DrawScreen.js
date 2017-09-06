import React, { Component } from 'react';
import Proptypes from 'prop-types';
import RetryButton from './RetryButton';

class DrawScreen extends Component {

    render() {
        return (
            <div>
                <h2>Draw</h2>
                <p><RetryButton text="Retry"/></p>
            </div>
        );
    }
}

DrawScreen.Proptypes = {
    text: Proptypes.string.isRequired
}

export default DrawScreen;
