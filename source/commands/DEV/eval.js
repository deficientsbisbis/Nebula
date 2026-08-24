const { EmbedBuilder, Message } = require('discord.js');
const Nebula = require('../../structures/client/index.js');

module.exports = {
    name: 'eval',
    description: 'Évalue du code JavaScript',
    /**
     * 
     * @param {Nebula} client 
     * @param {Message} message 
     * @param {string[]} args 
     * @returns 
     */
    async run(client, message, args) {
        const code = args.join(' ');
        if(!code) return message.reply('Merci de donner un code a eval !')
        try {
            let evalcode = await eval(code);

            if (typeof evalcode !== 'string') {
                evalcode = require('util').inspect(evalcode);
            }
            
            message.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle('Évaluation réussie')
                        .addFields({name: 'Entrée 📥', value: `\`\`\`javascript\n${code}\n\`\`\``})
                        .addFields({name:'Sortie 📤', value: `\`\`\`javascript\n${clean(evalcode)}\n\`\`\``})
                        .setColor(client.color)
                ]
            });
        } catch (err) {
            message.channel.send("Erreur ```js\n"+ err + "```")
        }
    },
};

function clean(text) {
    if (typeof text === 'string') {
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    }
    return text;
}
