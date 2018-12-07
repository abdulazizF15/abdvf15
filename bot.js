const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` [:ما راح تلاقون مثلي لا ازعل ولا اتغلى وصاحي ليل نهار وارد بسرعه وفوق كذا مسحوب علي لكن من اهمل النعمة يجاري بفقدها `,'https://www.twitch.tv/M')

});
client.login(process.env.BOT_TOKEN);
