const adaletcanseks = require('discord.js');
const db = require("../schemas/market")
const ButtonPages = require('discord-button-pages');
const DiscordButtons = require('discord-buttons');

module.exports = {
    conf: {
      aliases: [],
      name: "market",
      help: "market",
    },
    run: async (client, message, args, embed, kinoshi, prefix) => {
      let eşya = await db.find({guild: message.guild.id})
      //message.channel.send(embed.setAuthor(`${message.guild.name} Market`, message.guild.iconURL({dynamic: true})).setDescription(`${eşya.map(function(a) { return `**:coin: ${a.price} - ${a.name}**\n${a.desc}\n` }).slice(0, 30).join("\n")}`))

      const embed1 = new adaletcanseks.MessageEmbed()
      .setAuthor(`${message.guild.name} Market`, message.guild.iconURL({dynamic: true}))
      .setColor("RANDOM")
      .setFooter("Sayfa: 1")
      .setDescription(`<:tik_kinoshi:876867730744176692> Eşya almak için \`${prefix}eşya al <eşya miktar>\`\n\n${eşya.map(function(a) { return `**:coin: ${a.price} - ${a.name}**\n${a.desc}\n` }).slice(0, 30).join("\n") || "<:x_kinoshi:876867730639323187> Bulunamadı"}`)

        const embed2 = new adaletcanseks.MessageEmbed()
        .setAuthor(`${message.guild.name} Market`, message.guild.iconURL({dynamic: true}))
        .setColor("RANDOM")
        .setFooter("Sayfa: 2")
        .setDescription(`${eşya.map(function(a) { return `**:coin: ${a.price} - ${a.name}**\n${a.desc}\n` }).slice(30, 60).join("\n") || "<:x_kinoshi:876867730639323187> Bulunamadı"}`)
      
        const embed3 = new adaletcanseks.MessageEmbed()
        .setAuthor(`${message.guild.name} Market`, message.guild.iconURL({dynamic: true}))
        .setColor("RANDOM")
        .setFooter("Sayfa: 3")
        .setDescription(`${eşya.map(function(a) { return `**:coin: ${a.price} - ${a.name}**\n${a.desc}\n` }).slice(60, 120).join("\n") || "<:x_kinoshi:876867730639323187> Bulunamadı"}`)
      
          var embedPages = [embed1, embed2, embed3];
          ButtonPages.createPages(client.interaction, message, embedPages, 60 * 1000, "green", "▶️", "◀️", "876867730639323187");
    },
};