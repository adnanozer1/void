const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  if(!args[0]) return message.channel.send(`**Lütfen Silinicek Mesaj Miktarını Yazın.!**`);
  
  message.channel.bulkDelete(args[0]).then(() => {    
  client.channels.cache.get(logkanal).send(
  
  (new Discord.MessageEmbed()
  .setColor("#F8C300") // embed mesajımınız rengi eğer RANDOM yazarsanız her kullanımda farklı renk atar
  .setTitle("Temizle Log") // başlık kısmımız
  .setDescription(`${message.channel} üzerinde **${args[0]}** mesaj sildim.`) // açıklama
  .addField("Mesajları silen yetkili" , `${message.member}`) // Silen yetkiliyi gösterdiği kısım
  .setFooter(client.user.username, client.user.avatarURL()) // en alt kısım genellikle bot adını yazıyorum
  .setTimestamp() // en sağ altta saati söyler eğer istemiyorsanız bu kod satırını silebilirsin.
));
    
    return message.channel.send(`${message.author}, `+`${args[0]}`+' adet mesaj başarıyla silindi.').then(m => m.delete({timeout: 4000}));
})
}


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['sil','temizle','süpür'],
permLevel: 2,
};
exports.help = {
name:'temizle',
description: 'Belirlenen miktarda mesajı siler.',
usage: 'temizle <silinicek mesaj sayısı>'
};
