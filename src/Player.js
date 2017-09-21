export class Player {
    constructor(id, name, piece) {
        this._id = id;
        this._name = name;
        this._piece = piece;
        this._score = 0;
    }

    winATurn(){
        this._score = this._score + 1;
        return this._score;
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get piece() { return this._piece; }
    get score() { return this._score; }


}
