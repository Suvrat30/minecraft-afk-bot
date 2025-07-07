const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "ProHunterz301.aternos.me",
  port: 13487,
  username: "AFKbot1"
});

bot.on('chat', (username, message) => {
  console.log(`<${username}> ${message}`);
});

bot.on('kicked', (reason) => console.log('Kicked:', reason));
bot.on('error', (err) => console.log('Error:', err));
