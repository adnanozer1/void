const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Bot kayıtçı rol sıfırlama.`)
.setColor(0x36393F)
.setDescription(`Sunucu için ayarladığınız bot kayıtçı rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Piedra`)
message.channel.send(sıfırlandı)
db.delete(`botkayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bot kayıtçı rol ayarlama.`)
.setColor(0x36393F)
.setDescription(` Ayarlayacağınız bot kayıtçı rolünü belirtiniz!`)
.setThumbnail(client.user.avatarUR())
.setFooter(`Piedra`)
message.channel.send(ayarlanmadı)
}
db.set(`botkayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bot kayıtçı rol ayarlama.`)
.setColor(0x36393F)
.setDescription(` Botu kayıt edecek rol başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Piedra`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['bot-yetkili','botyetkili','botkayıtçırol', 'botkayıtçı','bot-kayıt-yetkili','botkayıtyetkili'],
  permlevel: 0
}
exports.help = {
  name: 'bot-kayıtçı',
  description: 'Bot Kayıtçı rolünü ayarlar',
  usage: '.bot-rol @rol'
}