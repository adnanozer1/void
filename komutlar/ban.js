const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(`Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın!`);
  
 let kullanici = message.mentions.users.first()
 if(!kullanici) return message.channel.send(`${message.author} Banlayacağın kişiyi etiketlemelisin!`)

const embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`${kullanici.tag} isimli kullanıcı banlandı.`)
.setImage(`https://c.tenor.com/7ofW_JnA1psAAAAC/banned-thor.gif`)
message.channel.send(embed)
  message.guild.members.ban(kullanici)
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0,
    kategori: "moderasyon",
    };
      
    exports.help = {
        name: 'ban',
        description: 'ban',
        usage: 'ban',
    
    };