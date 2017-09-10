import { ADD_TIC, RESET_GAME } from './actionTypes';

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
