const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['312075421992615946'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Mwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("idle")
    message.channel.send(`Done.`)
} else 
if (message.content.startsWith('Mls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(`Done.`)
} else 
if (message.content.startsWith('Mpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(`Done.`)
} else 
if (message.content.startsWith('Mst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/IDK");
  client.user.setStatus("idle")
   message.channel.send(`Done.`)
}
});
client.login(process.env.BOT_TOKEN);
