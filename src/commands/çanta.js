const adaletcanseks = require('discord.js');
const idb = require("../schemas/çanta")

module.exports = {
    conf: {
      aliases: [],
      name: "çanta",
      help: "çanta",
    },
    run: async (client, message, args, embed, kinoshi, prefix) => {
      let çanta = await idb.find({guild: message.guild.id, user: message.author.id})
      if(!çanta) return message.channel.send(`<:x_kinoshi:876867730639323187> Çantanda hiç eşya yok`)
let k;
      const embedd = new adaletcanseks.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
        .setColor("RANDOM")
        .setDescription(`${çanta.map(function(a) { return `**${a.tane} - ${a.name}**\n${a.desc}\n` }).slice(0, 60).join("\n")}`)
        message.channel.send(embedd)
    },
};