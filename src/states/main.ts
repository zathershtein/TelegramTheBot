import { ReplyKeyboardMarkup } from "node-telegram-bot-api";

export const MainMenu: ReplyKeyboardMarkup = {
    keyboard: [
        [
            { text: "Статус девайсу" },
            { text: "Опитати входи"}
        ],
        [
            { text: "Попрощатися ↩️" }
        ]
    ]
}