import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import _ from 'lodash';

class Infos extends Component {

    render() {
        const { currentPlayer, players } = this.props;
        return (
            <div>
                <div>
                    Current player: {currentPlayer.name} {currentPlayer.piece}
                </div>
                <div>
                    <h3>Score :</h3>
                    {players && _.values(players).map((player) => {
                        return <p key={player.id}>{player.name} : {player.score} points</p>;
                    })}
                </div>
                <ButtonToolbar>
                    <Button bsStyle="warning">Play a new game</Button>
                    <Button bsStyle="danger">Stop the game</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Infos;
