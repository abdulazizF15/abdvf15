const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`  m7Md#8188 . `,'https://www.twitch.tv/M')

});
client.login(process.env.BOT_TOKEN);
