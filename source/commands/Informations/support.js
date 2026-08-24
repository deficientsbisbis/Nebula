const { EmbedBuilder } = require('discord.js')
const Nebula = require('../../structures/client/index')

module.exports = {
    name: "support",
    aliases: ["nebula"],
    description: {
        fr: "Invite sur le support du bot !",
        en: "Invite to the bot support!"
    },
    /**
     * 
     * @param {Nebula} client 
     * @param {Nebula} message 
     * @param {Nebula} args 
     * @returns 
     */
    run: async (client, message, args) => {

        await message.channel.send({
            embeds: [new EmbedBuilder().setColor(client.color).setDescription(`[Clique ici pour rejoindre le support Nebula Bots](${client.support})`)]
        })
    }
}