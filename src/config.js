try {
  process.loadEnvFile();
} catch {
  console.error('[config] Arquivo .env não encontrado. Copie o .env.example para .env e preencha os valores.');
  process.exit(1);
}

const required = ['DISCORD_TOKEN', 'CLIENT_ID'];
const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`[config] Variáveis ausentes no .env: ${missing.join(', ')}`);
  process.exit(1);
}

module.exports = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID || null,
};
