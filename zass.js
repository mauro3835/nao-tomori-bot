///ZassXd Free Sc Bot///

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { scdl } = require('./lib/scdl')
const { iklan } = require('./lib/iklan')
const { sfiledl } = require ('./lib/solidfile')
const { musicaldown } = require('./lib/ttmusik')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { ytMp4, ytMp3, ytPlay } = require('./lib/yotube')
const { webp2gifFile, TiktokDownloader } = require('./lib/gif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const setting = require('./src/setting.json')
let {
ownername,
ownernomer,
myweb,
botname,
donasi
} = setting

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = zass = async (zass, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await zass.decodeJid(zass.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await zass.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!zass.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            zass.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await zass.setStatus(`${zass.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync('./lib/apri.jpg'), surface: 200, message: `©Created By BOT INDO`, orderTitle: 'Please Subscribe Youtube BOT INDO', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': fs.readFileSync('./lib/apri.jpg')}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': fs.readFileSync('./lib/apri.jpg')}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': fs.readFileSync('./lib/apri.jpg')}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/apri.jpg'), thumbnail: fs.readFileSync('./lib/apri.jpg'),sendEphemeral: true}}}

	var sendFileFromUrl2 = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
let type = mime.split("/")[0]+"Message"
return zass.sendMessage(m.chat, { document: await getBuffer(url), mimetype:'audio/mpeg' , caption: 'tiktok.mp3', mentions: men ? men : []}, {quoted: m })
}
var sendFileFromUrl = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return zass.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: fgif})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return zass.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: fgif})
} else if(mime.split("/")[0] === "video"){
return zass.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: fgif})
} else if(mime.split("/")[0] === "audio"){
return zass.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: fgif })
} else {
return zass.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
}
}
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`『 *𝔸𝕟𝕥𝕚𝕝𝕚𝕟𝕜* 』\n\n𝑳𝒊𝒏𝒌 𝑫𝒆𝒄𝒕𝒂𝒅𝒐!!/n𝑷𝒆𝒓𝒅𝒐𝒏, 𝑻𝒆𝒏𝒅𝒓𝒆 𝑸𝒖𝒆 𝑬𝒍𝒊𝒎𝒊𝒏𝒂𝒓𝒕𝒆`)
        if (!isBotAdmins) return m.reply(`No soy admin para eliminarlo T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await zass.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`🤡`)
        if (isCreator) return m.reply(`😈`)
        zass.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: zass.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, zass.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        zass.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            zass.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zass.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zass.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zass.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zass.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zass.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zass.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zass.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, zass.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zass.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zass.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zass.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zass.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zass.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zass.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await zass.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await zass.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    zass.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    zass.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) zass.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) zass.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) zass.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    zass.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) zass.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) zass.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    zass.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {

case 'naruto': case 'kaneki': case 'shinomiya': case 'kurama': case 'rimuru': case 'akira': case 'dazai': case 'miku': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                   case 'shinobu': case 'kurumi': case 'animerem': case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'zenitsu': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    m.reply(mess.wait)
                    let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
sendFileFromUrl(m.chat, `${result}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
                break
case 'infobot':
txt = `
❦ ════ •⊰❂ *𝑰𝒏𝒇𝒐 𝑫𝒆𝒍 𝑩𝒐𝒕* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
┃
│𝑬𝒔𝒕𝒆 𝒃𝒐𝒕 𝒇𝒖𝒆 𝒄𝒓𝒆𝒂𝒅𝒐 𝒄𝒐𝒏 𝒇𝒊𝒏𝒆𝒔 𝒅𝒆
┃𝒂𝒚𝒖𝒅𝒂𝒓 𝒂 𝒉𝒂𝒄𝒆𝒓 𝒍𝒂𝒔 𝒄𝒐𝒔𝒂𝒔 𝒎𝒂𝒔
│𝒇𝒂𝒄𝒊𝒍, 𝒄𝒐𝒎𝒐 𝒉𝒂𝒄𝒆𝒓 𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒔, 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓
┃𝒎𝒖𝒔𝒊𝒄𝒂 𝒚 𝒗𝒊𝒅𝒆𝒐𝒔 𝒆𝒕𝒄.
│
┃𝑺𝒊 𝒉𝒂𝒚 𝒂𝒍𝒈𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕
│𝒏𝒐 𝒅𝒖𝒅𝒆𝒔 𝒄𝒐𝒏 𝒉𝒂𝒃𝒍𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 
┃𝒑𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐!!
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Opcion : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    zass.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    zass.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    zass.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    zass.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    zass.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    zass.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    zass.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'pareja': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Parejita del grupo

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'pareja', buttonText: { displayText: 'Suiguiente pareja ❤️' }, type: 1 }
                    ]
                    await zass.sendButtonText(m.chat, buttons, jawab, zass.user.name, m, {mentions: ments})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Falto el link del grupo!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link invalido!!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await zass.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await zass.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Ejemplo : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`El info del sticker cambio a\n\n༻ Packname : ${global.packname}\n༻ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zass.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
		           const devsound = fs.readFileSync('./Audios/Baneado.mp3') //audios
           zass.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zass.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zass.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zass.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zass.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zass.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Y el texto?'
                await zass.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Y el texto?'
                await zass.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Responde a una imagen con el comando ${prefix + command}`
                if (!/image/.test(mime)) throw `Responde a una imagen con el comando ${prefix + command}`
                if (/webp/.test(mime)) throw `Responde a una imagen con el comando ${prefix + command}`
                let media = await zass.downloadAndSaveMediaMessage(quoted)
                await zass.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Responde a una imagen con el comando ${prefix + command}`
                if (!/image/.test(mime)) throw `Responde a una imagen con el comando ${prefix + command}`
                if (/webp/.test(mime)) throw `Responde a una imagen con el comando ${prefix + command}`
                let media = await zass.downloadAndSaveMediaMessage(quoted)
                await zass.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 𝕄𝕒𝕣𝕔𝕒𝕣 𝕒 𝕥𝕠𝕕𝕠𝕤* 〙✪══
 
 ➲ *𝑨𝒗𝒊𝒔𝒐 : ${q ? q : '𝑨𝒄𝒕𝒊𝒗𝒆𝒏 𝒈𝒓𝒖𝒑𝒐'}*\n\n`
                for (let mem of participants) {
                teks += `༻ @${mem.id.split('@')[0]}\n`
                }
                zass.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            zass.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Y el texto?!'
                let anu = await styletext(text)
                let teks = `𝑬𝒔𝒕𝒊𝒍𝒐 𝒅𝒆 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 ${text}\n\n`
                for (let i of anu) {
                    teks += `➣ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await zass.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Se abrio la edicion del grupo`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await zass.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Se cerro la edición del grupo!!`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: '𝑨𝒃𝒓𝒊𝒓' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: '𝑪𝒆𝒓𝒓𝒂𝒓' }, type: 1 }
                    ]
                    await zass.sendButtonText(m.chat, buttons, `𝑸𝒖𝒊𝒆𝒓𝒆𝒔 𝒑𝒆𝒓𝒎𝒊𝒕𝒊𝒓 𝒒𝒖𝒆 𝒍𝒐𝒔 𝒎𝒊𝒆𝒎𝒃𝒓𝒐𝒔 𝒆𝒅𝒊𝒕𝒆𝒏 𝒆𝒍 𝒊𝒏𝒇𝒐 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐`, zass.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Se activo el antilink con exito!!`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink activo!!!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Se apago el antilink con exito`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink apagado!`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await zass.sendButtonText(m.chat, buttons, `Modo antilink`, zass.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Bot silenciado`)
                db.data.chats[m.chat].mute = true
                m.reply(`[${zass.user.name}] se silencio en el grupo!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Bot ya esta activo`)
                db.data.chats[m.chat].mute = false
                m.reply(`${zass.user.name} ha sido desactivado en este grupo!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await zass.sendButtonText(m.chat, buttons, `Silenciar bot`, zass.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await zass.groupInviteCode(m.chat)
                zass.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink del grupo : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'El mensaje no fue enviado por un bot!'
                zass.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Y el texto?\n\nEjemplo : ${prefix + command} Lucifer`
                let getGroups = await zass.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Enviar difusión a ${anu.length} Chat grupal/nhora de finalización ${anu.length * 1.5} segundos`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒄𝒌『𝔽』',
                                    url: 'https://www.facebook.com/onii.sama.5076'
                                }
                            }, {
                                callButton: {
                                    displayText: '𝑳𝒍𝒂𝒎𝒂𝒓 𝑨𝒍 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 『📞』',
                                    phoneNumber: '+54 9 3757 61-8440'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑬𝒔𝒕𝒂𝒅𝒐 𝑫𝒆𝒍 𝑩𝒐𝒕 『❗』',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 𝑫𝒆𝒍 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 『👤』',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏 𝑫𝒆𝒍 𝑩𝒐𝒕 『❕』',
                                    id: 'infobot'
                                }
                            }]
                      let txt = `「 MENSAJE DEL PROPIETARIO 」\n\n${text}`
                      zass.send5ButImg(i, txt, zass.user.name, global.thumb, btn)
                    }
                m.reply(`Envío exitoso de transmisión a ${anu.length} Grupos`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Enviar difusión a ${anu.length} Chat\nTiempo de finalización ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: '𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒄𝒌『𝔽』',
                                    url: 'https://www.facebook.com/onii.sama.5076'
                                }
                            }, {
                                callButton: {
                                    displayText: '𝑳𝒍𝒂𝒎𝒂𝒓 𝑨𝒍 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 『📞』',
                                    phoneNumber: '+54 9 3757 61-8440'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑬𝒔𝒕𝒂𝒅𝒐 𝑫𝒆𝒍 𝑩𝒐𝒕 『❗』',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 𝑫𝒆𝒍 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 『👤』',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏 𝑫𝒆𝒍 𝑩𝒐𝒕 『❕』',
                                    id: 'infobot'
                                }
                            }]
                      let txt = `「 MENSAJE DEL PROPIETARIO 」\n\n${text}`
                      zass.send5ButImg(yoi, txt, zass.user.name, global.thumb, btn)
		}
		m.reply('Se envio la difusión con exito')
            }
            break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    zass.sendText(m.chat, 'Personas en linea:\n\n' + online.map(v => '༻ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zass.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximo 10 segundos!!')
                let media = await quoted.download()
                let encmedia = await zass.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Responde a una imagen/video con el comando ${prefix + command}\nLa duración del video es de 1-9 segundos`
                }
            }
            break
            case 'emojimix': {
	        if (!text) throw `Ejemplo : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await zass.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Responde a un sticker con este comando!!'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await zass.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    zass.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Responde a un sticker con este comando!!'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zass.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zass.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Se convirtio en video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responde a un video con el comando ${prefix + command}`
            if (!quoted) throw `Responde a un video con el comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zass.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Responde a un audio con el comando ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responde a un audio con el comando ${prefix + command}`
            if (!quoted) throw `Responde a un audio con el comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zass.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `By ${zass.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responde a un Video/Audio con el comando ${prefix + command}`
            if (!quoted) throw `Responde a un Video/Audio con el comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            zass.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Responde a un sticker con este comando'
                if (!/webp/.test(mime)) throw `Responde a un sticker con este comando *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zass.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zass.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Se convirtió en gif' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await zass.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
case 'wanted':
case 'trash':
case 'circle':
case 'jail':
case 'rainbow':
case 'beautiful':
case 'blur':
case 'burn':
case 'brightness':
case 'wasted': {
if (!quoted) throw `Responde a una imagen con el comando ${prefix + command}`
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await zass.downloadAndSaveMediaMessage(quoted)
res = await TelegraPh(media)
kontol = `https://api.dhamzxploit.my.id/api/canvas/${command}?url=${res}`
xuntul = await zass.sendImageAsSticker(m.chat, kontol, fgif, { packname: global.packname, author: global.author })
await fs.unlinkSync(xuntul)
}
break
case 'triger': {
if (!quoted) throw `Responde a una imagen con el comando ${prefix + command}`
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await zass.downloadAndSaveMediaMessage(quoted)
res = await TelegraPh(media)
kok = `https://hardianto.xyz/api/editor/triggered?url=${res}&apikey=hardianto`
xuntul = await zass.sendImageAsSticker(m.chat, kok, fgif, { packname: global.packname, author: global.author })
await fs.unlinkSync(xuntul)
}
break
case 'ssweb':
if (!text) throw `Ejemplo : ${prefix + command} github.com`
sendFileFromUrl(m.chat, `https://hardianto.xyz/api/tools/ssweb?url=${text}&apikey=hardianto`, `Listo`)
break
case 'smeme': case 'stickermeme': case 'stickmeme': {	
if (!text) return m.reply(`Responde a una imagen con el comando ${prefix + command} *texto*`)
if (text.includes('|')) return m.reply(`Responde a una imagen con el comando ${prefix + command} *texto*`)
if (!/image/.test(mime)) return m.reply(`Responde a una imagen con el comando ${prefix + command} *texto*`)
m.reply(mess.wait)
mee = await zass.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await zass.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Ejemplo : ${prefix + command} stay whit me`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'Busqueda de YouTube\n\n Resultados de '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `༻ Numero : ${no++}\n༻ Tipo : ${i.type}\n༻ ID del video : ${i.videoId}\n༻ Título : ${i.title}\n༻ Visitas : ${i.views}\n༻ Duración : ${i.timestamp}\n༻ Se subió Hace : ${i.ago}\n༻ Canal : ${i.author.name}\n༻ Link del video : ${i.url}\n\n─────────────────\n\n`
                }
                zass.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Ejemplo : ${prefix + command} rule 64`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Resultados sobre : ${text}\n\n`
                for (let g of res) {
                teks += `༻ *Titulo* : ${g.title}\n`
                teks += `༻ *Descripción* : ${g.snippet}\n`
                teks += `༻ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '『➡️』𝕊𝕚𝕘𝕦𝕚𝕖𝕟𝕥𝕖 𝕀𝕞𝕒𝕘𝕖𝕟'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*「 IMAGEN DE GOOGLE 」*
🤠 *Cónsulta* : ${text}
🔗 *Link de imagen* : ${images}`,
                    footer: zass.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zass.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Ejemplo : ${prefix + command} stay whit me`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '『🎵』ℂ𝕒𝕟𝕔𝕚𝕠𝕟'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '『🎬』𝕍𝕚𝕕𝕖𝕠'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
╭╼╾╼╾『 ℙ𝕝𝕒𝕪 𝕐𝕠𝕦𝕥𝕦𝕓𝕖 』╼╾╼╾╮
│
┃⚠️ 𝑻𝒊𝒕𝒖𝒍𝒐 : ${anu.title}
│⏰ 𝑫𝒖𝒓𝒂𝒄𝒊𝒐𝒏 : ${anu.timestamp}
┃👥 𝑽𝒊𝒔𝒕𝒂𝒔 : ${anu.views}
│🗓️ 𝑺𝒆 𝒔𝒖𝒃𝒊𝒐 𝒉𝒂𝒄𝒆 : ${anu.ago}
┃👤 𝑪𝒂𝒏𝒂𝒍 : ${anu.author.name}
│🔖 𝑳𝒊𝒏𝒌 𝒅𝒆𝒍 𝒄𝒂𝒏𝒂𝒍 : ${anu.author.url}
┃🔗 𝑳𝒊𝒏𝒌 𝒅𝒆𝒍 𝒗𝒊𝒅𝒆𝒐 : ${anu.url}
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾★᭄ꦿ᭄ꦿ`,
                    footer: zass.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zass.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3':
if (!text) throw `Ejemplo : ${prefix + command} *Link de youtube*`
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`Linknya Jelek`)
m.reply(mess.wait)
anu = await ytMp3(`${q}`)
sendFileFromUrl(m.chat, `${anu.result}`,)
break
case 'ytmp4':
if (!text) throw `Ejemplo : ${prefix + command} *Link del video*`
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`Linknya Jelek`)
m.reply(mess.wait)
anu = await ytMp4(`${q}`)
sendFileFromUrl(m.chat, `${anu.result}`,)
break
case 'audioyt': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                zass.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fgif })
            }
            break
            case 'videoyt': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 1080p`
                let quality = args[1] ? args[1] : '1080p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                zass.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`}, { quoted: fgif })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                zass.sendMessage(m.chat, { image: { url: result }, caption: '『🔗』𝑳𝒊𝒏𝒌 𝑫𝒆 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏 : '+result }, { quoted: m })
            }
            break
          case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
    m.reply(mess.wait)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          sendFileFromUrl(m.chat,`${wipi}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
	    case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                zass.sendMessage(m.chat, { image: { url: random.male }, caption: `𝑭𝒐𝒕𝒐 𝑷𝒂𝒓𝒂 𝑬𝒍 𝑪𝒉𝒊𝒄𝒐` }, { quoted: m })
                zass.sendMessage(m.chat, { image: { url: random.female }, caption: `𝑭𝒐𝒕𝒐 𝑷𝒂𝒓𝒂 𝑳𝒂 𝑪𝒉𝒊𝒄𝒂` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '『➡️』𝕊𝕚𝕘𝕦𝕚𝕖𝕟𝕥𝕖 𝕀𝕞𝕒𝕘𝕖𝕟'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ 𝑼𝒏 𝑪𝒂𝒇𝒆𝒔𝒊𝒕𝒐?`,
                    footer: zass.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zass.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Nombre del fondo?'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '『➡️』𝕊𝕚𝕘𝕦𝕚𝕖𝕟𝕥𝕖 𝕀𝕞𝕒𝕘𝕖𝕟'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `🥀 𝑻𝒊𝒕𝒖𝒍𝒐 : ${result.title}\n📚 𝑪𝒂𝒕𝒆𝒈𝒐𝒓𝒊𝒂 : ${result.type}\n🔎 𝑫𝒆𝒕𝒂𝒍𝒍𝒆𝒔 : ${result.source}\n🔗 𝑳𝒊𝒏𝒌 : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: zass.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zass.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '『➡️』𝕊𝕚𝕘𝕦𝕚𝕖𝕟𝕥𝕖 𝕀𝕞𝕒𝕘𝕖𝕟e'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `༻ Title : ${result.title}\n༻ Source : ${result.source}\n༻ Media Url : ${result.image}`,
                    footer: zass.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zass.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'blackpink':
if (!q) return m.reply(`Ejemplo : ${prefix + command} Lucifer`)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/textpro/black-pink?apikey=Fxc7&text=${q}`)
sendFileFromUrl(m.chat,`${anu.result}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'wolflogo':
if (!q) return m.reply(`Ejemplo : ${prefix + command} Lucifer|Hack`)
var gh = body.slice(10)
var gli = gh.split("|")[0];
var tch = gh.split("|")[1];
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/textpro/logo-wolf?apikey=Fxc7&text=${gli}&text2=${tch}`)
sendFileFromUrl(m.chat,`${anu.result}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'pornhub':
if (!q) return m.reply(`Ejemplo : ${prefix + command} Lucifer|Hack`)
var po = body.slice(9)
var as = po.split("|")[0];
var yu = po.split("|")[1];
anu = await fetchJson (`https://api-bot-xyz.herokuapp.com/api/textpro/porn-hub?apikey=Aprii&text1=${as}&text2=${yu}`)
sendFileFromUrl(m.chat,`${anu.result}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'leaves':
if (!q) return m.reply(`Ejemplo : ${prefix + command} Lucifer`)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/textpro/natural-leaves?apikey=Fxc7&text=${q}`)
sendFileFromUrl(m.chat,`${anu.result}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'gradasi3d':
if (!q) return m.reply(`Ejemplo : ${prefix + command} Lucifer`)
anu = await fetchJson(`https://api-bot-xyz.herokuapp.com/api/textpro/3d-gradient?apikey=Aprii&text=${q}`)
sendFileFromUrl(m.chat,`${anu.result}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'shadow':
case 'romantic':
case 'harrypotter':
case 'smoke':
case 'burnpaper':
case 'undergrass':
case 'coffecup':
case 'coffecup2':
case 'butterfly':
case 'lovemessage':
case 'cup':
case 'cup2':
case 'wolfmetal':
case 'underwater':
case 'roses':
case 'whitecube':
case 'nightsky':
case 'flaming':
case 'csgobanner':
case 'greenleaves':
case 'lolbanner':
if (!q) throw `Ejemplo : ${prefix + command} Lucifer`
m.reply(mess.wait)
sendFileFromUrl(m.chat, `https://x-daniapi.herokuapp.com/api/photooxy/${command}?text=${q}&apikey=DaniXFar`, `𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'neondevil':
case 'zeombie3d':
case 'neonlight':
case 'writingchalk':
case 'watercolor':
case '1917':
case 'thunder':
case 'snake':
case 'wordgreen':
case 'cloud':
case 'metal':
case 'neon':
case 'graffiticollor':
case 'lightgalaxy':
case 'hotmetalic':
case 'graffiti5':
case 'graffiti3':
case 'graffiti':
case 'startsnight':
case 'cake':
case 'birthdaycake':
case '3dhologram':
case 'galaxystyle':
case 'lighteffects':
case 'greenbrush':
case 'cakes':
case 'startsnight2':
case 'glowing':
case 'wetglass':
case 'blackpinkneon':
case '3dcrack':
case '3dunderwater':
case 'graffiti2':
case 'bearlogo':
case 'clouds':
case 'pubgmascot':
case 'summerbeach':
case 'summerbeach2':
case 'glow':
case 'wooden3d':
case 'galaxy':
case 'galaxybat':
case 'brokenglass':
if (!q) throw `Ejemplo : ${prefix + command} Lucifer`
m.reply(mess.wait)
sendFileFromUrl(m.chat, `https://x-daniapi.herokuapp.com/api/ephoto/${command}?text=${q}&apikey=DaniXFar`, `𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
	        case 'tiktok':
 if (!q) return m.reply('Y el link?')
             if (!q.includes('tiktok.com')) return m.reply(`Eso creo que noes un link :/`)
             title = `
             𝑺𝒆 𝑬𝒏𝒄𝒐𝒏𝒕𝒓𝒐 𝑬𝒍 𝑽𝒊𝒅𝒆𝒐 𝑪𝒐𝒏 𝑬𝒙𝒊𝒕𝒐`
let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '『❗』ℂ𝕠𝕟 𝕄𝕒𝕣𝕔𝕒 𝔻𝕖 𝔸𝕘𝕦𝕒'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '『❕』𝕊𝕚𝕟 𝕄𝕒𝕣𝕔𝕒 𝔻𝕖 𝔸𝕘𝕦𝕒'}, type: 1},
                    {buttonId: `tiktokaudio ${text}`, buttonText: {displayText: '『🎵』𝔸𝕦𝕕𝕚𝕠 𝕍𝕚𝕕𝕖𝕠'}, type: 1}
                ]
                await zass.sendButtonText(m.chat, buttons, title, `⬇️𝙴𝚕𝚒𝚓𝚎 𝚞𝚗𝚊 𝚘𝚙𝚌𝚒𝚘𝚗⬇️`, m)
            break
case 'tiktokwm':
 if (!q) return m.reply('Y el link de tiktok?')
             if (!q.includes('tiktok.com')) return m.reply(`:/`)
            m.reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendFileFromUrl(m.chat, data.result.nowatermark,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`) })
            .catch((err) => { m.reply(String(err)) })
             break
case 'ttnowm': case 'tiktoknowm':
 if (!q) return m.reply('Y El Link De Youtube?')
             if (!q.includes('tiktok.com')) return m.reply(`Creo que eso no es un link :/`)
            m.reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendFileFromUrl(m.chat, data.result.nowatermark,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`) })
            .catch((err) => { m.reply(String(err)) })
             break
case 'tiktokaudio':
 if (!q) return m.reply('Linknya?')
             if (!q.includes('tiktok.com')) return m.reply(`Link Nya Jelek`)
            m.reply(mess.wait)
             anu = await musicaldown(`${q}`)
            .then((data) => { sendFileFromUrl2(m.chat, data.audio) })
            .catch((err) => { m.reply(String(err)) })
             break
	        case 'ig':
case 'igdl':
case 'instagram':
if (!q) return m.reply('Y El Link De Instagram?')
let { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
m.reply(mess.eror)
})
console.log(res)
sendFileFromUrl(m.chat,`${res.result.link}`,`${res.result.desc}`)
                    break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await zass.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                zass.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Marca un audio con el comando *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Responde A Un Sticker/Audio/Video/Imagen Con Un Comando!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Y El Comando?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tienes permiso para cambiar este comando de sticker'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Listo!!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tienes permiso para borrar este comando de sticker'              
                delete global.db.data.sticker[hash]
                m.reply(`Listo!!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista de comandos*
Info: *bold* fue bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                zass.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Responde a un comando programado!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Listo!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Responde a un mensaje para agregarlo a la base de datos '
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Mensaje agregado con éxito en la lista de mensajes como '${text}'
    
Si quieres sacarlo usa: ${prefix}getmsg ${text}

Para ver la lista usa: ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Ejemplo : ${prefix + command} *nombre del mensaje*`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' no registrado en la lista de mensajes`
                zass.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LISTA DE MENSAJES 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Nombre :* ${i.nama}\n⬡ *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' no aparece en la lista de mensajes`)
		delete msgs[text.toLowerCase()]
		m.reply(`Eliminado con éxito '${text}' de la lista de mensajes`)
            }
	    break
            case 'public': {
                if (!isCreator) throw mess.owner
                zass.public = true
                m.reply('[MODO PUBLICO]')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                zass.public = false
                m.reply('[MODO PRIVADO]')
            }
            break
case 'hentai':
case 'ahegao':
case 'ass':
case 'blowjob':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
m.reply(mess.wait)
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)
sendFileFromUrl(m.chat,`${anu.result}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'eroneko':
sendFileFromUrl(m.chat, `https://api.dhamzxploit.my.id/api/nsfw/neko`, `𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'neko':
sendFileFromUrl(m.chat, `https://api.dhamzxploit.my.id/api/neko`, `𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'futanari':
buffer = await getBuffer(`https://api.dapuhy.xyz/api/nsfw/nsfwfutanari?apikey=ApiLia`)
zass.sendMessage(m.chat, {image : buffer, caption : `𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`}, {quoted : fgif})
break
case 'asupan':
m.reply(mess.wait)
sendFileFromUrl(m.chat, `https://api.zacros.my.id/asupan/random`, `𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'bocil':
case 'santuy':
case 'rikagusriani':
case 'ghea':
case 'ukty':
reply (mess.wait)
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/asupan/${command}?apikey=Alphabot`)
sendFileFromUrl(m.chat, `${anu.result.url}`, `𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
            case 'hola': case 'hola bot': {
           const devsound = fs.readFileSync('./Audios/Hola.mp3') //audios
           zass.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
            case 'buenos': {
           const devsound = fs.readFileSync('./Audios/Ohayo.mp3') //audios
           zass.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
            case 'bromita': {
           const devsound = fs.readFileSync('./Audios/Bromita.mp3') //audios
           zass.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _miliseconds_\n\nTiempo activo : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_Uso de memoria de NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Uso total de la CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Uso de núcleos de CPU (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                zass.sendContact(m.chat, global.owner, m)
            }
            break
case 'inori':
          let sau = (await axios.get(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)).data
          let pii = sau[Math.floor(Math.random() * (sau.length))]
          sendFileFromUrl(m.chat,`${pii}`,`𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝑳𝒂 𝑰𝒎𝒂𝒈𝒆𝒏\n𝑩𝒚 𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻`)
break
case 'menu': case 'help':{
txt = `
❖ ── ✦ ──『✙ - ✙』── ✦ ── ❖
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾》
╽𝐻𝑜𝑙𝑎! ${pushname} 
╿𝑔𝑟𝑎𝑐𝑖𝑎𝑠 𝑝𝑜𝑟 𝐼𝑛𝑣𝑜𝑐𝑎𝑟𝑚𝑒
╽𝑀𝑖 𝑁𝑜𝑚𝑏𝑟𝑒 𝑒𝑠  ${botname}
╿𝑆𝑜𝑦 𝑢𝑛 𝐵𝑜𝑡 𝑑𝑒 𝑎𝑠𝑖𝑠𝑡𝑒𝑛𝑐𝑖𝑎 𝑦 
╽𝐸𝑛𝑡𝑟𝑒𝑡𝑒𝑛𝑖𝑚𝑖𝑒𝑛𝑡𝑜
╿𝑃𝑜𝑟 𝑓𝑎𝑣𝑜𝑟 𝑝𝑟𝑒𝑠𝑖𝑜𝑛𝑒  𝑢𝑛 𝑏𝑜𝑡𝑜𝑛!
╽𝐷𝑢𝑒𝑛̃𝑜 : ${ownername}
❖ ── ✦ ──『✙ - ✙』── ✦ ── ❖`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/apri.jpg') }, { upload: zass.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedButtons: [{
urlButton: {
displayText: '𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒄𝒌『𝔽』',
url: 'https://www.facebook.com/onii.sama.5076'
}
}, {
urlButton: {
displayText: '𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐『👤』', 
url: 'http://wa.me/+5493757618440'
}
}, {
quickReplyButton: {
displayText: '⊰❂𝑀𝑒𝑛𝑢 𝐷𝑒 𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑠❂⊱',
id: 'menudescargas'
}  
}, {
quickReplyButton: {
displayText: '⊰❂𝐿𝑖𝑠𝑡𝑎 𝐷𝑒 𝑀𝑒𝑛𝑢𝑠❂⊱',
id: 'command'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
zass.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'command':{
roti = `
╭─╍─╍─╍【𝕄𝕖𝕟𝕦 𝕃𝕚𝕤𝕥𝕒】╍─╍──╮
┃𝐵𝑢𝑒𝑛𝑎𝑠!!!! ${pushname} 
│ 𝐴 𝑐𝑜𝑛𝑡𝑖𝑛𝑢𝑎𝑐𝑖𝑜́𝑛 𝑡𝑒 𝑑𝑒𝑗𝑎𝑟𝑒 𝑙𝑎 𝑙𝑖𝑠𝑡𝑎 𝑑𝑒 𝑚𝑒𝑛𝑢𝑠 
┃𝑞𝑢𝑒 𝑡𝑒𝑛𝑔𝑜 𝑑𝑖𝑠𝑝𝑜𝑛𝑖𝑏𝑙𝑒𝑠 𝑝𝑎𝑟𝑎 𝑡𝑖
│  𝐴𝑑𝑒𝑙𝑎𝑛𝑡𝑒!
❖ ── ✦ ──『✙ - ✙』── ✦ ── ❖`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `⊰❂𝑳𝒊𝒔𝒕𝒂 𝑫𝒆 𝑴𝒆𝒏𝒖𝒔❂⊱`,
                    description: `${roti}`,
                    buttonText: "•⊰❂ 𝐿𝐼𝑆𝑇𝐴 𝐷𝐸 𝑀𝐸𝑁𝑈𝑆❂⊱",
                    footerText: "𝑫𝒂𝒓𝒌 𝑨𝒏𝒈𝒆𝒍 - 𝑩𝑶𝑻",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "❦ ════ •⊰❂ Gestion De Grupo ❂⊱• ════ ❦",
								"rows": [
									{
										"title": "❦ ════ •⊰❂ Gestion De Grupo ❂⊱• ════ ❦",
										"description": "𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒕𝒊𝒗𝒐𝒔 ",
										"rowId": `${prefix}groupmenu`
									}
								]
							},
							{
								"title": "├╼╾╼【𝘛𝘖𝘋𝘖𝘚 𝘓𝘖𝘚 𝘔𝘌𝘕𝘜𝘚】╾╼╾┤",
								"rows": [
									{
										"title": "❦ ════ •⊰📄 𝑴𝒆𝒏𝒖 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒐 📄⊱• ════ ❦",
										"description": "𝑬𝒔 𝑳𝒂 𝑻𝒐𝒕𝒂𝒍𝒊𝒅𝒂𝒅 𝑫𝒆 𝑳𝒐𝒔 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑫𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆𝒔 ",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "❦ ════ •⊰🌌 𝑴𝒆𝒏𝒖 𝑫𝒆 𝑳𝒐𝒈𝒐𝒔 🌠⊱• ════ ❦",
										"description": "𝑨𝒒𝒖𝒊 𝑷𝒐𝒅𝒓𝒂𝒔 𝑷𝒆𝒓𝒔𝒐𝒏𝒂𝒍𝒊𝒛𝒂𝒓 𝑳𝒐𝒈𝒐𝒔 𝑩𝒐𝒏𝒊𝒕𝒐𝒔 ",
										"rowId": `${prefix}menulogos`
									},
									{
										"title": "❦ ════ •⊰🔎 𝑴𝒆𝒏𝒖 𝑫𝒆 𝑩𝒖́𝒔𝒒𝒖𝒆𝒅𝒂𝒔 🔎⊱• ════ ❦",
										"description": "𝐸𝑠 𝑢𝑛𝑎 𝑠𝑒𝑟𝑖𝑒 𝑑𝑒 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑑𝑒 𝑏𝑢́𝑠𝑞𝑢𝑒𝑑𝑎𝑠 ",
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "❦ ════ •⊰🌸 𝑴𝒆𝒏𝒖 𝑫𝒆 𝑷𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆𝒔 🌸⊱• ════ ❦",
										"description": "𝑫𝒊𝒎𝒆  𝑬𝒍 𝑵𝒐𝒎𝒃𝒓𝒆 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒐 𝑫𝒆 𝑻𝒖 𝑷𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆 𝑭𝒂𝒗𝒐𝒓𝒊𝒕𝒐",
										"rowId": `${prefix}wibumenu`
										},
										{
										"title": "❦ ════ •⊰🔞 𝑴𝒆𝒏𝒖 +18 🔞⊱• ════ ❦",
										"description": "𝑴𝒆𝒏𝒖 𝑫𝒆 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑷𝒂𝒓𝒂 𝑨𝒅𝒖𝒍𝒕𝒐𝒔/n𝑺𝒐𝒍𝒐 𝑼𝒔𝒂𝒓 𝑪𝒐𝒏 𝑳𝒂 𝑨𝒑𝒓𝒐𝒃𝒂𝒄𝒊𝒐𝒏 𝑫𝒆 𝑼𝒏 𝑨𝒅𝒎𝒊𝒏",
										"rowId": `${prefix}nsfwmenu`
										},
										{
											"title": "❦ ════ •⊰🗣️ 𝑴𝒆𝒏𝒖 𝑫𝒆 𝑽𝒐𝒛 🗣️⊱• ════ ❦",
										"description": "𝑬𝒏 𝑬𝒔𝒕𝒆 𝑴𝒆𝒏𝒖 𝑬𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓𝒂𝒔 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑷𝒂𝒓𝒂 𝑨𝒍𝒕𝒆𝒓𝒂𝒓 𝑳𝒂 𝑽𝒐𝒛",
										"rowId": `${prefix}voicemenu`
										},
										{
											"title": "❦ ════ •⊰☁️ 𝑴𝒆𝒏𝒖 𝑵𝒖𝒗𝒆 ️☁️⊱• ════ ❦",
										"description": "𝑽𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑷𝒂𝒓𝒂 𝑮𝒖𝒂𝒓𝒅𝒂𝒓 𝑨𝒓𝒄𝒉𝒊𝒗𝒐𝒔 𝒀 𝑴𝒂𝒔...",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "❦ ════ •⊰️️💟 𝑴𝒆𝒏𝒖 𝑨𝒍𝒕𝒆𝒓𝒂𝒅𝒐𝒓𝒆𝒔 💟⊱• ════ ❦",
										"description": "𝑬𝒏 𝑬𝒔𝒕𝒆 𝑴𝒆𝒏𝒖 𝑷𝒐𝒅𝒓𝒂𝒔 𝑪𝒓𝒆𝒂𝒓 𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝒀 𝑨𝒍𝒕𝒆𝒓𝒂𝒓 𝑴𝒂𝒔 𝒄𝒐𝒔𝒂𝒔!!",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "❦ ════ •⊰️️🥷 𝑴𝒆𝒏𝒖 𝑳𝒖𝒄𝒊𝒇𝒆𝒓 🥷⊱• ════ ❦",
										"description": "𝑬𝒔𝒕𝒆 𝑴𝒆𝒏𝒖 𝑬𝒔 𝑬𝒙𝒄𝒍𝒖𝒔𝒊𝒗𝒐 𝑷𝒂𝒓𝒂 𝑳𝒖𝒄𝒊𝒇𝒆𝒓",
										"rowId": `${prefix}ownermenu`
										}
								]
							},
							{
								"title": "『❗』𝑸𝒊𝒆𝒓𝒆𝒔 𝑺𝒂𝒃𝒆𝒓 𝑴𝒂𝒔 𝑺𝒐𝒃𝒓𝒆 𝑴𝒊 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐?",
								"rows": [
									{
										"title": "『👤』𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 𝑫𝒆 𝑴𝒊 𝑪𝒓𝒆𝒂𝒅𝒐𝒓",
										"description": "𝑷𝒖𝒆𝒅𝒆𝒔 𝑷𝒓𝒆𝒈𝒖𝒏𝒕𝒂𝒓𝒍𝒆 𝑨 𝑴𝒊 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 𝑺𝒐𝒃𝒓𝒆 𝑬𝒍 𝑶 𝑬𝒍 𝑩𝒐𝒕",
										"rowId": `${prefix}owner`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            zass.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
               case 'grupo': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await zass.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Se ceero el grupo!!`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await zass.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Se abrio el grupo`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await zass.sendButtonText(m.chat, buttons, `Abrir o cerrar grupo?`, zass.user.name, m)

             }
            }
            break
case 'groupmenu':
txt = `
❦ ════ •⊰❂ *𝑮𝒆𝒔𝒕𝒊𝒐𝒏 𝑫𝒆 𝑮𝒓𝒖𝒑𝒐* ❂⊱• ════ ❦
༻ ${prefix}linkgroup [𝑻𝒆 𝑫𝒂𝒓𝒆 𝑬𝒍 𝑬𝒏𝒍𝒂𝒄𝒆]
༻ ${prefix}setppgc [𝑰𝒎𝒂𝒈𝒆𝒏]
༻ ${prefix}setname [𝑵𝒖𝒆𝒗𝒐 𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝑮𝒓𝒖𝒑𝒐]
༻ ${prefix}setdesc [𝑵𝒖𝒆𝒗𝒂 𝑫𝒆𝒔𝒄𝒓𝒊𝒑𝒄𝒊𝒐́𝒏 𝑫𝒆𝒍 𝑮𝒓𝒖𝒑𝒐 ]
༻ ${prefix}group [𝑨𝒃𝒓𝒊𝒓/𝑪𝒆𝒓𝒓𝒂𝒓]
༻ ${prefix}add @𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆𝒍 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 
༻ ${prefix}kick @𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆𝒍 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 
༻ ${prefix}tagall [𝑫𝒊𝒍𝒆 𝑨𝒍𝒈𝒐 𝑨 𝑻𝒐𝒅𝒐𝒔]
༻ ${prefix}antilink [𝑶𝒏/𝑶𝒇𝒇]
༻ ${prefix}mute [𝑶𝒏/𝑶𝒇𝒇]
༻ ${prefix}promote @𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆𝒍 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 
༻ ${prefix}demote @𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆𝒍 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 

❖ ── ✦ ──『✙ - ✙』── ✦ ── ❖`
m.reply(txt)
break
case 'menulogos':
txt = `
❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑫𝒆 𝑳𝒐𝒈𝒐𝒔* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}leaves
│༻ ${prefix}wolflogo
│༻ ${prefix}gradasi3d
│༻ ${prefix}pornhub
│༻ ${prefix}shadow
│༻ ${prefix}romantic
│༻ ${prefix}harrypotter
│༻ ${prefix}smoke
│༻ ${prefix}burnpaper
│༻ ${prefix}undergrass
│༻ ${prefix}coffecup
│༻ ${prefix}coffecup2
│༻ ${prefix}butterfly
│༻ ${prefix}lovemessage
│༻ ${prefix}cup
│༻ ${prefix}cup2
│༻ ${prefix}wolfmetal
│༻ ${prefix}underwater
│༻ ${prefix}roses
│༻ ${prefix}whitecube
│༻ ${prefix}nightsky
│༻ ${prefix}flaming
│༻ ${prefix}csgobanner
│༻ ${prefix}lolbanner
│༻ ${prefix}greenleaves
│༻ ${prefix}neondevil
│༻ ${prefix}zeombie3d
│༻ ${prefix}neonlight
│༻ ${prefix}writingchalk
│༻ ${prefix}watercolor
│༻ ${prefix}1917
│༻ ${prefix}thunder
│༻ ${prefix}snake
│༻ ${prefix}wordgreen
│༻ ${prefix}cloud
│༻ ${prefix}metal
│༻ ${prefix}neon
│༻ ${prefix}graffiticollor
│༻ ${prefix}lightgalaxy
│༻ ${prefix}hotmetalic
│༻ ${prefix}graffiti5
│༻ ${prefix}graffiti3
│༻ ${prefix}graffiti
│༻ ${prefix}startsnight
│༻ ${prefix}cake
│༻ ${prefix}birthdaycake
│༻ ${prefix}3dhologram
│༻ ${prefix}galaxystyle
│༻ ${prefix}lighteffects
│༻ ${prefix}greenbrush
│༻ ${prefix}cakes
│༻ ${prefix}startsnight2
│༻ ${prefix}glowing
│༻ ${prefix}wetglass
│༻ ${prefix}blackpinkneon
│༻ ${prefix}3dcrack
│༻ ${prefix}3dunderwater
│༻ ${prefix}graffiti2
│༻ ${prefix}bearlogo
│༻ ${prefix}clouds
│༻ ${prefix}pubgmascot
│༻ ${prefix}summerbeach
│༻ ${prefix}summerbeach2
│༻ ${prefix}glow
│༻ ${prefix}wooden3d
│༻ ${prefix}galaxy
│༻ ${prefix}galaxybat
│༻ ${prefix}brokenglass
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
case 'downloadmenu':
txt = `
❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔 𝑳𝒊𝒏𝒌* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}tiktoknowm [𝑳𝒊𝒏𝒌 𝑻𝒊𝒌𝒕𝒐𝒌]
│༻ ${prefix}tiktokwm [𝑳𝒊𝒏𝒌 𝑻𝒊𝒌𝒕𝒐𝒌]
│༻ ${prefix}tiktokaudio [𝑳𝒊𝒏𝒌 𝑻𝒊𝒌𝒕𝒐𝒌]
│༻ ${prefix}ig [𝑳𝒊𝒏𝒌 𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎]
│༻ ${prefix}ytmp3 [𝑳𝒊𝒏𝒌 𝒀𝒐𝒖𝒕𝒖𝒃𝒆]
│༻ ${prefix}ytmp4 [𝑳𝒊𝒏𝒌 𝒀𝒐𝒖𝒕𝒖𝒃𝒆]
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break 
case 'searchmenu':
txt = `
❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑫𝒆 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}play [𝑻𝒊𝒕𝒖𝒍𝒐 𝑫𝒆𝒍 𝑽𝒊𝒅𝒆𝒐]
│༻ ${prefix}yts [𝑻𝒊𝒕𝒖𝒍𝒐 𝑫𝒆𝒍 𝑽𝒊𝒅𝒆𝒐]
│༻ ${prefix}google [𝑪𝒐𝒏𝒔𝒖𝒍𝒕𝒂]
│༻ ${prefix}gimage [𝑵𝒐𝒎𝒃𝒓𝒆 𝑫𝒆 𝑳𝒂 𝑰𝒎𝒈]
│༻ ${prefix}pinterest [𝑵𝒐𝒎𝒃𝒓𝒆 𝑫𝒆 𝑳𝒂 𝑰𝒎𝒈]
│༻ ${prefix}wallpaper [𝑵𝒐𝒎𝒃𝒓𝒆 𝑭𝒐𝒏𝒅𝒐]
│༻ ${prefix}wikimedia [𝑪𝒐𝒏𝒔𝒖𝒍𝒕𝒂]
│༻ ${prefix}ytsearch [𝑪𝒐𝒏𝒔𝒖𝒍𝒕𝒂 𝑬𝒏 𝒀𝒐𝒖𝒕𝒖𝒃𝒆]
│༻ ${prefix}ringtone [query]
│༻ ${prefix}igstalk
│༻ ${prefix}ghstalk
│༻ ${prefix}ytstalk
│༻ ${prefix}tiktokstalk
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
case 'wibumenu':
txt = `
❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑫𝒆 𝑷𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆𝒔* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}coffe
│༻ ${prefix}quotesanime
│༻ ${prefix}ppcp
│༻ ${prefix}anime
│༻ ${prefix}neko
│༻ ${prefix}waifu
│༻ ${prefix}husbu
│༻ ${prefix}loli
│༻ ${prefix}wallml
│༻ ${prefix}milf
│༻ ${prefix}cosplay
│༻ ${prefix}sagiri
│༻ ${prefix}naruto
│༻ ${prefix}kaneki
│༻ ${prefix}rimuru
│༻ ${prefix}akira
│༻ ${prefix}kurama
│༻ ${prefix}dazai
│༻ ${prefix}miku
│༻ ${prefix}mikasa
│༻ ${prefix}eren
│༻ ${prefix}titan
│༻ ${prefix}levi
│༻ ${prefix}sakura
│༻ ${prefix}hinata
│༻ ${prefix}neji
│༻ ${prefix}shinobu
│༻ ${prefix}kurumi
│༻ ${prefix}rem
│༻ ${prefix}minato
│༻ ${prefix}jiraya
│༻ ${prefix}tsunade
│༻ ${prefix}kiba
│༻ ${prefix}boruto
│༻ ${prefix}sarada
│༻ ${prefix}sasuke
│༻ ${prefix}madara
│༻ ${prefix}obito
│༻ ${prefix}tanjiro
│༻ ${prefix}nezuko
│༻ ${prefix}luffy
│༻ ${prefix}zoro
│༻ ${prefix}sanji
│༻ ${prefix}gon
│༻ ${prefix}killua
│༻ ${prefix}zenitsu
│༻ ${prefix}natsu
│༻ ${prefix}genos
│༻ ${prefix}saitama
│༻ ${prefix}inosuke
│༻ ${prefix}inori
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
│ʳᵉᶜᵘᵉʳᵈᵉⁿ ˢᵉʳ ᵉˢᵖᵉᶜⁱᶠⁱᶜᵒˢ ᵖᵃʳᵃ ᵉᵛⁱᵗᵃʳ ᵇᵘᵍˢ
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
case 'voicemenu':
txt = `
❦ ════ •⊰❂ *𝑨𝒍𝒕𝒆𝒓𝒂𝒅𝒐𝒓 𝑫𝒆 𝑽𝒐𝒛* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}bass
│༻ ${prefix}blown
│༻ ${prefix}deep
│༻ ${prefix}earrape
│༻ ${prefix}fast
│༻ ${prefix}fat
│༻ ${prefix}nightcore
│༻ ${prefix}reverse
│༻ ${prefix}robot
│༻ ${prefix}slow
│༻ ${prefix}tupai
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
case 'databasemenu':
txt = `
❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑵𝒖𝒃𝒆* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}setcmd
│༻ ${prefix}listcmd
│༻ ${prefix}delcmd
│༻ ${prefix}lockcmd
│༻ ${prefix}addmsg
│༻ ${prefix}listmsg
│༻ ${prefix}getmsg
│༻ ${prefix}delmsg
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
case 'asupanmenu':
txt = `
┌──⭓ *Asupan Menu*
│
│༻ ${prefix}asupan
│༻ ${prefix}rikagusriani
│༻ ${prefix}ukty
│༻ ${prefix}bocil
│༻ ${prefix}ghea
│༻ ${prefix}santuy
│
└───────⭓`
m.reply(txt)
break
case 'nsfwmenu':
txt = `
❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 +18* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}futanari
│༻ ${prefix}eroneko
│༻ ${prefix}anal
│༻ ${prefix}hentai
│༻ ${prefix}ahegao
│༻ ${prefix}ass
│༻ ${prefix}blowjob
│༻ ${prefix}bdsm
│༻ ${prefix}cuckold
│༻ ${prefix}cum
│༻ ${prefix}ero
│༻ ${prefix}femdom
│༻ ${prefix}foot
│༻ ${prefix}gangbang
│༻ ${prefix}glasses
│༻ ${prefix}masturbation
│༻ ${prefix}orgy
│༻ ${prefix}panties
│༻ ${prefix}pussy
│༻ ${prefix}things
│༻ ${prefix}yuri
│༻ ${prefix}eroneko
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
case 'ownermenu':
txt = `
❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑳𝒖𝒄𝒊𝒇𝒆𝒓* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}chat [𝑶𝒑𝒄𝒊𝒐𝒏]
│༻ ${prefix}join [𝑳𝒊𝒏𝒌 𝑮𝒓𝒖𝒑𝒐]
│༻ ${prefix}leave
│༻ ${prefix}block @𝑼𝒔𝒖𝒂𝒓𝒊𝒐
│༻ ${prefix}unblock @𝑼𝒔𝒖𝒂𝒓𝒊𝒐
│༻ ${prefix}bcgroup [𝑻𝒆𝒙𝒕𝒐]
│༻ ${prefix}bcall [𝑻𝒆𝒙𝒕𝒐]
│༻ ${prefix}setppbot [𝑰𝒎𝒂𝒈𝒆𝒏]
│༻ ${prefix}setexif
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
case 'convertmenu':
txt = `
❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑨𝒍𝒕𝒆𝒓𝒂𝒅𝒐𝒓* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}toimage
│༻ ${prefix}removebg
│༻ ${prefix}sticker
│༻ ${prefix}triger
│༻ ${prefix}wasted
│༻ ${prefix}wanted
│༻ ${prefix}trash
│༻ ${prefix}circle
│༻ ${prefix}jail
│༻ ${prefix}rainbow
│༻ ${prefix}beautiful
│༻ ${prefix}blur
│༻ ${prefix}burn
│༻ ${prefix}brightness
│༻ ${prefix}emojimix
│༻ ${prefix}tovideo
│༻ ${prefix}togif
│༻ ${prefix}tourl
│༻ ${prefix}tovn
│༻ ${prefix}tomp3
│༻ ${prefix}toaudio
│༻ ${prefix}ebinary
│༻ ${prefix}dbinary
│༻ ${prefix}styletext
│
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
└───────────────────★᭄ꦿ᭄ꦿ`
m.reply(txt)
break
           case 'allmenu': {
                anu = `
