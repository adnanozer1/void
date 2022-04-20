const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if(!client.ekoayarlar.admin.includes(message.author.id)) return message.reply(`Reddit etkinliği bittiği için komut kullanım dışı! Yeni etkinliklerde aktif hale gelecektir.`)
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor('#ff0000').setTitle(`**${client.user.username} | Reddit Etkinliği!**`).setDescription(`
**🇹🇷 Bayrak Savunma Linki**
> https://humanova.github.io/rplace-turkey/elraenn_bayrak

**🇹🇷 Atatürk Savunma Linki**
> https://humanova.github.io/rplace-turkey/ataturk
`).setImage('https://c.tenor.com/f3HGfIRTPGYAAAAd/atat%C3%BCrk-mustafa-kemal-atat%C3%BCrk.gif').setThumbnail('https://c.tenor.com/nDLc-ldp2ukAAAAd/t%C3%BCrkiye-t%C3%BCrkiy%C9%99.gif'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'reddit'
};