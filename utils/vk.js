const VkBot = require('node-vk-bot-api');
const regs = require('../service/register');

const config = require('../utils/config');
 
const bot = new VkBot({
    token : config.VK,
    group : config.VKGROUP,
});
 
bot.command('register', (ctx) => {
    let token = regs.createToken(ctx.message.from_id);
    ctx.reply(`Для регистрации используй код:\n${token}`);
});


module.exports = bot;