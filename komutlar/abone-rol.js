const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Abone rol sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(` Sunucu için ayarladığınız abone rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Piedra`)
message.channel.send(sıfırlandı)
db.delete(`abonerol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Abone rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Ayarlayacağınız abone rolünü belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlanmadı)
}
db.set(`abonerol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Abone rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Abone rolü başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['abonerol', 'arol', 'a-rol'],
  permlevel: 0
}
exports.help = {
  name: 'abone-rol',
  description: 'abone rolünü ayarlar',
  usage: 'abone-rol @rol'
}