╭====『𝕄𝕖𝕟𝕦 ℂ𝕠𝕞𝕡𝕝𝕖𝕥𝕠』
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╯
┃𝑯𝒐𝒍𝒂 ${pushname}
│𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅@ 𝑨𝒍 𝑴𝒆𝒏𝒖 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒐
┃𝑫𝒆𝒍 𝑩𝒐𝒕, 𝑨𝒒𝒖𝒊 𝑬𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓𝒂𝒔
│𝑻𝒐𝒅𝒐𝒔 𝑳𝒐𝒔 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑸𝒖𝒆
┃𝑷𝒐𝒔𝒆𝒐
╰━╍━╍━╍━╍━╍━╍━╍➤
❦ ════ •⊰❂ *𝑮𝒆𝒔𝒕𝒊𝒐𝒏 𝑫𝒆 𝑮𝒓𝒖𝒑𝒐* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╮
╿༻ ${prefix}linkgroup [𝑻𝒆 𝑫𝒂𝒓𝒆 𝑬𝒍 𝑬𝒏𝒍𝒂𝒄𝒆]
╽༻ ${prefix}setppgc [𝑰𝒎𝒂𝒈𝒆𝒏]
╿༻ ${prefix}setname [𝑵𝒖𝒆𝒗𝒐 𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝑮𝒓𝒖𝒑𝒐]
╽༻ ${prefix}setdesc [𝑵𝒖𝒆𝒗𝒂 𝑫𝒆𝒔𝒄𝒓𝒊𝒑𝒄𝒊𝒐́𝒏 𝑫𝒆𝒍 𝑮𝒓𝒖𝒑𝒐 ]
╿༻ ${prefix}group [𝑨𝒃𝒓𝒊𝒓/𝑪𝒆𝒓𝒓𝒂𝒓]
╽༻ ${prefix}add @𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆𝒍 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 
╿༻ ${prefix}kick @𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆𝒍 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 
╽༻ ${prefix}tagall [𝑫𝒊𝒍𝒆 𝑨𝒍𝒈𝒐 𝑨 𝑻𝒐𝒅𝒐𝒔]
╿༻ ${prefix}antilink [𝑶𝒏/𝑶𝒇𝒇]
╽༻ ${prefix}mute [𝑶𝒏/𝑶𝒇𝒇]
╿༻ ${prefix}promote @𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆𝒍 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 
╽༻ ${prefix}demote @𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆𝒍 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔 𝑳𝒊𝒏𝒌* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╮
│
│༻ ${prefix}tiktoknowm [𝑳𝒊𝒏𝒌 𝑻𝒊𝒌𝒕𝒐𝒌]
│༻ ${prefix}tiktokwm [𝑳𝒊𝒏𝒌 𝑻𝒊𝒌𝒕𝒐𝒌]
│༻ ${prefix}tiktokaudio [𝑳𝒊𝒏𝒌 𝑻𝒊𝒌𝒕𝒐𝒌]
│༻ ${prefix}ig [𝑳𝒊𝒏𝒌 𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎]
│༻ ${prefix}ytmp3 [𝑳𝒊𝒏𝒌 𝒀𝒐𝒖𝒕𝒖𝒃𝒆]
│༻ ${prefix}ytmp4 [𝑳𝒊𝒏𝒌 𝒀𝒐𝒖𝒕𝒖𝒃𝒆]
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑫𝒆 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}play [𝑻𝒊𝒕𝒖𝒍𝒐 𝑫𝒆𝒍 𝑽𝒊𝒅𝒆𝒐]
│༻ ${prefix}yts [𝑻𝒊𝒕𝒖𝒍𝒐 𝑫𝒆𝒍 𝑽𝒊𝒅𝒆𝒐]
│༻ ${prefix}google [𝑪𝒐𝒏𝒔𝒖𝒍𝒕𝒂]
│༻ ${prefix}gimage [𝑵𝒐𝒎𝒃𝒓𝒆 𝑫𝒆 𝑳𝒂 𝑰𝒎𝒈]
│༻ ${prefix}pinterest [𝑵𝒐𝒎𝒃𝒓𝒆 𝑫𝒆 𝑳𝒂 𝑰𝒎𝒈]
│༻ ${prefix}wallpaper [𝑵𝒐𝒎𝒃𝒓𝒆 𝑭𝒐𝒏𝒅𝒐]
│༻ ${prefix}wikimedia [𝑪𝒐𝒏𝒔𝒖𝒍𝒕𝒂]
│༻ ${prefix}ytsearch [𝑪𝒐𝒏𝒔𝒖𝒍𝒕𝒂 𝑬𝒏 𝒀𝒐𝒖𝒕𝒖𝒃𝒆]
│༻ ${prefix}ringtone [query]
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑫𝒆 𝑷𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆𝒔* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}coffe
│༻ ${prefix}quotesanime
│༻ ${prefix}ppcp
│༻ ${prefix}anime
│༻ ${prefix}neko
│༻ ${prefix}waifu
│༻ ${prefix}husbu
│༻ ${prefix}loli
│༻ ${prefix}wallml
│༻ ${prefix}milf
│༻ ${prefix}cosplay
│༻ ${prefix}sagiri
│༻ ${prefix}naruto
│༻ ${prefix}kaneki
│༻ ${prefix}rimuru
│༻ ${prefix}akira
│༻ ${prefix}kurama
│༻ ${prefix}dazai
│༻ ${prefix}miku
│༻ ${prefix}mikasa
│༻ ${prefix}eren
│༻ ${prefix}titan
│༻ ${prefix}levi
│༻ ${prefix}sakura
│༻ ${prefix}hinata
│༻ ${prefix}neji
│༻ ${prefix}shinobu
│༻ ${prefix}kurumi
│༻ ${prefix}rem
│༻ ${prefix}minato
│༻ ${prefix}jiraya
│༻ ${prefix}tsunade
│༻ ${prefix}kiba
│༻ ${prefix}boruto
│༻ ${prefix}sarada
│༻ ${prefix}sasuke
│༻ ${prefix}madara
│༻ ${prefix}obito
│༻ ${prefix}tanjiro
│༻ ${prefix}nezuko
│༻ ${prefix}luffy
│༻ ${prefix}zoro
│༻ ${prefix}sanji
│༻ ${prefix}gon
│༻ ${prefix}killua
│༻ ${prefix}zenitsu
│༻ ${prefix}natsu
│༻ ${prefix}genos
│༻ ${prefix}saitama
│༻ ${prefix}inosuke
│༻ ${prefix}inori
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
│ʳᵉᶜᵘᵉʳᵈᵉⁿ ˢᵉʳ ᵉˢᵖᵉᶜⁱᶠⁱᶜᵒˢ ᵖᵃʳᵃ ᵉᵛⁱᵗᵃʳ ᵇᵘᵍˢ
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑫𝒆 𝑳𝒐𝒈𝒐𝒔* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}leaves
│༻ ${prefix}wolflogo
│༻ ${prefix}gradasi3d
│༻ ${prefix}pornhub
│༻ ${prefix}shadow
│༻ ${prefix}romantic
│༻ ${prefix}harrypotter
│༻ ${prefix}smoke
│༻ ${prefix}burnpaper
│༻ ${prefix}undergrass
│༻ ${prefix}coffecup
│༻ ${prefix}coffecup2
│༻ ${prefix}butterfly
│༻ ${prefix}lovemessage
│༻ ${prefix}cup
│༻ ${prefix}cup2
│༻ ${prefix}wolfmetal
│༻ ${prefix}underwater
│༻ ${prefix}roses
│༻ ${prefix}whitecube
│༻ ${prefix}nightsky
│༻ ${prefix}flaming
│༻ ${prefix}csgobanner
│༻ ${prefix}lolbanner
│༻ ${prefix}greenleaves
│༻ ${prefix}neondevil
│༻ ${prefix}zeombie3d
│༻ ${prefix}neonlight
│༻ ${prefix}writingchalk
│༻ ${prefix}watercolor
│༻ ${prefix}1917
│༻ ${prefix}thunder
│༻ ${prefix}snake
│༻ ${prefix}wordgreen
│༻ ${prefix}cloud
│༻ ${prefix}metal
│༻ ${prefix}neon
│༻ ${prefix}graffiticollor
│༻ ${prefix}lightgalaxy
│༻ ${prefix}hotmetalic
│༻ ${prefix}graffiti5
│༻ ${prefix}graffiti3
│༻ ${prefix}graffiti
│༻ ${prefix}startsnight
│༻ ${prefix}cake
│༻ ${prefix}birthdaycake
│༻ ${prefix}3dhologram
│༻ ${prefix}galaxystyle
│༻ ${prefix}lighteffects
│༻ ${prefix}greenbrush
│༻ ${prefix}cakes
│༻ ${prefix}startsnight2
│༻ ${prefix}glowing
│༻ ${prefix}wetglass
│༻ ${prefix}blackpinkneon
│༻ ${prefix}3dcrack
│༻ ${prefix}3dunderwater
│༻ ${prefix}graffiti2
│༻ ${prefix}bearlogo
│༻ ${prefix}clouds
│༻ ${prefix}pubgmascot
│༻ ${prefix}summerbeach
│༻ ${prefix}summerbeach2
│༻ ${prefix}glow
│༻ ${prefix}wooden3d
│༻ ${prefix}galaxy
│༻ ${prefix}galaxybat
│༻ ${prefix}brokenglass
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑨𝒍𝒕𝒆𝒓𝒂𝒅𝒐𝒓* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}toimage
│༻ ${prefix}sticker
│༻ ${prefix}triger
│༻ ${prefix}wasted
│༻ ${prefix}wanted
│༻ ${prefix}trash
│༻ ${prefix}circle
│༻ ${prefix}jail
│༻ ${prefix}rainbow
│༻ ${prefix}beautiful
│༻ ${prefix}blur
│༻ ${prefix}burn
│༻ ${prefix}brightness
│༻ ${prefix}emojimix
│༻ ${prefix}tovideo
│༻ ${prefix}togif
│༻ ${prefix}tourl
│༻ ${prefix}tovn
│༻ ${prefix}tomp3
│༻ ${prefix}toaudio
│
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 +18* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}futanari
│༻ ${prefix}eroneko
│༻ ${prefix}anal
│༻ ${prefix}hentai
│༻ ${prefix}ahegao
│༻ ${prefix}ass
│༻ ${prefix}blowjob
│༻ ${prefix}bdsm
│༻ ${prefix}cuckold
│༻ ${prefix}cum
│༻ ${prefix}ero
│༻ ${prefix}femdom
│༻ ${prefix}foot
│༻ ${prefix}gangbang
│༻ ${prefix}glasses
│༻ ${prefix}masturbation
│༻ ${prefix}orgy
│༻ ${prefix}panties
│༻ ${prefix}pussy
│༻ ${prefix}things
│༻ ${prefix}yuri
│༻ ${prefix}eroneko
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑵𝒖𝒃𝒆* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}setcmd
│༻ ${prefix}listcmd
│༻ ${prefix}delcmd
│༻ ${prefix}lockcmd
│༻ ${prefix}addmsg
│༻ ${prefix}listmsg
│༻ ${prefix}getmsg
│༻ ${prefix}delmsg
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑨𝒍𝒕𝒆𝒓𝒂𝒅𝒐𝒓 𝑫𝒆 𝑽𝒐𝒛* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}bass
│༻ ${prefix}blown
│༻ ${prefix}deep
│༻ ${prefix}earrape
│༻ ${prefix}fast
│༻ ${prefix}fat
│༻ ${prefix}nightcore
│༻ ${prefix}reverse
│༻ ${prefix}robot
│༻ ${prefix}slow
│༻ ${prefix}tupai
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤

