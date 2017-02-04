'use strict';

const _ = require('lodash');
const tiitDetector = require('./tiitDetector');

module.exports = (Bot, token, name, words) => {

    console.log(`running bot [${name}] - token ${token ? 'good' : 'bad'}`);

    const bot = new Bot({
        token,
        name
    });

    const isThereInIt = tiitDetector(words);

    bot.on('start', () => {
        console.log('bot started');

        const user = _.find(bot.users, u => u.name === name);

        // we need the bots users and channels when messages arrive
        bot.on('message', message => {
            console.log('message: ');
            console.log(message);

            if (message.type === 'message' &&
                message.user !== user.id &&
                _.startsWith(message.channel, 'C') &&
                isThereInIt(message.text)
            ) {
                console.error('THERE IS IN IT');
                const channel = _.find(bot.channels, c => c.id == message.channel);
                bot.postMessageToChannel(channel.name, 'יש בזה :point_up:', {as_user: true}, res => console.log('res', res));
            }
        });

    });

    bot.on('open', data => {
        console.log('open', data);
    });

    bot.on('close', data => {
        console.log('close', data);
    });

    bot.on('error', data => {
        console.log('error', data);
    });

};
