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
message.channel.send(`**Reddit Etkinliği!**

**🇹🇷 Bayrak Savunma Linki**
> https://humanova.github.io/rplace-turkey/elraenn_bayrak
**🇹🇷 Atatürk Savunma Linki**
> https://humanova.github.io/rplace-turkey/ataturk

||${message.author}||
https://c.tenor.com/f3HGfIRTPGYAAAAd/atat%C3%BCrk-mustafa-kemal-atat%C3%BCrk.gif
`)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rtürkiye'],
  permLevel: 0
}

exports.help = {
  name: 'reddittürkiye'
};