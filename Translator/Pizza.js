'use strict';

const Pizza = (sentence) => sentence.split(' ').map(word => word && '🍕').join(' ');

module.exports = Pizza;