import "dotenv/config";
import * as Discord from "discord.js";

const { BOT_TOKEN, BOT_PREFIX } = process.env;

const client = new Discord.Client();

const handleReady = () => {
  console.log(`Bot started!`);
};

const handleMessage = (message: Discord.Message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(BOT_PREFIX)) return;

  const commandBody = message.content.slice(BOT_PREFIX.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  switch (command) {
    case "start":
      start(message, args);
      break;

    case "sum":
      sum(message, args);
      break;
  }
};

client.on("message", handleMessage);
client.on("ready", handleReady);

client.login(BOT_TOKEN);

const start = (message: Discord.Message, args: string[]) => {
  message.reply("Start brabo " + args.join(" - "));
};

const sum = (message: Discord.Message, args: string[]) => {
  let sumTotal = 0;

  args.forEach((arg) => (sumTotal += parseFloat(arg)));

  message.reply(`Total ${sumTotal}`);
};
