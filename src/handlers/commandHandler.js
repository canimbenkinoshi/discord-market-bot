const fs = require("fs");
const client = global.client;

/**
 * @param { Client } client
 */

fs.readdir("./src/commands/", (err, files) => { //
	if (err) console.error(err);
	files.forEach((f) => {
		const props = require(`../commands/${f}`);
		client.logger.log(`${props.conf.name} loaded!`, "log");
		client.commands.set(props.conf.name, props);
	});
});