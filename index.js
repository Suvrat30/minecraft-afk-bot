const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: "ProHunterz301.aternos.me",
    port: 13487, // ✅ Use your current Aternos port
    username: "AFKbot45"
  });

  bot.on('chat', (username, message) => {
    console.log(`<${username}> ${message}`);
  });

  bot.on('kicked', (reason) => {
    console.log('Kicked:', reason);
  });

  bot.on('error', (err) => {
    console.log('Error:', err);
  });

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting in 5 sec...');
    setTimeout(createBot, 5000);
  });
}

createBot();
