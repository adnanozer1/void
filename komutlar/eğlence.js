const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setTitle(`**Lucifero | Eğlence Komutları.**`).setColor('#000001').setDescription(`**
🐝 \`${Prefix}fal\`
> Falınıza Bakar

🆙 \`${Prefix}random-pp\`
> Random Profil Fotoğrafı Atar.
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'eğlence'
};