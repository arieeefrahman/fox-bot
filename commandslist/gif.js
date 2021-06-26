const fetch = require('node-fetch');

module.exports = async function (msg, args) {
    let keywords = 'smiley';
    if (args.length > 0) {
        keywords = args.join(" ");
    }

    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=L${process.env.TENORKEY}&contentfilter=medium`;
    let response = await fetch(url);
    let json = await response.json();

    const gif_index = Math.floor(Math.random() * json.results.length);
     msg.channel.send(json.results[gif_index].url);
};