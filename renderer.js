'use strict';

const Rectangle = require('./Rectangle');
const Square = require('./Square');
const Pizza = require('./Translator').Pizza;
const Translator = require('./Translator');

// ////////////////


const foo = 'foo';

document.write('ES2015 const: ');
document.write(foo);
document.write("<br/>");

document.write('ES2015 function: ');
const bar = (param) => "Hello " + param;
const bat = bar("Bryan");
document.write(bat);
document.write("<br/>");

class Baz {
    constructor(){
        // super();
        this.foo = 5;
        this.bar = 10;
    }

    multiply() {
        return this.foo * this.bar;
    }
}

document.write('Internal class: ');
const example = new Baz();
document.write(example.multiply());
document.write("<br/>");



// Class with Module import 
document.write('Module import with class: ');
const myShape = new Rectangle(100,333);
document.write(myShape.calculateArea());
document.write('<br />');
document.write(myShape.calculatePerimeter());
document.write('<br />');

// Class that extends another
document.write('Class extends another: ');
const myShape2 = new Square(5);
document.write(myShape2.calculateArea());
document.write('<br />');
document.write(myShape2.calculatePerimeter());
document.write('<br />');

// Encapsulated folder with functional programming
document.write('Encapsulated folder with functional programming: ');
const mySentence = Pizza('hello world');
document.write(mySentence);
document.write('<br />');


// Multiple exports, functional programming using another function
document.write('Multiple exports, functional programming using another function: ');
const sentence2 = Translator.French('My name is Bryan');
document.write(sentence2);
document.write('<br />');