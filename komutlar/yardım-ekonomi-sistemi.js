const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**${client.user.username} | Ekonomi Sistemi.**`).setDescription(`
**👤 ${Prefix}hesabım & ${Prefix}bilgiler**
> Hesap Bilgisini Gösterir.
📱 **${Prefix}bakiye**
> Bakiyeyi Gösterir.
💵 **${Prefix}cüzdan**
> Cüzdandaki Parayı Gösterir.
💳 **${Prefix}haftalıkmaaş & ${Prefix}maaş**
> Haftalık Maaşını Alırsın.
💸 **${Prefix}günlükpara & ${Prefix}günlük**
> Günlük Para Ödülü Alırsın.
🔨 **${Prefix}hesap-oluştur**
> Hesap Oluşturursun.
🧹 **${Prefix}hesap-sil**
> Hesap Silersin.
🗄 **${Prefix}kasalar**
> Kasaları Gösterir.
📪 **${Prefix}kasa-bilgi**
> Kasalar Hakkında Bilgi Alırsın.
📬 **${Prefix}kasa-aç**
> Kasa Açarsın.
📲 **${Prefix}transfer** 
> Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin.
`).setThumbnail('https://cdn.dribbble.com/users/464652/screenshots/1444811/media/f9ee0387f7a612a44f82f7f9ba18b389.gif'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ekonomis', 'ekonomi-s','EKONOMİSİSTEMİ','EKONOMİS','EKONOMİ-S'],
  permLevel: 0
}

exports.help = {
  name: 'ekonomisistemi'
};