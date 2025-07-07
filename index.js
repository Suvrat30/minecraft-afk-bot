const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "ProHunterz301.aternos.me", // ← your exact Aternos IP
  port: 13487,                      // ← your Aternos port
  username: "AFKboot12"            // ← unique name (not your real Minecraft account)
});

bot.on('login', () => {
  console.log("✅ Bot logged in successfully");
});

bot.on('spawn', () => {
  console.log("✅ Bot spawned in the world");
  bot.chat("I am online! AFKbot12 here.");
});

bot.on('chat', (username, message) => {
  console.log(`<${username}> ${message}`);
});

bot.on('kicked', (reason) => {
  console.log("❌ Kicked from server:", reason);
});

bot.on('error', (err) => {
  console.log("❌ Error:", err);
});

bot.on('end', () => {
  console.log("⚠️ Bot disconnected");
});
