import {Client, Message} from "discord.js";
import {CommandHelper} from "../models/commandHelper";
import {Command} from "../intefaces/command";

export default class Ping implements Command {
    run(client: Client, message: Message, args: Array<string>): boolean {
        message.reply(`pong!`).then(async message => {
            await message.react('🤔');
        });

        return true;
    }

    help(): CommandHelper {
        return new CommandHelper("ping", "Ping the bot", "ping", this.run);
    }
}