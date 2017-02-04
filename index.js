'use strict';

const fs = require('fs');
const _ = require('lodash');
const runBot = require('./lib/runBot');

const token = process.env.SLACK_API_TOKEN || 'xoxb-136937362866-yrrw0XR07ng7mln3wXSSGgPf';
const name = process.env.SLACK_BOT_NAME || 'there_is_in_it';
const wordsPath = './data/wordsThatHaveInThem.txt';


fs.readFile(wordsPath, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    const words = _.map(data.split(/\r?\n/), w => w.trim().toLowerCase().replace(/\s/g, ''));
    runBot(token, name, words);
});

