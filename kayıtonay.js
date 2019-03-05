const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = (client, message, args) => {
db.fetch(`kod_${message.author.id}`).then(kod => {
  if(args[0] !== kod) return message.reply("Hata! Kodunu Kontrol Et").then(msg => msg.delete(10000))
  else {
  message.delete()
  var alrol = message.guild.roles.get('546365394571624459');   
      
  var silrol = message.guild.roles.get('546365326837809182');   
      
  message.member.removeRole(silrol);   
      
  message.member.addRole(alrol);  
    
   message.channel.send("Kayıt Oldun").then(msg => msg.delete(10000))
    
  db.delete(`kod_${message.author.id}`)
  }

})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıtonay',
  kategori: "sunucuozel",
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};