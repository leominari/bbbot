export class CommandHelper {
    name: string;
    description: string;
    usage: string;
    runFunction: Function;

    constructor(name: string, description: string, usage: string, runFunction: Function) {
        this.name = name;
        this.description = description;
        this.usage = usage;
        this.runFunction =  runFunction;
    }
}