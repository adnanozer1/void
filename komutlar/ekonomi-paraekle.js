const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {
  if(!client.ekoayarlar.admin.includes(message.author.id)) return message.reply(`${message.author} Bunu yapabilmek için gerekli yetkiye sahip değilsin!`)
  const silinecekkllnc = message.mentions.members.first();
  let para = args[1]
  if(!silinecekkllnc) return message.channel.send(`${message.author} Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiyecdare-${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumcodare-${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismiçodare-${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  await db.add(`bakiyecdare-${silinecekkllnc.id}`, para)
  
  
  message.channel.send(`${message.author}, ${silinecekkllnc.user} Adlı Kişinin Hesabına **Başarıyla Kredi Eklenmiştir.**`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ekle'],
    permLevel: 0
}

exports.help = {
    name: 'ekle',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}