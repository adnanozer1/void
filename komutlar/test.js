const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if(!client.ekoayarlar.admin.includes(message.author.id)) return message.reply(`Bu komutu sadece <@571327787856822295> kullanabilir!`)
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**${client.user.username} | Developer Test Command.**`).setDescription(`
**🎮 Developer Test Command**
> Açıklama.

🎮 **Developer Test Command**
> Açıklama.

🎮 **Developer Test Command**
> Açıklama.
`).setThumbnail('https://cdn.dribbble.com/users/464652/screenshots/1444811/media/f9ee0387f7a612a44f82f7f9ba18b389.gif'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'test'
};