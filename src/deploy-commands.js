// Registra (ou atualiza) os slash commands no Discord.
// Rode sempre que criar, remover ou alterar a definição de um comando: npm run deploy
const { REST, Routes } = require('discord.js');
const { token, clientId, guildId } = require('./config');
const { loadCommands } = require('./handlers/commandLoader');

const body = [...loadCommands().values()].map((command) => command.data.toJSON());
const rest = new REST().setToken(token);

(async () => {
  try {
    const route = guildId
      ? Routes.applicationGuildCommands(clientId, guildId)
      : Routes.applicationCommands(clientId);

    const data = await rest.put(route, { body });

    const destino = guildId ? `no servidor ${guildId}` : 'globalmente';
    console.log(`[deploy] ${data.length} comando(s) registrado(s) ${destino}.`);
  } catch (error) {
    console.error('[deploy] Falha ao registrar os comandos:', error);
    process.exitCode = 1;
  }
})();
