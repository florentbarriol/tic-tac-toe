import { ADD_TIC, RESET_GAME, CONTINUE_GAME, ADD_PLAYER } from './actionTypes';
import _ from 'lodash';
import * as utils from './utils';
import { Player } from './Player';

const MATRIX_SIZE = 9;

const initialState = {
    idCurrentPlayer: 1,
    players: {
        /*1: new Player(1, 'Michel', '🔵'),
        2: new Player(2, 'Jean-Jacques', '❌')*/
    },
    matrix: utils.initMatrix(MATRIX_SIZE),
    matrixSize: MATRIX_SIZE,
    winner: {}
}

export default function reducer(state = _.cloneDeep(initialState), action) {
    switch (action.type) {
        case ADD_TIC:
            const newMatrix = _.merge(
                {},
                state.matrix,
                { [action.id]: state.idCurrentPlayer }
            );
            const winner = findAWinner(newMatrix);
            // on ajoute un point au joueur gagnant
            if (winner > 0) {
                state.players[winner].winATurn();
            }
            return _.merge({}, state, {
                matrix: newMatrix,
                idCurrentPlayer: nextPlayerId(state),
                winner: winner
            });
        case RESET_GAME:
            return _.cloneDeep(initialState);
        case CONTINUE_GAME:
            const newState = _.merge({}, state, {
                winner: -1
            });
            return _.set(newState, 'matrix', utils.initMatrix(MATRIX_SIZE));
        case ADD_PLAYER:
            const newId = _.isEmpty(_.values(state.players)) ? 1 : _.values(state.players).length + 1;
            return _.merge({}, state, {
                players: { [newId]: new Player(newId, action.player.name,action.player.piece) }
            })
        default:
            return state;
    }
}

function nextPlayerId({ idCurrentPlayer, players }) {
    const playersArray = _.values(players);
    const nextIndex = _.findIndex(playersArray, o => o.id === idCurrentPlayer) + 1;
    return _.nth(playersArray, nextIndex < playersArray.length ? nextIndex : 0).id;
}

function findAWinner(matrix) {
    const nbLines = Math.sqrt(MATRIX_SIZE);
    let winner = {};
    for (let x = 0; x < nbLines; x++) {
        winner = winningLine(matrix, x);
        if (winner > 0) {
            break;
        } else {
            for (let y = 0; y < nbLines; y++) {
                winner = winningColumn(matrix, y);
                if (winner > 0) {
                    break;
                }
            }
        }
    }
    return winner > 0 ? winner : winingDiagonal(matrix);
}

function winningLine(matrix, x) {
    if (matrix[`${x},0`] && matrix[`${x},1`] && matrix[`${x},2`]
        && matrix[`${x},0`] === matrix[`${x},1`]
        && matrix[`${x},0`] === matrix[`${x},2`]) {
        return matrix[`${x},0`];
    } else {
        return -1;
    }
}

function winningColumn(matrix, y) {
    if (matrix[`0,${y}`] > 0 && matrix[`1,${y}`] > 0
        && matrix[`2,${y}`] > 0
        && matrix[`0,${y}`] === matrix[`1,${y}`]
        && matrix[`0,${y}`] === matrix[`2,${y}`]) {
        return matrix[`0,${y}`];
    } else {
        return -1;
    }
}

function winingDiagonal(matrix) {
    if (matrix['0,0'] > 0 && matrix['1,1'] > 0
        && matrix['2,2'] > 0
        && matrix['0,0'] === matrix['1,1']
        && matrix['0,0'] === matrix['2,2']) {
        return matrix['0,0'];
    } else if (matrix['0,2'] > 0 && matrix['1,1'] > 0
        && matrix['2,0'] > 0
        && matrix['0,2'] === matrix['1,1']
        && matrix['0,2'] === matrix['2,0']) {
        return matrix['0,2'];
    } else {
        return -1;
    }
}
