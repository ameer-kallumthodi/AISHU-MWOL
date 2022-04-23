const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/mJhs5Bc.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `ᴀɪꜱʜᴜ ᴍᴡᴏʟ Bᴏᴛ💝
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/918590451659

ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/919946432377

ᴀɪꜱʜᴜ ᴍᴡᴏʟ ʙᴏᴛ ɢʀᴏᴜᴩ: https://chat.whatsapp.com/Bkr0eUKoVse2VgmFazzk4t

Gɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/AXN4/AISHU-MWOL

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/AXN4/AISHU-MWOL/tree/master/Aishu_bgms

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/AXN4/AISHU-MWOL/tree/master/Aishu_stickers


💝ᴛʜɪs ʙᴏᴛ ᴡᴀs ᴄʀᴇᴀᴛᴇᴅ Bʏ ᴀxɴ4💝
`}) 

}));
