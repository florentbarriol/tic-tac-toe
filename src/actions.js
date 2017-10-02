import { ADD_TIC, RESET_GAME, CONTINUE_GAME, ADD_PLAYER } from './actionTypes';

function makeActionCreator(type, ...argNames) {
    return function (...args) {
        let action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

export const addTic = makeActionCreator(ADD_TIC, 'id');
export const resetGame = makeActionCreator(RESET_GAME);
export const continueGame = makeActionCreator(CONTINUE_GAME);


export const addPlayer = makeActionCreator(ADD_PLAYER, 'player');
