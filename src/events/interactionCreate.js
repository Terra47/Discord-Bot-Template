const { Events, MessageFlags } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) {
      console.warn(`[comandos] Comando desconhecido: /${interaction.commandName}`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`[comandos] Erro ao executar /${interaction.commandName}:`, error);

      const reply = {
        content: 'Ocorreu um erro ao executar este comando.',
        flags: MessageFlags.Ephemeral,
      };

      try {
        if (interaction.replied || interaction.deferred) await interaction.followUp(reply);
        else await interaction.reply(reply);
      } catch (replyError) {
        console.error('[comandos] Não foi possível avisar o usuário sobre o erro:', replyError);
      }
    }
  },
};
