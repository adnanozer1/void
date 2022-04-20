const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')
const DBL = require('dblapi.js')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + max;
}



exports.run = async (client, message, args) => {
    let timeout = 604800000 //bunu ellemeyin 1 hafta 

    let daily = await db.fetch(`haftalıkkullanimgodareçdare1-${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Haftalık Maaşını tekrar alabilmek için **${time.days} gün ${time.hours} saat ${time.minutes} dakika ${time.seconds} saniye** beklemelisin!`)
    } else {
      if(client.ekoayarlar2.dbloy == false) {
        db.set(`haftalıkkullanimgodareçdare1-${message.author.id}`, Date.now())
        if(client.ekoayarlar2.rastgelepara == true) {
          const randomizer = getRandomInt(client.ekoayarlar2.minpara, client.ekoayarlar2.maxpara)
          db.add(`bakiyecdare-${message.author.id}`, randomizer)
          let para2 = new Discord.MessageEmbed()
          .setColor(client.ekoayarlar2.renk)
          .setTitle('🏦 LuciBanK')
          .addField(`💳 Maaşınız Hesabınıza Yatırıldı;`, randomizer + ` ${client.ekoayarlar2.parabirimi}`)
          message.channel.send(para2)
        } else {
          if(client.ekoayarlar2.rastgelepara == false) {
            db.add(`bakiyecdare-${message.author.id}`, client.ekoayarlar2.haftalıkpara)
            let para2 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar2.renk)
            .setTitle('🏦 LuciBanK')
            .addField(`💳 Maaşınız Hesabınıza Yatırıldı;`, client.ekoayarlar2.haftalıkpara + ` ${client.ekoayarlar2.parabirimi}`)
            message.channel.send(para2)
          }
        }
      } else {
        if(client.ekoayarlar2.dbloy == true) {
          const dbl = new DBL(client.ekoayarlar2.dblkey, client)
          dbl.hasVoted(message.author.id).then(voted => {
            if(voted) {
              db.set(`haftalıkkullanimgodareçdare1-${message.author.id}`, Date.now())
              if(client.ekoayarlar2.rastgelepara == true) {
                const randomizer = getRandomInt(client.ekoayarlar2.minpara, client.ekoayarlar2.maxpara)
                db.add(`bakiyecdare-${message.author.id}`, randomizer)
                let para2 = new Discord.MessageEmbed()
                .setColor(client.ekoayarlar2.renk)
                .setDescription(`**🏫 Banka**`)
                .addField(`💼 Aldığınız Maaş;`, randomizer + ` ${client.ekoayarlar2.parabirimi}`)
                message.channel.send(para2)
              } else {
                if(client.ekoayarlar2.rastgelepara == false) {
                  db.add(`bakiyecdare-${message.author.id}`, client.ekoayarlar2.haftalıkpara)
                  let para2 = new Discord.MessageEmbed()
                  .setColor(client.ekoayarlar2.renk)
                  .setDescription(`**🏫 Banka**`)
                  .addField(`💼 Aldığınız Maaş;`, client.ekoayarlar2.haftalıkpara + ` ${client.ekoayarlar2.parabirimi}`)
                  message.channel.send(para2)
                }
              }
            } else {
              return message.channel.send(`${client.ekoayarlar2.dblmsj}`)
            }
          })
        }
      }
   }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['haftalık-maaş','maaş'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'haftalıkmaaş',
    description: 'Haftalık para alırsınız.',
    usage: 'haftalıkmaaş'
}