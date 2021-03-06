import {Client, Message} from "discord.js";
import {CommandHelper} from "../models/commandHelper";

export interface Command {
    run(client: Client, message: Message, args: Array<string>, browser: any): boolean;

    help(): CommandHelper;
}