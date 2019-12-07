import * as TelegramBot from "node-telegram-bot-api";
import * as dotenv from "dotenv";
import { Log } from "@uk/log";

import { mainMenu } from "./states/mainmenu";
import { stateMenu } from "./states/devicestatemenu";

import { getSysInfo } from "./orange";
import { PATH_TO } from "../constants";
import { StartMenu } from "./states/startmenu";
import { chooseIO } from "./states/inlinechooseio";
import { takePicture, webcam } from "./orange/node-webcam";

dotenv.config();
const log = new Log(__filename);

const { TELEGRAM_BOT_TOKEN } = process.env;
if (TELEGRAM_BOT_TOKEN) {
    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

    bot.onText(/\/start|Старт/, async msg => {
        await bot.sendMessage(msg.chat.id, "Здоровеньки були!", {
            reply_markup: mainMenu,
        });
    });

    bot.onText(/\/help/, async msg => {
        await bot.sendMessage(msg.chat.id, "Тут буде опис, що має та може робити бот...");
    });

    bot.onText(/Статус девайсу/, async msg => {
        const temp = getSysInfo(PATH_TO.TEMP).temp;
        const load = getSysInfo(PATH_TO.LOAD).load;
        const mem = getSysInfo(PATH_TO.MEMORY);

        await bot.sendMessage(
            msg.chat.id,
            `\n\n🌡 Температура ЦП: ${temp ? temp + " ᵒC" : "невідома"}\n\n📊 Завантаженність системи: ${
                load ? load : "невідома"
            }\n\n💾 ОЗП: всього ${mem.memTotal ? mem.memTotal + " Mb" : "невідомо"}, вільної ${
                mem.memFree ? mem.memFree + " Mb" : "невідомо"
            }\n\n`,
        );
    });

    bot.onText(/В головне меню ↩️/, async msg => {
        await bot.sendMessage(msg.chat.id, "Йдемо назад...", {
            reply_markup: mainMenu,
        });
    });

    bot.onText(/Попрощатися 👋/, async msg => {
        await bot.sendMessage(msg.chat.id, "На все добре! 👋", {
            reply_markup: StartMenu,
        });
    });

    // TODO
    bot.onText(/Опитати входи/, async msg => {
        await bot.sendMessage(msg.chat.id, "Оберіть тип входів", {
            reply_markup: stateMenu,
        });
    });

    // TODO
    bot.onText(/Аналогові|Дискретні/, async msg => {
        await bot.sendMessage(msg.chat.id, "TODO: ще не готово", {
            reply_markup: chooseIO,
        });
    });

    bot.onText(/Отримати фото/, async msg => {
        const path = await takePicture(webcam);
        await bot.sendPhoto(msg.chat.id, path);
    });

    bot.on("photo", async msg => {
        console.log("Message:\n", msg);
    });
} else {
    console.error("You must define TELEGRAM_BOT_TOKEN in .env!");
    process.exit(1);
}
