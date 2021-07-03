// main file

// First, dont forget to install discord.js into your project
// by typing npm install discord.js in your terminal

require('dotenv').config();

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN); // Insert bot token right here || template : client.login('BOT TOKEN');


// Indicator the bot is on/off
const readyDiscord = () => {
    console.log("Connected! 🤖");
}

client.on('ready', readyDiscord);

const commandHandler = require('./commands');
client.on('message', commandHandler);