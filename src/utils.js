import _ from 'lodash';

export function initMatrix(size) {
    let matrix = {};
    const nbLines = Math.sqrt(size);
    for (let x = 0; x < nbLines; x++) {
        for (let y = 0; y < nbLines; y++) {
            matrix = _.set(matrix, `${x},${y}`, {});
        }
    }
    return matrix;
}
