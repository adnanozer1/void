const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {

  message.channel.send(`${message.author}, Malesef bu komut şu anda çalışmıyor!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: 'radyo komutunu bilgilendirir.',
  usage: 'radyo'
};