const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kısaltma Yardım Menüsü`)
 .setDescription(`
 **${prefix}korumasistemi, koruma-s, korumas ->  Sistemi Kısaltması.
 **${prefix}özelodasistemi, özeloda-s, özelodas \n-> Özel Oda Sistemi Kısaltması.
 **${prefix}kayıtsistemi, kayıts** \n-> Kayıt Sistemi Kısaltması.
 **${prefix}logosistemi, logo-s, logos** \n-> Logo Sistemi Kısaltması.
 **${prefix}çekilişsistemi, çekiliş-s, çekilişs** \n-> Çekiliş Sistemi Kısaltması.
 **${prefix}profilsistemi, profil-s, profils** \n-> Profil Sistemi Kısaltması.
 **${prefix}ekonomisistemi, ekonomi-s, ekonomis** \n-> Ekonomi Sistemi Kısaltması.
 **${prefix}abones** \n-> Abone sistemini gösterir
 **${prefix}kısaltma** \n
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kısaltma'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kısaltmalar',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};