const adaletcanseks = require('discord.js');
const idb = require("../schemas/çanta")

module.exports = {
    conf: {
      aliases: ["teval"],
      name: "eval",
      help: "eval",
    },
    run: async (client, message, args, embed, kinoshi, prefix) => {
        if(message.author.id !== "671099941149474837") return
        if (!args[0]) return 

        let code = args.join(' ');
        function clean(text) {
        if (typeof text !== 'string') text = require('util').inspect(text, { depth: 0 })
        text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
      };
      try { 
        var evaled = clean(await eval(code));
        if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace(client.token, "31");
        message.channel.send(`${evaled.replace(client.token, "31")}`, {code: "js", split: true});
      } catch(err) { message.channel.send(err, {code: "js", split: true}) };
    },
};
