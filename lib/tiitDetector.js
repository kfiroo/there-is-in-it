'use strict';

const _ = require('lodash');

module.exports = (words) => (text) => {
    const clean = text.replace(/\s/g, '');
    return _.some(words, word => clean.includes(word));
};