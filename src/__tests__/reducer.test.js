import reducer from '../reducer';
import * as types from '../actionTypes';
import * as utils from '../utils';
import { Player } from '../Player';
import _ from 'lodash';

const MATRIX_SIZE = 9;

const initialState = {
    currentPlayer: 1,
    players: {
        1: new Player(1, 'Michel', '🔵'),
        2: new Player(2, 'Jean-Jacques', '❌')
    },
    matrix: utils.initMatrix(MATRIX_SIZE),
    matrixSize: MATRIX_SIZE,
    winner: {}
}

describe('app reducer', () => {
    it('souhld return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual(initialState);
    })
    it('should handle ADD_TIC', () => {
        const action = {
            type: types.ADD_TIC,
            id: '0,0'
        };
        const expectedState = _.merge({},
            initialState,
            {
                matrix: {
                    '0,0': new Player(1, 'Michel', '🔵')
                },
                currentPlayer: 2
            });
        expect(reducer(initialState, action))
            .toEqual(expectedState);
    })
    it('should handle RESET_GAME ', () => {
        const action = {
            type: types.RESET_GAME
        };

        const testState = _.merge({}, initialState, {
            matrix: {
                '0,0': new Player(1, 'Michel', '🔵'),
                '0,1': new Player(2, 'Jean-Jacques', '❌'),
                '0,2': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 2
        });
        expect(reducer(testState, action))
            .toEqual(initialState);
    })
    it('should return winner with a line ', () => {
        const action = {
            type: types.ADD_TIC,
            id: '0,0'
        };

        const testState = _.merge({}, initialState, {
            matrix: {
                '1,0': new Player(1, 'Michel', '🔵'),
                '2,0': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 1
        });

        const expectedState =  _.merge({}, initialState, {
            matrix: {
                '0,0': new Player(1, 'Michel', '🔵'),
                '1,0': new Player(1, 'Michel', '🔵'),
                '2,0': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 2,
            winner: new Player(1, 'Michel', '🔵')
        });;
        expect(reducer(testState, action))
            .toEqual(expectedState);
    })
    it('should return winner with a line ', () => {
        const action = {
            type: types.ADD_TIC,
            id: '0,0'
        };

        const testState = _.merge({}, initialState, {
            matrix: {
                '0,1': new Player(1, 'Michel', '🔵'),
                '0,2': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 1
        });

        const expectedState =  _.merge({}, initialState, {
            matrix: {
                '0,0': new Player(1, 'Michel', '🔵'),
                '0,1': new Player(1, 'Michel', '🔵'),
                '0,2': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 2,
            winner: new Player(1, 'Michel', '🔵')
        });;
        expect(reducer(testState, action))
            .toEqual(expectedState);
    })
    it('should return winner with the first diagonal ', () => {
        const action = {
            type: types.ADD_TIC,
            id: '0,0'
        };

        const testState = _.merge({}, initialState, {
            matrix: {
                '1,1': new Player(1, 'Michel', '🔵'),
                '2,2': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 1
        });

        const expectedState =  _.merge({}, initialState, {
            matrix: {
                '0,0': new Player(1, 'Michel', '🔵'),
                '1,1': new Player(1, 'Michel', '🔵'),
                '2,2': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 2,
            winner: new Player(1, 'Michel', '🔵')
        });;
        expect(reducer(testState, action))
            .toEqual(expectedState);
    })
    it('should return winner with the second diagonal diagonal ', () => {
        const action = {
            type: types.ADD_TIC,
            id: '0,2'
        };

        const testState = _.merge({}, initialState, {
            matrix: {
                '1,1': new Player(1, 'Michel', '🔵'),
                '2,0': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 1
        });

        const expectedState =  _.merge({}, initialState, {
            matrix: {
                '0,2': new Player(1, 'Michel', '🔵'),
                '1,1': new Player(1, 'Michel', '🔵'),
                '2,0': new Player(1, 'Michel', '🔵'),
            },
            currentPlayer: 2,
            winner: new Player(1, 'Michel', '🔵')
        });;
        expect(reducer(testState, action))
            .toEqual(expectedState);
    })
})

