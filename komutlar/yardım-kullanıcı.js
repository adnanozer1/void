
const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setColor(client.ekoayarlar.renk).setTitle(`**${client.user.username} | Kullanıcı Yardım Menüsü.**`).setDescription(`
 **${Prefix}kurallar** \n-> Hazır Kurallar Gönderir.
 **${Prefix}davet** \n-> Botu davet edersiniz.
 **${Prefix}shardbilgi** \n-> Botun shard bilgilerini gösterir.
 **${Prefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **${Prefix}randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **${Prefix}sonmesaj** \n-> Yazdığınız son mesajı gösterir.
`).setThumbnail('https://cdn.dribbble.com/users/464652/screenshots/1444811/media/f9ee0387f7a612a44f82f7f9ba18b389.gif'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['KULLANICI'],
  permLevel: 0
}

exports.help = {
  name: 'kullanıcı'
};
  
  
/*//----------------EKLENECEK---------------\\
 **${Prefix}öneri** \n-> Bota öneri belirtirsiniz.
 **${Prefix}istatistik** \n-> Botun istatistiğini gösterir.
*/