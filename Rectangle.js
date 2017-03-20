'use strict'; 

class Rectangle {
    constructor(length,width) {
        this._length = length;
        this._width = width;
    }

    set length(length){
        this._length = length;
    }

    get length(){
        return this._length;
    }

    set width(width) {
        this._width = width;
    }

    get width() {
        return this._width;
    }

    calculateArea() {
        return this._length * this._width;
    }

    calculatePerimeter() {
        return 2 * (this._length + this._width);
    }
}

module.exports = Rectangle;