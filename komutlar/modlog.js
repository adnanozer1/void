const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`${message.author}, Mod-log kanalı zaten ayarlı değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`${message.author}, Mod-log kanalı başarıyla sıfırlandı.`);
    return
  }
  
if (!logk) return message.channel.send(`${message.author}, Yanlış kullanım doğru kullanım: ${Prefix}mod-log #kanal`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`${message.author}, Mod-log kanalı başarıyla ${logk} olarak ayarlandı.`);
 message.react('607634966959882250')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog','log-ayarlama'],
    permLevel: 3,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};
