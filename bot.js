const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity(" M. ",{type: 'PLAYING'})
    client.user.setStatus("idle")

});
client.login(process.env.BOT_TOKEN);
