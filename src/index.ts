import * as TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";
import { Log } from "@uk/log";
import { Main } from "./states/main";

dotenv.config();
const log  = new Log("INDEX");

//TODO разобраться, что такое polling
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.TG_BOT_KEY, {polling: true});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Здоровеньки були!", {
    reply_markup: Main
  })
});

bot.on('message', (msg) => {
  log.debug("On message answer: ", msg);
  
  const chatId = msg.chat.id;
  const botGreeting = "Hello, dear ";
  const botBye = "Bye-bye!";
  const checkGreeting = "hi";
  const checkBye = "bye";
  const robot = "I am robot";
  
  if (msg.text.toString().toLowerCase().indexOf(checkGreeting) === 0) {
    bot.sendMessage(
      chatId,
      botGreeting + "<b>" + msg.from.first_name + "</b>" +"!", {
        parse_mode: "HTML"
      }
    );
  } else if (msg.text.toLowerCase().includes(checkBye)) {
    bot.sendMessage(
      chatId,
      botBye
    );
  } else if (msg.text.toLowerCase().indexOf(robot.toLowerCase()) === 0) {
    bot.sendMessage(
      chatId,
      "Yes, I'm robot but not in that way!"
    );
  } else {
      bot.sendMessage(
      chatId,
      'Не понимаю твою команду ;-('
      );
  }

  // Example: answer on command - send photo to user
  // bot.onText(/\/sendpic/, (msg) => {
  //   bot.sendPhoto(chatId,
  //     "https://ok-vmeste.ru/upload//video/images/small/c9/7b/c97bba99e0b5926c6b67b14a3864a999.jpg",
  //     {caption: "Лови кота!"});
  // })

// Example: answer on sticker
// bot.on("sticker", (msg) => {
//   const answer = "Super sticker you have!";
//   log.debug(answer, msg);
//   const chatId = chatId;
//   bot.sendMessage(chatId, answer);
// })

  // Example: send location
  // const location = "location";
  // if (msg.text.toLowerCase().indexOf(location) === 0) {
  //     bot.sendLocation(chatId, 44.97108, -104.27719);
  //     bot.sendMessage(chatId, "Here is the point");
  // }
  
  // Example: send venue
  // if (msg.text.toLowerCase().indexOf("venue") === 0) {
  //     bot.sendVenue(
  //       chatId,
  //       48.470328,
  //       35.051422,
  //       "Место встречи",
  //       "ул. Сичеславская Набережная, 29"
  //     )
  // }
  
});
