import React, { Component } from 'react';
import Square from './Square';
import _ from 'lodash';
import { connect } from 'react-redux';
import { resetGame } from '../actions';
import DrawScreen from './DrawScreen';
import WinningScreen from './WinningScreen';

import styles from '../css/components/Matrix.css';

class Matrix extends Component {

    retry(e) {
        this.props.dispatch(resetGame());
    }

    render() {
        const { matrix, matrixSize, winner, currentPlayer } = this.props;
        const nbTic = _.values(matrix).reduce((res, curr) => { return curr.id ? res + 1 : res }, 0);
        let retour;
        if (nbTic === matrixSize) {
            retour = <DrawScreen />;
        } else {
            retour =
                <section>
                    <h2>It's your turn {currentPlayer.name} {currentPlayer.piece}</h2>
                    <div className={styles.GridContainer}>
                        <div className="grid-3">
                            {_.keys(matrix).map((key, i) => {
                                const el = matrix[key];
                                return <Square
                                    key={i}
                                    id={key}
                                    isChecked={!_.isEmpty(el)}
                                    display={el && el.piece ? el.piece : ''}
                                />
                            })}
                        </div>
                        <div
                            className={`${styles.Overlay} ${!_.isEmpty(winner) ? styles.OverlayActive : ''}`}>
                            <WinningScreen winner={winner} />
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
        matrixSize: state.matrixSize,
        currentPlayer: state.currentPlayer,
        winner: state.winner
    }
}

export default connect(mapStateToProps)(Matrix);
