const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const settings = require("./src/configs/settings.json");
const button = require("discord-buttons")(client)
client.logger = require("./logger.js")
client.interaction = {};
client.commands = new Collection();
client.cooldown = new Map();
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client
  .login(settings.token)
  .then(() => client.logger.log("Bot connected!", "cmd"))
  .catch(() => client.logger.log("Bot can't connected!","cmd"));