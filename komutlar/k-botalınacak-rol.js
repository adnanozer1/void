const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bottan alınacak rolü sıfırlama.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunca otomatik alınacak rol sıfırlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(sıfırlandı)
db.delete(`balınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bottan alınacak rolü ayarlama.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunca alınacak rolü belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlanmadı)
}
db.set(`balınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bottan alınacak rolü ayarlama.`)
.setColor(0x36393F)
.setDescription(` Kayıt olunca otomatik alınacak rol başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['botalınacak', 'bota', 'bot-a'],
  permlevel: 0
}
exports.help = {
  name: 'bot-alınacak',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'bot-alınacak @rol'
}