import { ReplyKeyboardMarkup } from "node-telegram-bot-api";

export const StateMenu: ReplyKeyboardMarkup = {
    keyboard: [
        [
            { text: "Назад" },
        ], [
            { text: "В головне меню"}
        ]
    ]
}