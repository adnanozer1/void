const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(` Vision'u davet etmek için [buraya](https://discord.com/oauth2/authorize?client_id=951549636957593700&scope=bot&permissions=27648860222) tıkla
  Support Sunucusuna gitmek için [buraya](https://discord.gg/sS2ynffe3b) tıkla!`)
  message.channel.send(AsreaperEmbed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};