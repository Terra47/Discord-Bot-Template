const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Mostra a latência do bot.'),

  async execute(interaction) {
    const { resource } = await interaction.reply({ content: 'Pong!', withResponse: true });
    const roundtrip = resource.message.createdTimestamp - interaction.createdTimestamp;

    await interaction.editReply(
      `Pong! Ida e volta: **${roundtrip}ms** · WebSocket: **${interaction.client.ws.ping}ms**`,
    );
  },
};
