import { ReplyKeyboardMarkup } from "node-telegram-bot-api";

export const stateMenu: ReplyKeyboardMarkup = {
    keyboard: [
        [
            { text: "Аналогові" }, { text: "Дискретні" }
        ], [
            { text: "В головне меню ↩️" }
        ]
    ],
    resize_keyboard: true
}