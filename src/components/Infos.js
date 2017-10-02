import React, { Component } from 'react';
import { Badge, ButtonToolbar, ListGroup, ListGroupItem } from 'react-bootstrap';
import RetryButton from './RetryButton';
import _ from 'lodash';

class Infos extends Component {

    render() {
        const { players, idCurrentPlayer } = this.props;
        const currentPlayer = players[idCurrentPlayer];
        return (
            <ListGroup>
                <ListGroupItem header="Current player">
                    {currentPlayer.name} {currentPlayer.piece}
                </ListGroupItem>
                <ListGroupItem header="Score">
                    {players && _.values(players).map((player) => {
                        return <span key={player.id}>{player.name} <Badge>{player.score} point{player.score > 1 && 's'}</Badge></span>;
                    })}
                </ListGroupItem>
                            <ListGroupItem header="Actions">
                                <ButtonToolbar>
                                    <RetryButton />
                                </ButtonToolbar>
                            </ListGroupItem>
            </ListGroup>
        );
    }
}

export default Infos;
