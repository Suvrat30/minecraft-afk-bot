const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: "ProHunterz301.aternos.me",
    port: 13487,
    username: "animez.creator",
    auth: "microsoft",
  });

  bot.on('login', () => {
    console.log("✅ Bot logged in!");
  });

  bot.on('end', () => {
    console.log("❌ Bot disconnected. Reconnecting...");
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log("Error:", err);
  });
}

createBot();

// Keep-alive web server
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(3000, () => console.log('✅ Web server running'));
