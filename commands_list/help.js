const command_list_help = 'List of command:\n\n' +  
    '1. !animalemoji\n' +
    '2. !gif <keyword>\n' +
    '3. !ping' +
    '4. !music <play {put link without curly bracket})/skip/stop>';

module.exports = (msg) => msg.channel.send(command_list_help);