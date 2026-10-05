const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('eco')
    .setDescription('Repete a mensagem que você enviar.')
    .addStringOption((option) =>
      option
        .setName('mensagem')
        .setDescription('O texto a ser repetido.')
        .setRequired(true)
        .setMaxLength(2000),
    )
    .addBooleanOption((option) =>
      option
        .setName('privado')
        .setDescription('Se verdadeiro, só você vê a resposta.'),
    ),

  async execute(interaction) {
    const mensagem = interaction.options.getString('mensagem', true);
    const privado = interaction.options.getBoolean('privado') ?? false;

    await interaction.reply({
      content: mensagem,
      flags: privado ? MessageFlags.Ephemeral : undefined,
      // Impede que o eco seja usado para mencionar @everyone, cargos ou usuários.
      allowedMentions: { parse: [] },
    });
  },
};
