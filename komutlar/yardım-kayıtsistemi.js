const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**${client.user.username} | Kayıt Sistemi.**`).setDescription(`
 **${prefix}alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
 **${prefix}kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
 **${prefix}kayıt-hg #kanal** \n-> Kayıt hoş geldin kanalını ayarlarsınız.
 **${prefix}kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
 **${prefix}erkek-rol @rol** \n-> Kayıt edilince verilecek erkek rolü ayarlar.
 **${prefix}kız-rol @rol** \n-> Kayıt edilince verilecek kız rolü ayarlar.
 **${prefix}erkek @kullanıcı isim yaş** \n-> Erkekleri kayıt etmeye yarar.
 **${prefix}kız @kullanıcı isim yaş** \n-> Kızları kayıt etmeye yarar.
 **${prefix}botkayıts** \n-> Bot kayıt sistemini gösterir.
`).setThumbnail('https://cdn.dribbble.com/users/464652/screenshots/1444811/media/f9ee0387f7a612a44f82f7f9ba18b389.gif'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıts','kayıt-s','kayıtsistemi','KAYITS','KAYITSİSTEMİ','KAYIT-S'],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-sistemi'
};