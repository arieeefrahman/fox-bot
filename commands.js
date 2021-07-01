const animalemoji = require('./commands_list/animalemoji');
const gif = require('./commands_list/gif');
const ping = require('./commands_list/ping');
const foxhelp = require('./commands_list/help');
const playmusic = require('./commands_list/music');

const commands = { animalemoji, gif, ping, foxhelp, playmusic };

module.exports = async (msg) => {
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