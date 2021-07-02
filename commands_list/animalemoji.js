// animal emoji command.

// If you type !animalemoji, the bot will reply with
// random 4 animal emoji and random fact about the animal.

const {
    animalEmojiList,
    monkeyFunFactsList,
    camelFunFactsList,
    kangarooFunFactsList,
    pigFunFactsList
} = require('./commands_data/animalemojifunfact');

module.exports = (msg) => {
    const index = Math.floor(Math.random() * animalEmojiList.length);

    switch (animalEmojiList[index]) {
        // Monkey
        case '🐒':
            msg.reply('you get a monkey emoji!');
            msg.channel.send(animalEmojiList[index]);

            const getMonkeyFact = Math.floor(Math.random() * monkeyFunFactsList.length);
            msg.channel.send('Random fun fact about monkey: ');
            msg.channel.send(monkeyFunFactsList[getMonkeyFact].charAt(0).toUpperCase() + 
                             monkeyFunFactsList[getMonkeyFact].slice(1).toLowerCase());
            return;
        // Camel
        case '🐪':
            msg.reply('you get a camel emoji');
            msg.channel.send(animalEmojiList[index]);

            const getCamelFact = Math.floor(Math.random() * camelFunFactsList.length);
            msg.channel.send('Random fun fact about camel: ');
            msg.channel.send(camelFunFactsList[getCamelFact]);
            return;
        // Kangaroo
        case '🦘':
            msg.reply('you get a kangaroo emoji');
            msg.channel.send(animalEmojiList[index]);

            const getKangarooFact = Math.floor(Math.random() * kangarooFunFactsList.length);
            msg.channel.send('Random fun fact about kangaroo: ');
            msg.channel.send(kangarooFunFactsList[getKangarooFact]);
            return;
        // Pig
        case '🐖':
            msg.reply('you get a pig emoji');
            msg.channel.send(animalEmojiList[index]);
            
            const getPigFact = Math.floor(Math.random() * pigFunFactsList.length);
            msg.channel.send('Random fun fact about pig: ');
            msg.channel.send(pigFunFactsList[getPigFact]);
            return;
    }
};