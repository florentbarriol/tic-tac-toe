export class Player {
    constructor(id, name, piece) {
        this._id = id;
        this._name = name;
        this._piece = piece;
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get piece() { return this._piece; }
}
