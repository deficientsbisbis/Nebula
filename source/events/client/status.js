const Discord = require("discord.js");
const Nebula = require("../../structures/client/index");

module.exports = {
    name: "ready",
    /**
     *
     * @param {Nebula} client
     */
    run: async (client) => {
       setInterval(async () => {
            const db = await client.db.get(`status`)
            const presenceOptions = {
                status: db?.status || 0,
                activities: [{
                    name: db?.name || "Nebula V" + client.version + " .gg/nebula",
                    type: db?.type || 4,
                    url: "https://twitch.tv/oni145"

                }]
            };
            client.user.setPresence(presenceOptions)

        }, 5000)
    }
};
