const settings = require("../configs/settings.json");
const { MessageEmbed } = require("discord.js");
const ButtonPages = require('discord-button-pages');
const DiscordButtons = require('discord-buttons');
const client = global.client;

/**
 * @param { Client } client
 * @param { Message } message
 */

module.exports = async (button) => {
    ButtonPages.buttonInteractions(button, client.interaction);
};

module.exports.conf = {
  name: "clickButton",
};