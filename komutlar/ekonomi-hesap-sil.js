const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')



exports.run = async (client, message, args) => {
  if(!client.ekoayarlar.admin.includes(message.author.id)) return message.reply(` Bu komutu sadece <@571327787856822295> kullanabilir ona ulaşmak için dm kutusuna yazabilirsiniz.`)
  const silinecekkllnc = message.mentions.members.first();
  if(!silinecekkllnc) return message.channel.send(`${message.author}, Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiyecdare-${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumcodare-${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismiçodare-${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`${message.author}, Kayıtlı olan bir kullanıcı belirtmelisin!`)
  db.delete(`bakiyecdare-${silinecekkllnc.id}`)
  db.delete(`hesapdurumcodare-${silinecekkllnc.id}`)
  db.delete(`hesapismiçodare-${silinecekkllnc.id}`)
  message.channel.send(`:+1:`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hsil'],
    permLevel: 0
}

exports.help = {
    name: 'hesap-sil',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}