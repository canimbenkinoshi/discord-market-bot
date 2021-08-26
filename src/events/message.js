const settings = require("../configs/settings.json");
const { MessageEmbed } = require("discord.js");
const client = global.client;

/**
 * @param { Client } client
 * @param { Message } message
 */

module.exports = async (message) => {
  const prefix = settings.prefix.find((x) => message.content.toLowerCase().startsWith(x));
  if (message.author.bot || !message.guild || !prefix) return;
  let args = message.content.substring(prefix.length).trim().split(" ");
  let commandName = args[0].toLowerCase();

  const kinoshi = await client.users.fetch("671099941149474837");
  const embed = new MessageEmbed()
    .setColor("RANDOM")

  args = args.splice(1);
  const cmd = client.commands.get(commandName) || client.commands.array().find((x) => x.conf.aliases && x.conf.aliases.includes(commandName));
  if (!cmd || cmd.conf.owner && !settings.owners.includes(message.author.id)) return;
      cmd.run(client, message, args, embed, kinoshi, prefix);
};

module.exports.conf = {
  name: "message",
};
