const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Bot rol sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(` Sunucu için ayarladığınız bot rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Piedra`)
message.channel.send(sıfırlandı)
db.delete(`botrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bot rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Ayarlayacağınız bot rolünü belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlanmadı)
}
db.set(`botrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bot rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(` Bot rolü başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['botrol', 'brol', 'b-rol'],
  permlevel: 0
}
exports.help = {
  name: 'bot-rol',
  description: 'bot rolünü ayarlar',
  usage: 'bot-rol @rol'
}