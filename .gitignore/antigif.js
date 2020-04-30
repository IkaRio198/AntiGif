const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN)

client.on('message', message => {
    if(message.content.includes("tenor")) {
      message.delete();
      message.channel.send("__**Les gifs ne sont pas autorisés sur ce serveur.**__");
}});

client.on('message', message => {
    if(message.content.includes("giphy")) {
      message.delete();
      message.channel.send("__**Les gifs ne sont pas autorisés sur ce serveur.**__");
}});
