import React, { Component } from 'react';
import Square from './Square';
import _ from 'lodash';
import { connect } from 'react-redux';
import { resetGame } from '../actions';
import DrawScreen from './DrawScreen';
import WinningScreen from './WinningScreen';

import * as utils from '../utils';

import '../css/components/Matrix.css';

class Matrix extends Component {

    retry(e) {
        this.props.dispatch(resetGame());
    }

    render() {
        const { matrix, players, winner } = this.props;
        const matrixSize = _.values(matrix).length;
        const nbTic = _.values(matrix).reduce((res, curr) => { return curr.id ? res + 1 : res }, 0);
        let retour;
        if (nbTic === matrixSize) {
            retour = <DrawScreen />;
        } else {
            retour =
                <section>
                    <div className="grid-container">
                        <div className="grid">
                            {_.keys(matrix).map((key, i) => {
                                const idPlayer = matrix[key] ? matrix[key] : -1;
                                const currentPlayer = players[idPlayer];
                                return <Square
                                    key={i}
                                    id={key}
                                    isChecked={idPlayer > 0}
                                    display={idPlayer > 0 ? currentPlayer.piece : ''}
                                    width={100 / utils.rowNumber(matrixSize)}
                                />
                            })}
                        </div>
                        <div
                            className={`overlay ${winner > 0 ? 'overlay-active' : ''}`}>
                            <WinningScreen winner={_.toPlainObject(players[winner])} />
                        </div>
                    </div>

                </section>;
        }
        return retour;
    }
}

function mapStateToProps(state) {
    return {
        matrix: state.matrix,
        idCurrentPlayer: state.idCurrentPlayer,
        winner: state.winner,
        players: state.players
    }
}

export default connect(mapStateToProps)(Matrix);
