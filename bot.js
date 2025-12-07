const mineflayer = require("mineflayer");

let bot = mineflayer.createBot({
  host: "Nainiwalranvir.aternos.me",
  port: 17633,
  username: "ScoutBot",
  version: "1.21.1"
});

bot.on("login", () => {
  console.log("Bot joined the server!");
});

bot.on("error", err => console.log(err));
bot.on("end", () => console.log("Bot disconnected"));
