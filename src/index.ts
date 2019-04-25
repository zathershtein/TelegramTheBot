import * as TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";
import { Log } from "@uk/log";

dotenv.config();
const log  = new Log("INDEX");

//TODO разобраться, что такое polling
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TG_BOT_KEY, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Старт бота...\nДобро пожаловать!")
});

bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto(msg.chat.id,
    "https://ok-vmeste.ru/upload//video/images/small/c9/7b/c97bba99e0b5926c6b67b14a3864a999.jpg",
    {caption: "Лови кота!"});
})

bot.on('message', (msg) => {
  log.debug("On message answer: ", msg);
  
  const chatId = msg.chat.id;
  const botGreeting = "Hello, dear user!";
  const botBye = "Bye-bye!";
  
  const checkGreeting = "hi";
  const checkBye = "bye";

  if (msg.text.toLowerCase().indexOf(checkGreeting) === 0) {
    bot.sendMessage(msg.chat.id, botGreeting);
  }
  
  if (msg.text.toLowerCase().includes(checkBye)) {
    bot.sendMessage(msg.chat.id, botBye);
  }
  
  
  // bot.sendMessage(chatId, 'Не понимаю твою команду ;-(');
  
});

// Testing
bot.on("sticker", (msg) => {
  const answer = "Super sticker you have!";
  log.debug(answer, msg);
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, answer);
})
