const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const helper = require('./helper');
const keyboard = require('./keyboard');
const kb = require('./keyboard-buttons');

helper.logStart();

const bot = new TelegramBot(config.TOKEN, {
  polling: true,
});

bot.on('message', msg => {
  console.log('Working', msg.from.first_name);

  const chatId = helper.getChatId(msg);

  switch (msg.text) {
    case kb.home.favorite:
      break;
    case kb.home.films:
      bot.sendMessage(chatId, 'Выберете жанр:', {
        reply_markup: {
          keyboard: [
            [kb.film.random],
            [kb.film.action, kb.film.comedy],
            [kb.back],
          ]
        }
      })
      break;
    case kb.home.cinemas:
      break;
    case kb.back:
      bot.sendMessage(helper.getChatId(msg), 'Что хотите посмотреть?', {
        reply_markup: {
          keyboard: keyboard.home
        }
      })
      break;
  }
})

bot.onText(/\/start/, msg => {
  const text = `Привет ${msg.from.first_name}\nВыберете команду для начала работы: `;

  bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
      keyboard: keyboard.home
    }
  })
})