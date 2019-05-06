import { ReplyKeyboardMarkup } from "node-telegram-bot-api";

export const StatusMenu: ReplyKeyboardMarkup = {
    keyboard: [
        [
            { text: "Назад" },
        ], [
            { text: "В головне меню"}
        ]
    ]
}