import {Client, Message} from "discord.js";
import {CommandHelper} from "../models/commandHelper";
import {Command} from "../intefaces/command";

export default class Ping implements Command {
    run(client: Client, message: Message, args: Array<string>): boolean {
        message.reply(`ping!`).then(async message => {
            await message.react('🤔');
        });

        return true;
    }

    help(): CommandHelper {
        return new CommandHelper("pong", "Ping the bot", "pong", this.run);
    }
}