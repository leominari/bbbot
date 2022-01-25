import {Client, Message} from "discord.js";
import {CommandHelper} from "../models/commandHelper";
import {Command} from "../intefaces/command";

export default class Start implements Command {
    run(client: Client, message: Message, args: Array<string>, browser: any): boolean {
        (async () => {
            const page = await browser.newPage();
            await page.goto('https://www.google.com');
            // other actions...
            // await browser.close();
        })();

        message.reply(`pong!`).then(async message => {
            await message.react('🤔');
        });

        return true;
    }

    help(): CommandHelper {
        return new CommandHelper("start bbb", "Start BBB Stream", "start", this.run);
    }
}