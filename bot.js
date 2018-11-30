const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`  ‏‏من الان وصاعدًا جميع الأمور على زق . `,'https://www.twitch.tv/M')

});
client.login(process.env.BOT_TOKEN);
