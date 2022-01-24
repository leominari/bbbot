import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const prefix = process.env.PREFIX || "";

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Foi carai");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  console.log(client.commands);
  if (message.content.startsWith(prefix)) {
    let args: Array<string> = message.content.slice(prefix.length).split(/ +/);
    let command: string = (args.shift() || "").toLowerCase();

    if (command === "ping") {
      message.reply({
        content: "ping é o caralho",
      });
    }
  }
});

client.login(process.env.TOKEN);
