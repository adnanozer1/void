const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz.");
  
  let bayrak = db.fetch(`Floxybayrak_${user.id}`) || `Ayarlanmamış` 
  let cinsiyet = db.fetch(`FloxyCinsiyet_${user.id}`) || `Ayarlanmamış`
  let isim = db.fetch(`Floxyİsim_${user.id}`) || `Ayarlanmamış`
  let soyisim = db.fetch(`FloxySoyisim_${user.id}`) || `Ayarlanmamış`
  let yas = db.fetch(`FloxyYas_${user.id}`) || `Ayarlanmamış`
  
  
const Asreaper = new Discord.MessageEmbed()

.setColor("#ff0000")
.setAuthor(`${isim} ${soyisim} Adlı kişinin profili aşağıda bulunuyor.`)
.setThumbnail(user.avatarURL())
.setDescription(`

•**Bayrak:** ${bayrak}
║══════════════════════
•**Cinsiyet:** ${cinsiyet}
║══════════════════════
•**İsim:** ${isim}
║══════════════════════
•**Soy İsim:** ${soyisim}
║══════════════════════
•**Yaş:** ${yas}

`)

return message.channel.send(Asreaper);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profil",
  description: "profil",
  usage: "profil",
  kategori: "Profil"
};