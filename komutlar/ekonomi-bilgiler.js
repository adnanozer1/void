const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiyecdare-${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumcodare-${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismiçodare-${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihiçdayreyıl-${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihiçdayreay-${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihiçdayregün-${kllanç.id}`)
  
  if(!hesapdurumu) {
    if(args[0]) return message.reply(`Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`)
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        const embedczdn = new Discord.MessageEmbed()
        .setColor(client.ekoayarlar.renk)
        .setTitle('🏦 LuciBanK')
        .setDescription(`👤 Hesap İsmi: ${client.ekoayarlar.isimsiz}\n 💰 Hesap Bakiyesi: ${bakiye}\n 📅 Hesap Oluşturma Tarihi: Bilinmiyor`)
        message.channel.send(embedczdn)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            const embedczdnv2 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)
            .setTitle('🏦 LuciBanK')
            .setDescription(`👤 Hesap İsmi: ${hesapismi}\n 💰 Bakiye: ${bakiye}\n 📅 Hesap Oluşturma Tarihi: *${hesaptarihay}/ ${hesaptarihgün}/${hesaptarihyıl}* gününde hesabın oluşturuldu!`)
            message.channel.send(embedczdnv2)
          }
        }
      }
    }
  }
};
    //.setThumbnail(client.user.avatarURL() ? client.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hesabım'],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'bilgiler',
    description: 'Bilgilerinizi gösterir.',
    usage: 'bilgiler <@kullanıcı>',
}