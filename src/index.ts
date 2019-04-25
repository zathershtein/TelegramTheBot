import * as TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";

dotenv.config();

//TODO разобраться, что такое polling
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TG_BOT_KEY, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});







// const Telegraf = require('telegraf')

// // import Telegraf from "telegraf";

// //TODO choose right type for ctx
// const bot = new Telegraf(<string>process.env.TG_BOT_KEY);
// bot.start((ctx: any) => ctx.reply('Welcome!'));
// bot.help((ctx: any) => ctx.reply('Send me a sticker'));
// bot.on('sticker', (ctx: any) => ctx.reply('👍'));
// bot.hears('hi', (ctx: any) => ctx.reply('Hey there'));
// bot.launch();
