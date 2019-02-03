const Discord = require('discord.js');
const abdulaziz = new Discord.abdulaziz();
const developers = ['312075421992615946'];


abdulaziz.on('ready', () => {
  console.log(`Logged in as ${abdulaziz.user.tag}!`);
  abdulaziz.user.setStatus("idle")
});

abdulaziz.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Mwt')) {
abdulaziz.user.setActivity(argresult, {type:'WATCHING'});
  abdulaziz.user.setStatus("idle")
    message.channel.send(`Done.`)
} else 
if (message.content.startsWith('Mls')) {
abdulaziz.user.setActivity(argresult , {type:'LISTENING'});
  abdulaziz.user.setStatus("idle")
    message.channel.send(`Done.`)
} else 
if (message.content.startsWith('Mpl')) {
abdulaziz.user.setActivity(argresult , {type:'PLAYING'});
  abdulaziz.user.setStatus("idle")
    message.channel.send(`Done.`)
} else 
if (message.content.startsWith('Mst')) {
  abdulaziz.user.setGame(argresult, "https://www.twitch.tv/IDK");
  abdulaziz.user.setStatus("idle")
   message.channel.send(`Done.`)
}
});
abdulaziz.login(process.env.BOT_TOKEN);
