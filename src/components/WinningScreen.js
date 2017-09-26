import React, { Component } from 'react';
import RetryButton from './RetryButton';
import ContinueButton from './ContinueButton';
import { Modal, ButtonToolbar } from 'react-bootstrap';

class WinningScreen extends Component {

    render() {
        const { winner, show } = this.props;
        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Congratulations {winner.name} !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>What action would you like to do ? </h3>
                    <ButtonToolbar>
                        <ContinueButton />
                        <RetryButton />
                    </ButtonToolbar>
                </Modal.Body>
            </Modal>
        );
    }
}

export default WinningScreen;
