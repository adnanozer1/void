const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let akanal = db.fetch(`abonekanal_${message.guild.id}`)
let abonerol = db.fetch(`abonerol_${message.guild.id}`)
let aboneyetkili = db.fetch(`aboneyetkili_${message.guild.id}`)

if(!message.member.roles.cache.has(aboneyetkili)) return message.channel.send(`Bu komudu kullanabilmen için <@&${aboneyetkili}> adlı role sahip olman lazım!`)
if(message.channel.id !== akanal) return message.channel.send(` Bu komudu sadece <#${akanal}> adlı kanalda kullanabilirsin!`)
if (!abonerol) return message.channel.send(`Sunucuda abone rolü ayarlanmadığı için komut kullanılamaz!`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`Abone rolünü vereceğin kullanıcıyı belirtmelisin!`)
member.roles.add(abonerol)

const başarıli = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Abone Rol`)
.setColor(0x36393F)
.setDescription(` Abone rolü verilen: ${member} \n Abone rolünü veren yetkili: <@!${message.author.id}>`)
.addField(`Kullanıcının Rolü:`, `${abonerol}`, true)
.setThumbnail(member.avatarURL())
.setFooter(`Piedra`)
message.channel.send(başarıli)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['a'],
  permlevel: 0
}
exports.help = {
  name: 'abone',
  description: 'abone rolü verir',
  usage: '.abone @kullanıcı isim yaş'
}