const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**${client.user.username} | Kayıt Sistemi Yardım Menüsü.**`).setDescription(`
 **${prefix}bot-alınacak @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
 **${prefix}bot-rol @rol** \n-> Kayıt edilecek rolü ayarlar.
 **${prefix}bot-kanal #kanal** \n-> Kayıt kanalını ayarlar.
 **${prefix}bot-yetkili @rol** \n-> Kayıt edecek yetkili rolünü ayarlar.
 **${prefix}bot @kullanıcı** \n-> Etiketlenen kullanıcıyı kayıt eder.
`).setThumbnail('https://cdn.dribbble.com/users/464652/screenshots/1444811/media/f9ee0387f7a612a44f82f7f9ba18b389.gif'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botkayıts','b-kayıt','botkayıtsistemi'],
  permLevel: 0
}

exports.help = {
  name: 'bot-kayıts'
};