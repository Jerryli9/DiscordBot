const Discord = require("discord.js")
require("dotenv").config()
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Bot has logged in')
})

client.on("messageCreate", (message) => {
    if (message.content === "hi"){
        message.reply("Hello! How may I help you?")
    }
})

client.login(process.env.TOKEN)
