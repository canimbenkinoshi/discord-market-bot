const CronJob = require("cron").CronJob;
const client = global.client;

/**
 * @param { Client } client
 */

module.exports = async () => {
client.user.setPresence({ activity: { name: "One Piece", type: "WATCHING" }, status: "dnd" });
};

module.exports.conf = {
  name: "ready",
};
