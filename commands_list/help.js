var command_list_help = 'List of command:\n\n' +  
    '1. !animalemoji\n' +
    '2. !gif <keyword>\n' +
    '3. !ping';

module.exports = function (msg, args) {
    msg.channel.send(command_list_help);
}