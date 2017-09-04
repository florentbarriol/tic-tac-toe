import { ADD_TIC } from './actions';
import _ from 'lodash';
import { Player } from './Player';

const initialState = {
    currentPlayer: 1,
    players: {
        1: new Player(1, 'Michel', '🔵'),
        2: new Player(2, 'Jean-Jacques', '❌')
    },
    matrix: {},
    matrixSize: 9,
    isWinning: false
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TIC:
            const newMatrix = _.merge(
                {},
                state.matrix,
                { [action.id]: state.players[state.currentPlayer] }
            );
            return _.merge({}, state, {
                matrix: newMatrix,
                currentPlayer: state.currentPlayer === 1 ? 2 : 1,
                //isWinning: findAWinner(newMatrix)
            });
        default:
            return state;
    }
}

function findAWinner(matrix) {
    console.log('eeeee', matrix, matrix[0], matrix[1], matrix[0]);
    if (matrix[0] === matrix[1] && matrix[0] === matrix[2]) {
        return true;
    } else if (matrix[3] === matrix[4] && matrix[3] === matrix[5]) {
        return true;
    } else if (matrix[6] === matrix[7] && matrix[6] === matrix[8]) {
        return true;
    } else if (matrix[0] === matrix[3] && matrix[0] === matrix[6]) {
        return true;
    } else if (matrix[1] === matrix[4] && matrix[1] === matrix[7]) {
        return true;
    } else if (matrix[2] === matrix[5] && matrix[21] === matrix[8]) {
        return true;
    } else if (matrix[0] === matrix[4] && matrix[0] === matrix[8]) {
        return true;
    } else if (matrix[2] === matrix[4] && matrix[2] === matrix[6]) {
        return true;
    } else {
        return false;
    }
}
