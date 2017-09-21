import { ADD_TIC, RESET_GAME, CONTINUE_GAME } from './actionTypes';
import _ from 'lodash';
import * as utils from './utils';
import { Player } from './Player';

const MATRIX_SIZE = 9;

const initialState = {
    currentPlayer: new Player(1, 'Michel', '🔵'),
    players: {
        1: new Player(1, 'Michel', '🔵'),
        2: new Player(2, 'Jean-Jacques', '❌')
    },
    matrix: utils.initMatrix(MATRIX_SIZE),
    matrixSize: MATRIX_SIZE,
    winner: {}
}

export default function reducer(state = _.clone(initialState), action) {
    switch (action.type) {
        case ADD_TIC:
            const newMatrix = _.merge(
                {},
                state.matrix,
                { [action.id]: state.players[state.currentPlayer.id] }
            );
            const winner = findAWinner(newMatrix);
            let playerWinner = {};
            // on ajoute un point au joueur gagnant
            if (!_.isEmpty(winner)) {
                winner.winATurn();
            }
            return _.merge({}, state, {
                matrix: newMatrix,
                currentPlayer: state.currentPlayer.id === 1 ? state.players[2] : state.players[1],
                winner: winner,
                players: _.merge({}, state.players, playerWinner)
            });
        case RESET_GAME:
            return _.clone(initialState);
        case CONTINUE_GAME:
            let newState = _.merge({}, state, {
                currentPlayer: state.players[1],
                winner: {}
            });
            newState = _.set(newState, 'matrix', utils.initMatrix(MATRIX_SIZE));
            newState = _.set(newState, 'winner', {});
            return newState;
        default:
            return state;
    }
}

function findAWinner(matrix) {
    const nbLines = Math.sqrt(MATRIX_SIZE);
    let winner = {};
    for (let x = 0; x < nbLines; x++) {
        winner = winningLine(matrix, x);
        if (!_.isEmpty(winner)) {
            break;
        } else {
            for (let y = 0; y < nbLines; y++) {
                winner = winningColumn(matrix, y);
                if (!_.isEmpty(winner)) {
                    break;
                }
            }
        }
    }
    return !_.isEmpty(winner) ? winner : winingDiagonal(matrix);
}

function winningLine(matrix, x) {
    if (matrix[`${x},0`].id && matrix[`${x},1`].id && matrix[`${x},2`].id
        && matrix[`${x},0`].id === matrix[`${x},1`].id
        && matrix[`${x},0`].id === matrix[`${x},2`].id) {
        return matrix[`${x},0`];
    } else {
        return {};
    }
}

function winningColumn(matrix, y) {
    if (!_.isEmpty(matrix[`0,${y}`]) && !_.isEmpty(matrix[`1,${y}`])
        && !_.isEmpty(matrix[`2,${y}`])
        && matrix[`0,${y}`].id === matrix[`1,${y}`].id
        && matrix[`0,${y}`].id === matrix[`2,${y}`].id) {
        return matrix[`0,${y}`];
    } else {
        return {};
    }
}

function winingDiagonal(matrix) {
    if (!_.isEmpty(matrix['0,0']) && !_.isEmpty(matrix['1,1'])
        && !_.isEmpty(matrix['2,2'])
        && matrix['0,0'].id === matrix['1,1'].id
        && matrix['0,0'].id === matrix['2,2'].id) {
        return matrix['0,0'];
    } else if (!_.isEmpty(matrix['0,2']) && !_.isEmpty(matrix['1,1'])
        && !_.isEmpty(matrix['2,0'])
        && matrix['0,2'].id === matrix['1,1'].id
        && matrix['0,2'].id === matrix['2,0'].id) {
        return matrix['0,2'];
    } else {
        return {};
    }
}
