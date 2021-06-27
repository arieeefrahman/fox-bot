// main file

// First, dont forget to install discord.js into your project
// by typing npm install discord.js in your terminal

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN); // Insert bot token right here || template : client.login('BOT TOKEN');

client.on('ready', readyDiscord);
// Indicator the bot is on/off
function readyDiscord() {
    console.log("Hi, I'm ready to work! 😎");
}

const commandHandler = require('./commands');
client.on('message', commandHandler);