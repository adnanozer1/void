const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Asreaper Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Bot kayıt kanalı sıfırlama.`)
.setColor(0x36393F)
.setDescription(` Botun kayıt edilecek kanalı başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Zed`)
message.channel.send(sıfırlandı)
db.delete(`botkayıt_${message.guild.id}`)
return;
}

let bkanal = message.mentions.channels.first();   
if (!bkanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bot kayıt kanalı ayarlama.`)
.setColor(0x36393F)
.setDescription(` Botun kayıt edilecek kanalı belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Zed`)
message.channel.send(ayarlanmadı)
}
db.set(`botkayıt_${message.guild.id}`, bkanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bot kayıt kanalı ayarlama.`)
.setColor(0x36393F)
.setDescription(` Botun kayıt edilecek kanalı ${bkanal} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Zed`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['botkanal', 'bkanal', 'b-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'bot-kanal',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: '.bot-kanal #kanal'
}