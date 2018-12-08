const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` nothing. `,'https://www.twitch.tv/g2k')

});
client.login(process.env.BOT_TOKEN);
