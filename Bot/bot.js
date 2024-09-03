const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const TOKEN = "7195587672:AAHjNODVmjRytbU8LCWrirObTxFipzAI_Qc"
const bot = new Telegraf(TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.launch()