module.exports = async (msg, args) => {
    if (!msg.member.voice.channel) {
        msg.channel.send("You must join to a voice channel!");
    } else {
        const connection = await msg.member.voice.channel.join();
    }
}