const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`  بأمكاني تدمير هذا العالم بس امي قالت مانبي مشاكل . `,'https://www.twitch.tv/M')

});
client.login(process.env.BOT_TOKEN);
