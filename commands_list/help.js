const commandListHelp = `List of command:
1. !ping
2. !gif <*keyword>
3. !music <play (put link without bracket) / skip / stop>
4. !animalemoji`;

module.exports = (msg) => msg.channel.send(commandListHelp);