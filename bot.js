const D1 = require("discord.js");
const D2 = require("discord.js");
//////////////////////////////////////////////////
const abdulaziz = new D1.Client();
const a7q9 = new D2.Client();
/////////////////////////////////////////////////
abdulaziz.on('ready', () => {
abdulaziz.user.setGame(` Vendetta. `,'https://www.twitch.tv/idk')
});
a7q9.on('ready', () => {
a7q9.user.setGame(` You. `,'https://www.twitch.tv/idk')
});
/////////////////////////////////////////////////
abdulaziz.login(process.env.AZIZ);
a7q9.login(process.env.A7Q9);
