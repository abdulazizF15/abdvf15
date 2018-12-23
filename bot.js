const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` دمعك ماجاب. `,'https://www.twitch.tv/k')

});
client.login(process.env.BOT_TOKEN);
