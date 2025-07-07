const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "ProHunterz301.aternos.me", // Make sure this is your correct Aternos hostname
  port: 13487,                      // Make sure this is your correct Aternos port
  username: "AFKboot12"             // New username
});

bot.on('chat', (username, message) => {
  console.log(`<${username}> ${message}`);
});

bot.on('kicked', (reason) => console.log('Kicked:', reason));
bot.on('error', (err) => console.log('Error:', err));

bot.on('end', () => console.log('Bot disconnected (end event)'));
bot.on('login', () => console.log('✅ Bot logged in successfully'));
bot.on('spawn', () => console.log('✅ Bot spawned in the world'));
