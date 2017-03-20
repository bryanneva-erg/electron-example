const Rectangle = require('./Rectangle');

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

module.exports = Square;