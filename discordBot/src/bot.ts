import * as Discord from "discord.js";

const { BOT_TOKEN, BOT_PREFIX } = process.env;

export default class DiscordBot {
  private client: Discord.Client;

  constructor() {
    this.init();
  }

  init() {
    this.client = new Discord.Client();

    this.addHandlers();
  }

  start() {
    this.client.login(BOT_TOKEN);
  }

  addHandlers() {
    this.client.on("message", this.handleMessage);
    this.client.on("ready", this.handleReady);
  }

  handleReady() {
    console.log(`Bot started!`);
  }

  handleMessage(message: Discord.Message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(BOT_PREFIX)) return;

    const commandBody = message.content.slice(BOT_PREFIX.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();

    switch (command) {
      case "start":
        this.commandStart(message, args);
        break;

      case "sum":
        this.commandSum(message, args);
        break;
    }
  }

  commandStart(message: Discord.Message, args: string[]) {
    message.reply("Start brabo " + args.join(" - "));
  }

  commandSum(message: Discord.Message, args: string[]) {
    let sumTotal = 0;

    args.forEach((arg) => (sumTotal += parseFloat(arg)));

    message.reply(`Total ${sumTotal}`);
  }
}
