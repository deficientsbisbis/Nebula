const { EmbedBuilder } = require('discord.js');
const Nebula = require('../../structures/client/index.js');

module.exports = {
  name: 'ping',
  aliases: ['latency', "latence", "ms"],
  description: {
    fr: "Affiche la latence du bot",
    en: "Displays bot latency"
  },
  /**
   * 
   * @param {Nebula} client 
   * @param {Nebula} message 
   * @param {Nebula} args 
   */
      run: async(client, message, args) => {
 
    message.channel.send({content: await client.lang('ping.ping') +` **${client.ws.ping}ms**` });
  }
}
