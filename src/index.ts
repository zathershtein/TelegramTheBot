import dotenv from "dotenv";
dotenv.config();

const Telegraf = require('telegraf')

// import Telegraf from "telegraf";

//TODO choose right type for ctx
const bot = new Telegraf(<string>process.env.TG_BOT_KEY);
bot.start((ctx: any) => ctx.reply('Welcome!'));
bot.help((ctx: any) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx: any) => ctx.reply('👍'));
bot.hears('hi', (ctx: any) => ctx.reply('Hey there'));
bot.launch();