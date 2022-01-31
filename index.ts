import DiscordJS, {Intents} from "discord.js";
import dotenv from "dotenv";
import {readdirSync} from "fs";
import {CommandHelper} from "./src/models/commandHelper";

dotenv.config();

const commandsPath = "./src/commands/";
const cmdFiles = readdirSync(commandsPath);
const prefix = process.env.PREFIX || "";
const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
let commands: CommandHelper[] = [];


Promise.all(cmdFiles.map(async (f): Promise<CommandHelper> => {

    const importedCommand = await import(commandsPath + f);

    return await (new importedCommand.default()).help();

})).then(cmds => commands = cmds);


client.on("ready", async () => {
    console.log('Bot is ready!');
    console.log(`[COMMANDS LOADED] ${commands.length}`);
    commands.forEach(cmd => {
        console.log(`[COMMAND] ${cmd.name} IS LOADED`);
    });

});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        let args: Array<string> = message.content.slice(prefix.length).split(/ +/);
        let command: string = (args.shift() || "").toLowerCase();

        commands.find(cmd => cmd.usage === command)?.runFunction(client, message, args);
    }
});

client.login(process.env.TOKEN).then(() => {
    console.log("Bot is online!");
});
