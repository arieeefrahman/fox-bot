const animalemoji = require('./commands_list/animalemoji');
const gif = require('./commands_list/gif');
const ping = require('./commands_list/ping');
const help = require('./commands_list/help');
const music = require('./commands_list/music');

const commands = { animalemoji, gif, ping, help, music };

module.exports = async (msg) => {
    console.log(msg.content); // indicator in terminal

    if (msg.channel == '857986376896872469') {
        let tokens = msg.content.split(" ");
        let userCommand = tokens.shift();
        
        if (userCommand.charAt(0) === '!') {
            userCommand = userCommand.substring(1);

            if (commands.hasOwnProperty(userCommand)) {
                msg.react('✨');
                commands[userCommand](msg, tokens);
            } else {
                msg.react('😔')
                msg.channel.send('Unfortunately, I do not recognize this command!\n' +
                'Please kindly check this.');
                commands['help'](msg, tokens);
            }
        }
    }
};