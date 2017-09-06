import { ADD_TIC, RESET_GAME } from './actions';
import _ from 'lodash';
import { Player } from './Player';

const MATRIX_SIZE = 9;

const initialState = {
    currentPlayer: 1,
    players: {
        1: new Player(1, 'Michel', '🔵'),
        2: new Player(2, 'Jean-Jacques', '❌')
    },
    matrix: initMatrix(MATRIX_SIZE),
    matrixSize: MATRIX_SIZE,
    winner: {}
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TIC:
            const newMatrix = _.merge(
                [],
                state.matrix,
                { [action.id]: state.players[state.currentPlayer] }
            );
            return _.merge({}, state, {
                matrix: newMatrix,
                currentPlayer: state.currentPlayer === 1 ? 2 : 1,
                winner: findAWinner(newMatrix)
            });
        case RESET_GAME:
            let newState = _.merge({}, state, {
                currentPlayer: 1,
                winner: {}
            });
            newState = _.set(newState, 'matrix', initMatrix(MATRIX_SIZE));
            newState = _.set(newState, 'winner', {});
            return newState;
        default:
            return state;
    }
}

function initMatrix() {
    let matrix = {};
    const nbLines = Math.sqrt(MATRIX_SIZE);
    for (let x = 0; x < nbLines; x++) {
        for (let y = 0; y < nbLines; y++) {
            matrix = _.set(matrix, `${x},${y}`, {});
        }
    }
    return matrix;
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
                if (winner) {
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

// TODO : bug winner column
function winningColumn(matrix, y) {
    if (matrix[`0,${y}`].id && matrix[`1,${y}`].id && matrix[`2,${y}`].id
        && matrix[`0,${y}`].id === matrix[`1,${y}`].id
        && matrix[`0,${y}`].id === matrix[`2,${y}`].id) {
        return matrix[`0,${y}`];
    } else {
        return {};
    }
}

function winingDiagonal(matrix) {
    if ((
        !_.isEmpty(matrix['0,0']) && !_.isEmpty(matrix['1,1']) && !_.isEmpty(matrix['2,2'])
        && matrix['0,0'].id === matrix['1,1'].id
        && matrix['0,0'].id === matrix['2,2'].id
    ) || (
            !_.isEmpty(matrix['0,3']) && !_.isEmpty(matrix['1,2']) && !_.isEmpty(matrix['3,0'])
            && matrix['0,3'].id === matrix['1,2'].id
            && matrix['0,3'].id === matrix['3,0'].id
        )) {
        return matrix['0,0'];
    } else {
        return {};
    }
}
