const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config');
const { loadCommands } = require('./handlers/commandLoader');
const { loadEvents } = require('./handlers/eventLoader');

// Guilds é o único intent necessário para slash commands.
// Adicione outros (ex.: GuildMessages, MessageContent) só se for usá-los.
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = loadCommands();
console.log(`[bot] ${client.commands.size} comando(s) carregado(s).`);

loadEvents(client);

// Rede de segurança: registra erros inesperados em vez de derrubar o processo.
client.on('error', (error) => console.error('[client] Erro:', error));
process.on('unhandledRejection', (reason) => console.error('[processo] Promise rejeitada sem tratamento:', reason));
process.on('uncaughtException', (error) => console.error('[processo] Exceção não capturada:', error));

client.login(token).catch((error) => {
  console.error('[bot] Falha no login. Verifique o DISCORD_TOKEN no .env.', error.message);
  process.exitCode = 1;
  client.destroy();
});
