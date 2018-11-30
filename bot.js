const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`  ‏سوف املئ كأسي و اشرب شتبي انت ؟. `,'https://www.twitch.tv/M')

});
client.login(process.env.BOT_TOKEN);
