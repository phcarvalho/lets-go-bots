import DiscordBot from "./bot";

class App {
  private discordBot: DiscordBot;

  constructor() {
    this.init();
  }

  init() {
    this.discordBot = new DiscordBot();
  }

  start() {
    this.discordBot.start();
  }
}

export default new App();
