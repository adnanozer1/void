const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandi = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Abone yetkili rol sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(`Sunucu için ayarladığınız abone yetkili rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Piedra`)
message.channel.send(sıfırlandi)
db.delete(`aboneyetkili_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadi = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Abone yetkili rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Ayarlayacağınız abone yetkili rolü belirtiniz!`)
.setThumbnail(client.user.avatarUR())
.setFooter(`Piedra`)
message.channel.send(ayarlanmadi)
}
db.set(`aboneyetkili_${message.guild.id}`, rol.id)
const ayarlandi = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Abone yetkili rolü ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Abone rolü verecek rol başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlandi)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['aboneyetkilirol', 'aboney','aboneyetkili','ayr'],
  permlevel: 0
}
exports.help = {
  name: 'abone-yetkili-rol',
  description: 'kız rolünü ayarlar',
  usage: '.aboneyetkili'
}