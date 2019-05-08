import * as TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";
import { Log } from "@uk/log";
import { MainMenu } from "./states/main";
import { getTemp, getSystemLoad } from "./orange";
import { StatusMenu } from "./states/status";

dotenv.config();
const log  = new Log(__filename);
const bot = new TelegramBot(process.env.TG_BOT_KEY, {polling: true});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Здоровеньки були!", {
    reply_markup: MainMenu
  })
});

bot.onText(/Статус девайсу/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🌡 Температура девайсу: ${getTemp() ? (getTemp() + " ᵒC") : "невідома"}\n📈 Завантаженність системи: ${getSystemLoad() ? getSystemLoad() : "невідома"}\n
    `)
});

bot.onText(/Попрощатися ↩️/, (msg) => {
  bot.sendMessage(msg.chat.id, "На все добре! 👋")
});


//TODO
bot.onText(/Опитати входи/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `// TODO`)
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
  }
});
