import _ from 'lodash';

export function initMatrix(size) {
    let matrix = {};
    const nbLines = rowNumber(size);
    for (let x = 0; x < nbLines; x++) {
        for (let y = 0; y < nbLines; y++) {
            matrix = _.set(matrix, `${x},${y}`, {});
        }
    }
    return matrix;
}

export function rowNumber(size){
    return Math.sqrt(size);
}
