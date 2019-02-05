 const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity(" لاحياة للحب بعد موت الاهتمام . ",{type: 'LISTENING'})
    client.user.setStatus("idle")

});
client.login(process.env.BOT_TOKEN);
