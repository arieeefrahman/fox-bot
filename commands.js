const animalemoji = require('./commandslist/animalemoji');
const gif = require('./commandslist/gif');
const ping = require('./commandslist/ping');

const commands = { animalemoji, gif };

module.exports = async function (msg) {
    console.log(msg.content); // indicator in terminal

    if (msg.channel == '857986376896872469') {
        let tokens = msg.content.split(" ");
        let user_command = tokens.shift();
        
        if (user_command.charAt(0) === '!') {
            user_command = user_command.substring(1);
            commands[user_command](msg, tokens);
        }
    }
};