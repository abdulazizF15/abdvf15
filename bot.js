const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` so?. `,'https://www.twitch.tv/IDK')

});
client.login(process.env.BOT_TOKEN);
