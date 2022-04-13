///ZassXd Free Sc Bot///
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['5493865392125']
global.premium = ['5493865392125']
global.packname = 'No-Name-Bot'
global.author = 'By Kenisawa Dev'
global.sessionName = 'sessions'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '𝐄𝐱𝐢𝐭𝐨 ☑️',
    admin: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐬!!',
    botAdmin: '𝐏𝐞𝐫𝐝𝐨𝐧, 𝐧𝐨 𝐩𝐮𝐞𝐝𝐨 𝐚𝐲𝐮𝐝𝐚𝐫 𝐬𝐢 𝐧𝐨 𝐬𝐨𝐲 𝐚𝐝𝐦𝐢𝐧!!',
    eror: '𝐒𝐞 𝐩𝐫𝐨𝐝𝐮𝐣𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫!!',
    owner: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐬 𝐞𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐨 𝐩𝐚𝐫𝐚 ꪶ͢͜𝑲𝜮𝑵𝑰𝑺𝜟͢𝑾𝜟 𝑫𝜮𝑽 - ꪶ⚚ꫂ',
    group: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐬 𝐬𝐨𝐥𝐨 𝐩𝐚𝐫𝐚 𝐠𝐫𝐮𝐩𝐨𝐬!!!',
    private: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐧 𝐜𝐡𝐚𝐭 𝐩𝐫𝐢𝐯𝐚𝐝𝐨!!!',
    bot: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐦𝐢!!',
    wait: '𝐄𝐬𝐩𝐞𝐫𝐞 𝐮𝐧𝐨𝐬 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬...',
    endLimit: '𝐏𝐞𝐫𝐝𝐨𝐧 𝐭𝐮𝐬 𝐥𝐢𝐦𝐢𝐭𝐞𝐬 𝐬𝐞 𝐚𝐜𝐚𝐛𝐚𝐫𝐨𝐧, 𝐥𝐨𝐬 𝐥𝐢𝐦𝐢𝐭𝐞𝐬 𝐬𝐞 𝐫𝐞𝐢𝐧𝐢𝐜𝐢𝐚𝐧 𝐚 𝐥𝐚 12 AM',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/apri.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
