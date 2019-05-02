import { ReplyKeyboardMarkup } from "node-telegram-bot-api";

export const Main: ReplyKeyboardMarkup = {
    keyboard: [
        [
            {text: "Статус девайсу"},
            {text: "Опитати входи"}
        ],
        [
            {text: "Попрощатися ↩️"}
        ]
    ]
}