const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`  ‏ياشين اللي يحسبك خاق عليه وانت خاق عليه صدق . `,'https://www.twitch.tv/M')

});
client.login(process.env.BOT_TOKEN);
