const fs = require('node:fs');
const path = require('node:path');

const commandsPath = path.join(__dirname, '..', 'commands');

function loadCommands() {
  const commands = new Map();

  for (const folder of fs.readdirSync(commandsPath)) {
    const folderPath = path.join(commandsPath, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    for (const file of fs.readdirSync(folderPath).filter((f) => f.endsWith('.js'))) {
      const command = require(path.join(folderPath, file));

      if (!command.data || typeof command.execute !== 'function') {
        console.warn(`[comandos] Ignorado ${folder}/${file}: precisa exportar "data" e "execute".`);
        continue;
      }

      commands.set(command.data.name, command);
    }
  }

  return commands;
}

module.exports = { loadCommands };
