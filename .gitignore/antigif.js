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
      console.log(`  [-] ${Date()} || Un gif venant de tenor.com envoyé par ${message.author.username} dans ${message.channel.name} du serveur ${message.guild.name} a été supprimé avec succès par l'application Antigif.`);
}});

client.on('message', message => {
    if(message.content.includes("giphy.com/")) {
      message.delete();
      message.reply("__**Les gifs ne sont pas autorisés sur ce serveur.**__");
      console.log(`  [-] ${Date()} || Un gif venant de giphy.com envoyé par ${message.author.username} dans ${message.channel.name} du serveur ${message.guild.name} a été supprimé avec succès par l'application Antigif.`);
}});
