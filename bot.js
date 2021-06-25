// First, dont forget to install discord.js into your project
// by typing npm install discord.js in your terminal
const {
    repliesMessageList,
    monkeyFunFactsList,
    camelFunFactsList,
    kangarooFunFactsList,
    pigFunFactsList
} = require('./funFactArray');
const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

// Insert bot token right here
// template : client.login('BOT TOKEN');
client.login(process.env.BOTTOKEN); // 

client.on('ready', readyDiscord);

// Indicator the bot is on/off
function readyDiscord() {
    console.log("Hi, I'm ready to work! 😎");
}

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.channel == '857986376896872469' && msg.content === 'send me random animal emoji') {
        const index = Math.floor(Math.random() * repliesMessageList.length);

        switch(repliesMessageList[index]) {
            case '🐒':
                msg.reply('you get a monkey emoji!');
                msg.channel.send('🐒');

                const getMonkeyFact = Math.floor(Math.random() * monkeyFunFactsList.length);
                msg.channel.send('Random fun fact about monkey: ');
                msg.channel.send(monkeyFunFactsList[getMonkeyFact].charAt(0).toUpperCase() + 
                                monkeyFunFactsList[getMonkeyFact].slice(1).toLowerCase());
                break;
            case '🐪':
                msg.reply('you get a camel emoji');
                msg.channel.send('🐪');

                const getCamelFact = Math.floor(Math.random() * camelFunFactsList.length);
                msg.channel.send('Random fun fact about camel: ');
                msg.channel.send(camelFunFactsList[getCamelFact]);
                break;
            case '🦘':
                msg.reply('you get a kangaroo emoji');
                msg.channel.send('🦘');

                const getKangarooFact = Math.floor(Math.random() * kangarooFunFactsList.length);
                msg.channel.send('Random fun fact about kangaroo: ');
                msg.channel.send(kangarooFunFactsList[getKangarooFact]);
                break;
            case '🐖':
                msg.reply('you get a pig emoji');
                msg.channel.send('🐖');
                
                const getPigFact = Math.floor(Math.random() * pigFunFactsList.length);
                msg.channel.send('Random fun fact about pig: ');
                msg.channel.send(pigFunFactsList[getPigFact]);
                break;
            default:
                msg.reply('default message');
        }
    }
}