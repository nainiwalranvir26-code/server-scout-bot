const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: "nainiwalranvir.aternos.me",
  port: 17633,
  username: "ServerScoutBot",
  version: "1.21.1"    // VERY IMPORTANT
})

bot.on('login', () => {
  console.log("Bot joined the server successfully!")
})

bot.on('error', err => {
  console.log("Bot error:", err)
})

bot.on('end', () => {
  console.log("Bot disconnected, retrying in 10 seconds...")
  setTimeout(() => bot(), 10000)
})
