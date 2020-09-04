const Discord = require('discord.js');
const client = new Discord.Client();

client.login("") //PLACE YOUR TOKEN HERE → "<BOT TOKEN>"

client.on('ready', () => {
  client.user.setPresence({ activity: { name: 'Bloquer les gifs | Dev by IkaRio' }, status: 'available' })
.then(console.log)
.catch(console.error);
      ;}
  );

client.on('message', message => {
    if(message.content.includes("tenor.com/")) {
      message.delete();
      message.reply("__**les gifs ne sont pas autorisés sur ce serveur.**__");
}});

client.on('message', message => {
    if(message.content.includes("giphy.com/")) {
      message.delete();
      message.reply("__**Les gifs ne sont pas autorisés sur ce serveur.**__");
}});