❦ ════ •⊰❂ *𝑴𝒆𝒏𝒖 𝑳𝒖𝒄𝒊𝒇𝒆𝒓* ❂⊱• ════ ❦
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╮
│
│༻ ${prefix}chat [𝑶𝒑𝒄𝒊𝒐𝒏]
│༻ ${prefix}join [𝑳𝒊𝒏𝒌 𝑮𝒓𝒖𝒑𝒐]
│༻ ${prefix}leave
│༻ ${prefix}block @𝑼𝒔𝒖𝒂𝒓𝒊𝒐
│༻ ${prefix}unblock @𝑼𝒔𝒖𝒂𝒓𝒊𝒐
│༻ ${prefix}bcgroup [𝑻𝒆𝒙𝒕𝒐]
│༻ ${prefix}bcall [𝑻𝒆𝒙𝒕𝒐]
│༻ ${prefix}setppbot [𝑰𝒎𝒂𝒈𝒆𝒏]
│༻ ${prefix}setexif
├╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╯
╰╾╍╼╍╾╍╼╾╍╼╍╾╍╼╍╾╍╼➤`
                let btn = [{
                                urlButton: {
                                    displayText: '𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒄𝒌『𝔽』',
                                    url: 'https://www.facebook.com/onii.sama.5076'
                                }
                            }, {
                                callButton: {
                                    displayText: '𝑳𝒍𝒂𝒎𝒂𝒓 𝑨𝒍 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 『📞』',
                                    phoneNumber: '+54 9 3757 61-8440'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑬𝒔𝒕𝒂𝒅𝒐 𝑫𝒆𝒍 𝑩𝒐𝒕 『❗』',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐 𝑫𝒆𝒍 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 『👤』',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏 𝑫𝒆𝒍 𝑩𝒐𝒕 『❕』',
                                    id: 'infobot'
                                }
                            }]
                        zass.send5ButImg(m.chat, anu, zass.user.name, global.thumb, btn)
                     }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    zass.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Este archivo fue actualizado ${__filename}`))
	delete require.cache[file]
	require(file)
})
