const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` .علئ شباك الأمل زقت عصافيري `,'https://www.twitch.tv/IDK')

});
client.login(process.env.AZIZ);
