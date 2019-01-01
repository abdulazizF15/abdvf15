const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` انتهت مصلحتهم فلم نعد نراهم 🙂. `,'https://www.twitch.tv/tfue')

});
client.login(process.env.BOT_TOKEN);
