const adaletcanseks = require('discord.js');
const idb = require("../schemas/çanta")

module.exports = {
    conf: {
      aliases: ["help"],
      name: "yardım",
      help: "yardım",
    },
    run: async (client, message, args, embed, kinoshi, prefix) => {
        message.channel.send(embed.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true})).setDescription(client.commands.filter((x) => x.conf.help).sort((a, b) => b.conf.help - a.conf.help).map((x) => `\`${prefix}${x.conf.help}\``).join("\n")))
    },
};