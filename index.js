const { Telegraf } = require('telegraf');
const axios =require('axios')
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const binarySearchString=`
int binarySearch(int arr[], int l, int r, int x)
{
	while (l <= r) {
		int m = l + (r - l) / 2;
		if (arr[m] == x)
			return m;
		if (arr[m] < x)
			l = m + 1;
		else
			r = m - 1;
	}
	return -1;
}

`
try{
bot.start((ctx) => ctx.reply('Welcome to Shitanshu\'s Algo bot'));
bot.command('binarysearch',(ctx)=>ctx.reply(binarySearchString));
bot.command('toplinuxcommands',(ctx)=>ctx.reply('ls cd pwd grep rm'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.command('leetcodedailychallenge',async (ctx)=>{
    const response = await axios.get('https://raw.githubusercontent.com/shitanshu-277/LeetCode-Daily-Challenge/main/11-06.2023');
    ctx.reply(response.data);
})
bot.on('text',(ctx)=>{
    console.log(ctx.update.message);
    if(ctx.update.message.text=='I love you'){
        ctx.reply('I love you too broo');
    }
    else{
        ctx.reply('I don\'t understand humans')
    }
});
bot.launch();
}
 catch{
     console.log("Unexpected command");
 }