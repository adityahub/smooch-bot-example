'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say('Hi! I\'m Addy Bot!')
            
                .then(() => 'askName');
        }
    },
    
    askChoice: {
        prompt: (bot) => bot.say('What would you like to read about - love, health or money?'),
        receive: (bot, message) => {
            const name = message.text;
            return bot.setProp('choice', choice)
                .then(() => bot.say(`Nice choice, let me connect you with a guru of ${choice}`))
                .then(() => 'finish');
        }
    },
   
    
    askName: {
        prompt: (bot) => bot.say('What\'s your name?'),
        receive: (bot, message) => {
            const name = message.text;
            return bot.setProp('name', name)
                .then(() => bot.say(`Great! You are my new best friend ${name}`));
                if (name=='Aditya'){
                .then(() => 'askChoice');
                }
                else
               .then(() => 'finish'); 
        }
    },

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say(`Wait ${name},, be patient ` +
                        'guru is arriving quickly'))
                        .then(() => 'finish');
        }
    }
});
