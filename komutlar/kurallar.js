const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(`**|------------------------------------------------------------KURALLAR------------------------------------------------------------|

:pushpin:  Küfür etmek kesinlikle yasaktır, Ailevi küfüre tahamülümüz yoktur ailevi küfür eden sorgusuz sualsiz banlanacaktır!
:pushpin:  Metin kanallarında üst üste aynı içeriğe sahip rahatsız edici mesajlar (SPAM) yazılması yasaktır!
:pushpin:  Metin kanallarında üst üste rahatsız edici mesajlar (FLOOD) yazılması yasaktır!
:pushpin:  Metin kanallarında link paylaşımı yapılması yasaktır!
:pushpin:  Uygunsuz kullanıcı adı ve profil fotoğrafları kullanılması yasaktır!
:pushpin:  Yetkiliye karşı gelmek ve dalga geçmek yasaktır!
:pushpin:  Siyaset ve din hakkında konuşmak yasaktır!
:pushpin:  Başkalarını rahatsız edecek şeyler söylemek yasaktır!
:pushpin:  Ses veya metin kanallarını trollemek yasaktır!
:pushpin:  Herhangi bir platform, oyun vb. hesapların satışı/takası yapılması yasaktır!
:pushpin:  Başka discord, yayıncı ve çekilişlerin reklamları yasaktır!
:pushpin:  Cinsel, kan ve vahşet içerikli şeyler paylaşmak yasaktır!
:pushpin:  Metin kanallarını amacı dışında kullanmak yasaktır!
:pushpin:  Kavga etmek yasaktır!
:pushpin:  Sorun olursa yetkililere ulaşabilirsiniz!
||@everyone&@here||**
`)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rules'],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};