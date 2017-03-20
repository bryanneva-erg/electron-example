'use strict';

const capitalize = (word) => word.toUpperCase();

const French = (sentence) => {
    const capitalSentence = capitalize(sentence);
    return capitalSentence.split(' ').map(word => word && capitalize('oui')).join(' ')
}

module.exports = French;