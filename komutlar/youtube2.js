const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
message.delete()
let images = ['', ''];
message.channel.send(`**SLayer YouTube Kanalına Abone Olmayı Unutmayın! 
https://www.youtube.com/c/SLayerT
||@everyone&@here||**
`)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yt'
};