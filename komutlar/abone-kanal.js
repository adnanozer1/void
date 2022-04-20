const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


if(args[0] === "sıfırla") {
const sıfırlandi = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Abone kanal sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(` Abone olunacak kanal başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Piedra`)
message.channel.send(sıfırlandi)
db.delete(`abonekanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadi = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Abone kanal ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Abone olunacak kanalı belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlanmadi)
}
db.set(`abonekanal_${message.guild.id}`, kanal.id)
const ayarlandi = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Abone kanal ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(`Abone rolü verilecek kanal ${kanal} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlandi)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['abonekanal', 'akanal', 'a-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'abone-kanal',
  description: 'Abone Olunacak Kanalı Ayarlar',
  usage: '.abone-kanal #kanal'
}