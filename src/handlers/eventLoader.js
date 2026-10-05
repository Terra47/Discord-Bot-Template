const fs = require('node:fs');
const path = require('node:path');

const eventsPath = path.join(__dirname, '..', 'events');

// Registra cada arquivo de src/events como listener do client.
function loadEvents(client) {
  for (const file of fs.readdirSync(eventsPath).filter((f) => f.endsWith('.js'))) {
    const event = require(path.join(eventsPath, file));

    if (!event.name || typeof event.execute !== 'function') {
      console.warn(`[eventos] Ignorado ${file}: precisa exportar "name" e "execute".`);
      continue;
    }

    const handler = (...args) => event.execute(...args, client);
    if (event.once) client.once(event.name, handler);
    else client.on(event.name, handler);
  }
}

module.exports = { loadEvents };
