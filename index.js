const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "ProHunterz301.aternos.me", // Change this to your real Aternos host
  port: 13487,                      // Change this to your real Aternos port
  username: "AFKboot12"
});

bot.on('login', () => {
  console.log("✅ Bot logged in successfully");
});

bot.on('spawn', () => {
  console.log("✅ Bot spawned in the world");
  bot.chat("Hello world! AFKbot12 is online.");
});

bot.on('kicked', (reason) => {
  console.log("❌ Bot was kicked:", reason);
});

bot.on('error', (err) => {
  console.log("❌ Connection error:", err);
});

bot.on('end', () => {
  console.log("⚠️ Bot disconnected from server");
});
