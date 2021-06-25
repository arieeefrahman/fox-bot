// First, dont forget to install discord.js into your project
// by typing npm install discord.js in your terminal

const Discord = require('discord.js');
const client = new Discord.Client();

// Insert bot token right here
// template : client.login('BOT TOKEN');
client.login('ODU3OTg4OTIxMTY2MjY2Mzg5.YNXmcw.iQhy553afAPGWXYJr4N1_aLFOHE'); // 

client.on('ready', readyDiscord);

// Indicator the bot is on/off
function readyDiscord() {
    console.log("Hi, I'm ready to work! 😎");
}

client.on('message', gotMessage);

const repliesMessageList = [
    '🐒',
    '🐪',
    '🦘',
    '🐖'
];

const monkeyFunFactsList = [
    'Not all primates are monkeys.',
    'Many monkeys are at risk.',
    'They use Grooming To Strengthen Relationships.',
    'Only New World Monkeys Have Prehensile Tails.',
    'There\'s Only One Species of Wild Monkey in Europe.',
    'Pygmy Marmosets Are the World\'s Smallest Monkeys.',
    'Mandrills Are the World\'s Largest Monkeys.'
];

const camelFunFactsList = [
    'When a camel finally does find water, he can drink up to 40 gallons in one go.',
    'Camels are very strong and can carry up to 900 pounds for 25 miles a day.',
    'Camels can travel at up to 40 miles per hour – the same as a racehorse!',
    'Don’t make a camel angry – they can spit as a way to distract whatever they think is a threat.',
    'Mother camels carry their calves up to 14 months before giving birth.',
    'Some calves are born completely white and turn brown as their adult coat comes in.'
];

const kangarooFunFactsList = [
    'Most Kangaroos Are Left-Handed.',
    'A Group of Kangaroos Is Called a Mob.',
    'Some Kangaroos Can Hop 25 Feet.',
    'They Can Use Their Tail as a Fifth Leg.',
    'Joeys Can Go Dormant Until the Pouch Is Vacant.'
];

const pigFunFactsList = [
    'Pigs are very clean animals.',
    'Pigs can\'t sweat.',
    'Pigs are smarter than your dog.',
    'Mother pigs sing to their babies.',
    'Pigs love belly rubs.'
];

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