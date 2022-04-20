const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**${client.user.username} | Abone Sistemi Yardım Menüsü.**`).setDescription(`
 **${prefix}abone-kanal #kanal** \n-> Abone rolünün verileceği kanalı belirlersiniz.
 **${prefix}abone-yetkili @rol** \n-> Abone rolü verebilecek yetkiyi ayarlar.
 **${prefix}abone-rol @rol** \n-> Verilecek abone rolünü ayarlar.
 **${prefix}abone @kullanıcı** \n-> Abone rolü verir.
`).setThumbnail('https://cdn.dribbble.com/users/464652/screenshots/1444811/media/f9ee0387f7a612a44f82f7f9ba18b389.gif'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['abones','abone-s','abonesistemi','ABONES','ABONESİSTEMİ','ABONE-S'],
  permLevel: 0
}

exports.help = {
  name: 'abone-sistemi'
};