// gif command.
// The bot will reply with gif
// 1. !gif => return default clingy keyword gif
// 2. !gif keyword => return gif with the keyword that you asked.

const fetch = require('node-fetch');

module.exports = async function (msg, args) {
    let keywords = 'clingy';
    if (args.length > 0) {
        keywords = args.join(" ");
    }

    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=L${process.env.TENORKEY}&contentfilter=medium`;
    let response = await fetch(url);
    let json = await response.json();

    const gif_index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[gif_index].url);
};