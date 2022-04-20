const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(client.user.username)
.setThumbnail('https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fe4d668d1400a3a4541f861cb383074e6.gif')
.addField('• Reddit Atatürk', '[Reddit](https://humanova.github.io/rplace-turkey/ataturk)', true)
.addField('• Visit Website', '[Website](https://visionsite.glitch.me)', true))
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ratatürk','redditatatürk'],
  permLevel: 0
}

exports.help = {
  name: 'reddit-atatürk'
};