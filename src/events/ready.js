const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`[bot] Online como ${client.user.tag} em ${client.guilds.cache.size} servidor(es).`);
  },
};
