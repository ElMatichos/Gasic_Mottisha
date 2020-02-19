var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
	}
	args = args.splice(2);
        switch(cmd) {
            case 'what':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ask ElMatichos, my holy **FATHER**!'
                });
            break;
         }
	args = args.splice(3);
        switch(cmd) {
            case 'fuck':
                bot.sendMessage({
                    to: channelID,
                    message: 'Never use this. Unless you need a demon in your life.'
                });
            break;
         }
	args = args.splice(4);
        switch(cmd) {
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'I have these commands for now: \n !help \n !ping\n !what \n !fuck \n !night \n !day' 
                });
            break;
         }
	args = args.splice(5);
        switch(cmd) {
            case 'night':
                bot.sendMessage({
                    to: channelID,
                    message: 'Good night to you all, kind gentlemen. :last_quarter_moon_with_face:' 
                });
            break;
         }
	args = args.splice(6);
        switch(cmd) {
            case 'day':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello, nice day we\'re having, isn\'t it, my fair gentleman? :sun_with_face:' 
                });
            break;
         }
     }
});
