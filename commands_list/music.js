const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = async (msg, args) => {
    const voiceChannel = msg.member.voice.channel;

    if (!voiceChannel) {
        return msg.channel.send('You need to be in a channel to execute music command!');
    } else if (args.length === 0) {
        return msg.channel.send("You need to input command (play/skip/stop)");
    }

    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if ((!permissions.has('CONNECT')) || (!permissions.has('SPEAK'))) {
        return msg.channel.send('You dont have the correct permissions');
    }

    const serverQueue = queue.get(msg.guild.id);

    if (args[0] === 'play') {
        if (!args[1]) {
            return msg.channel.send('You need to add a youtube link');
        }

        let song = {};

        //If the second argument is a link. Set the song object to have two keys. Title and URl.
        if (ytdl.validateURL(args[1])) {
            const song_info = await ytdl.getInfo(args[1]);
            song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
        } else {
            //If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
            const video_finder = (query) => {
                const video_result = ytSearch(query);
                return (video_result.videos.length > 1) ? video_result.videos[0] : null;
            }

            const video = video_finder(args.join(' '));
            if (video){
                song = { title: video.title, url: video.url }
            } else {
                msg.channel.send('Error finding video.');
            }
        }

        //If the server queue doesn't exist (which doesn't for the first video queued) then create a constructor to be added to our global queue.
        if (!serverQueue) {
            const queueConstructor = {
                voiceChannel: voiceChannel,
                text_channel: msg.channel,
                connection: null,
                songs: []
            }
            
            //Add our key and value pair into the global queue. We then use this to get our server queue.
            queue.set(msg.guild.id, queueConstructor);
            queueConstructor.songs.push(song);

            //Establish a connection and play the song with the videoPlayer function.
            try {
                const connection = await voiceChannel.join();
                queueConstructor.connection = connection;
                video_player(msg.guild, queueConstructor.songs[0]);
            } catch (err) {
                queue.delete(msg.guild.id);
                msg.channel.send('There was an error connecting!');
                throw err;
            }
        } else {
            serverQueue.songs.push(song);
            msg.react('👍');
            return msg.channel.send(`**${song.title}** added to queue!`);
        }
    }

    else if(args[0] === 'skip') skipSong(msg, serverQueue);
    else if(args[0] === 'stop') stopSong(msg, serverQueue);
};

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    //If no song is left in the server queue. Leave the voice channel and delete the key and value pair from the global queue.
    if (!song) {
        song_queue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`🎶 Now playing **${song.title}**`);
};

const skipSong = (msg, serverQueue) => {
    if (!msg.member.voice.channel) {
        return msg.channel.send('You need to be in a channel to execute this command!')
    }
    if (!serverQueue) {
        return msg.channel.send(`There are no songs in queue!👾`);
    }
    serverQueue.connection.dispatcher.end();
    msg.react("⏭");
};

const stopSong = (msg, serverQueue) => {
    if (!msg.member.voice.channel) {
        msg.react('⚠');
        return msg.channel.send('You need to be in a channel to execute this command!');
    }
    if (!serverQueue) {
        msg.react('😕');
        return msg.channel.send(`There are no songs, so what do you wanna stop?`);
    }
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    msg.react("🛑");
};