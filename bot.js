const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`  ‏‏Maybe, i’m just a stranger in this fucking world.. `,'https://www.twitch.tv/M')

});
client.login(process.env.BOT_TOKEN);
