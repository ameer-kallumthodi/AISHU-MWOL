const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'list', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 
๐คน๐ปโโ๏ธ .xmedia
๐ It is a plugin with more than 25 media tools._ 

๐คน๐ปโโ๏ธ .audio command
๐ Bot send all bgm commands 

๐คน๐ปโโ๏ธ .ownercmnd
๐ set of commands for bot user or sudo_

๐คน๐ปโโ๏ธ .codtts
๐ language code to change the voice in .tts & also for .trt translation_ 

๐คน๐ปโโ๏ธ .adan 
๐ Finds prayer time._ 
๐ฌ Eg:- : .prayer <city>

๐คน๐ปโโ๏ธ .rename 
๐ [object Object]_ 

๐คน๐ปโโ๏ธ .revoke

๐คน๐ปโโ๏ธ .git
๐ it send bot making git

๐คน๐ปโโ๏ธ .print 
๐ Prints the inside of the file on the server._ 

๐คน๐ปโโ๏ธ .bashmedia 
๐ Sends audio, video and photos inside the server._ 
๐ฌ Eg:- : video.mp4 && media/gif/pic.mp4

๐คน๐ปโโ๏ธ .addserver
๐ Uploads image, audio or video to the server._ 

๐คน๐ปโโ๏ธ .term1 
๐ Allows to run the command on the server's shell._ 

๐คน๐ปโโ๏ธ .findvid
๐ Shows the technical information of the replied video._ 

๐คน๐ปโโ๏ธ .pm 
๐ Sends a private message to the replied person._ 

๐คน๐ปโโ๏ธ .s 
๐ Sends a private voice message to the respondent._ 

๐คน๐ปโโ๏ธ .anime
๐ random anime image _ 

๐คน๐ปโโ๏ธ .apkmod

๐คน๐ปโโ๏ธ .fatp

๐คน๐ปโโ๏ธ .ttp 
๐ Converts text to plain painting._ 

๐คน๐ปโโ๏ธ .attp 
๐ Adds rainbow effect to the text as a sticker._ 

๐คน๐ปโโ๏ธ .bob 
๐ Make text on sponge bob's board_ 

๐คน๐ปโโ๏ธ .slot 
๐ Mini game for you_ 

๐คน๐ปโโ๏ธ .gura 
๐ Create gawr gura text_ 

๐คน๐ปโโ๏ธ .harta 
๐ Create random texts_ 

๐คน๐ปโโ๏ธ .rip 
๐ Please provide an image link for the effect to be applied (Apply death effect)_ 

๐คน๐ปโโ๏ธ .qrcode 
๐ Create random texts_ 

๐คน๐ปโโ๏ธ .nulis 
๐ Create random texts_ 

๐คน๐ปโโ๏ธ .sand 
๐ Create random texts_ 

๐ .bgm 
๐ turn on and turn off bgm. -bot owner command_ 
๐ฌ Eg:- : .bgm on / off

๐คน๐ปโโ๏ธ .carbon
๐ It sends carbon picture_ 

๐คน๐ปโโ๏ธ .warn
๐ warning message_ 

๐คน๐ปโโ๏ธ .bgm 
๐ change reply message BGM mode_ 
๐ฌ Eg:- : .bgm one / two

๐คน๐ปโโ๏ธ .git 
๐ owner number_ 

๐คน๐ปโโ๏ธ .mp3
๐ Converts video to sound._ 

๐คน๐ปโโ๏ธ .photo
๐ Converts the sticker to a photo._ 

๐คน๐ปโโ๏ธ .mp4
๐ Converts animated stickers to video._ 

๐คน๐ปโโ๏ธ .doc 
๐ CONVERT TO DOCUMENT AND ADD GIVEN NAME_ 
๐ฌ Eg:- :.doc pinky *replace pinky with desired name*

๐คน๐ปโโ๏ธ .dict 
๐ Use it as a dictionary.
Eg: .dict en_US;lead
 For supporting languages send *.lngcode*

๐คน๐ปโโ๏ธ .meme 
๐ Photo memes you replied to.

๐คน๐ปโโ๏ธ .welcome
๐ It sets the welcome message. If you leave it blank it shows the welcome message._ 

๐คน๐ปโโ๏ธ .goodbye
๐ Sets the goodbye message. If you leave blank, it show's the goodbye message._ 

๐คน๐ปโโ๏ธ .antilink 
๐ Activates the Antilink tool._ 
๐ฌ Eg:- : .antilink on / off

๐คน๐ปโโ๏ธ .mediafire 

๐คน๐ปโโ๏ธ .moretxt
๐ more txtit commands_ 

๐คน๐ปโโ๏ธ .ffire 
๐ add your text to random freefire logo_ 

๐คน๐ปโโ๏ธ .emo 
๐ emogi to png_ 

๐คน๐ปโโ๏ธ .notes
๐ Shows all your existing notes._ 

๐คน๐ปโโ๏ธ .save 
๐ Reply a message and type .save or just use .save <Your note> without replying_ 

๐คน๐ปโโ๏ธ .deleteNotes
๐ Deletes *all* your saved notes.

๐คน๐ปโโ๏ธ .owner
๐ shows the detail of bot owner

๐คน๐ปโโ๏ธ .jid 
๐ Giving user's JID.

๐คน๐ปโโ๏ธ .random 
๐ word image_ 

๐คน๐ปโโ๏ธ .brdmore 
๐ add readmore before your text

๐คน๐ปโโ๏ธ .rdmore 
๐ add readmore before your text

๐คน๐ปโโ๏ธ .removebg 
๐ Removes the background of the photos._ 

๐คน๐ปโโ๏ธ .report 
๐ Sends reports to group admins._ 

๐คน๐ปโโ๏ธ .get 

๐คน๐ปโโ๏ธ .scan 
๐ Checks whether the entered number is registered on WhatApp._ 

๐คน๐ปโโ๏ธ .trt
๐ It translates with Google Translate. You must reply any message._ 
๐ฌ Eg:- : .trt tr it (From Turkish to Italian)

๐คน๐ปโโ๏ธ .detectlang
๐ Guess the language of the replied message._ 

๐คน๐ปโโ๏ธ .currency

๐คน๐ปโโ๏ธ .tts 
๐ It converts text to sound._ 

๐คน๐ปโโ๏ธ .song 
๐ Uploads the song you wrote._ 

๐คน๐ปโโ๏ธ .video 
๐ Downloads video from YouTube._ 

๐คน๐ปโโ๏ธ .sing 
๐ It sings song that you have written_ 

๐คน๐ปโโ๏ธ .song 
๐ Uploads the song you wrote for ios users._ 

๐คน๐ปโโ๏ธ .wiki 
๐ Searches query on Wikipedia._ 

๐คน๐ปโโ๏ธ .img 
๐ Searches for related pics on Google._ 

๐คน๐ปโโ๏ธ .github 
๐ Collects github information from the given username.
โจ๏ธ Example: .github phaticusthiccy_ 
 
๐คน๐ปโโ๏ธ .lyric 
๐ Finds the lyrics of the song._ 

๐คน๐ปโโ๏ธ .covid 
๐ Shows the daily and overall covid table of more than 15 countries._ 

๐คน๐ปโโ๏ธ .sweather 
๐ Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p._ 

๐คน๐ปโโ๏ธ .compliment 
๐ It sends complimentry sentenses_ 

๐คน๐ปโโ๏ธ .hmod 
๐ Finds mod apps from happymod_ 

๐คน๐ปโโ๏ธ .insult 
๐ It sends insulted words_ 

๐คน๐ปโโ๏ธ .movie 
๐ Shows movie info._ 

๐คน๐ปโโ๏ธ .joke 
๐ It sends random jokes_ 

๐คน๐ปโโ๏ธ .roll
๐ roll dise 

๐คน๐ปโโ๏ธ .owner
๐ shows the detail of bot owner_ 

๐คน๐ปโโ๏ธ .quote 
๐ It shares famous quotes_ 

๐คน๐ปโโ๏ธ .ss 
๐ Takes a screenshot from the page in the given link._ 

๐คน๐ปโโ๏ธ .setvar
๐ It send setvars of bot 

๐คน๐ปโโ๏ธ .encrpt 
๐ Text encryption using base64._ 
๐ฌ Eg:- : .b64en <text>

๐คน๐ปโโ๏ธ .show 
๐ Get info related to tv series and shows_ 

๐คน๐ปโโ๏ธ .ig 
๐ Fetches user informations from instagram_ 

๐คน๐ปโโ๏ธ .animesay 
๐ It writes the text inside the banner the anime girl is holding_ 

๐คน๐ปโโ๏ธ .changesay 
๐ Turns the text into the change my mind poster._ 

๐คน๐ปโโ๏ธ .trumpsay 
๐ Converts the text to Trump's tweet._ 

๐คน๐ปโโ๏ธ .pdf 
๐ Converts a Site into PDF_ 

๐คน๐ปโโ๏ธ .bgm 
๐ turn on and turn off bgm. -bot owner command_ 
๐ฌ Eg:- : .bgm on / off

๐คน๐ปโโ๏ธ .autosticker 
๐ turn on and turn off bgm. -bot owner command_ 
๐ฌ Eg:- : .sticker on / off

๐คน๐ปโโ๏ธ .sudo 
๐ changes sudo numbers_ 
๐ฌ Eg:- : .sudo *your number*

๐คน๐ปโโ๏ธ .caption 
๐ changes all captions_ 
๐ฌ Eg:- : .caption *Made by Miss Helena*

๐คน๐ปโโ๏ธ .number 
๐ change user number_ 
๐ฌ Eg:- : .number *Made by Helena*

๐คน๐ปโโ๏ธ .deployer 
๐ change user name_ 
๐ฌ Eg:- : .deployer *Made by Helena*

๐คน๐ปโโ๏ธ .handlers 
๐ changes handlers_ 
๐ฌ Eg:- : .handler ^[.!] 

๐คน๐ปโโ๏ธ .botname 
๐ change your bot name_ 
๐ฌ Eg:- : .botname *name* 

๐คน๐ปโโ๏ธ .theri  
๐ change your theri commands_ 
๐ฌ Eg:- : .theri command,command

๐คน๐ปโโ๏ธ .sticker
๐ It converts your replied photo or video to sticker._ 

๐คน๐ปโโ๏ธ .ffpack
๐ Free Fire logo maker_ 

๐คน๐ปโโ๏ธ .ffpack
๐ Free Fire logo maker_ 

๐คน๐ปโโ๏ธ .alive
๐ Does bot work?_ 

๐คน๐ปโโ๏ธ .sysd
๐ Shows the system properties._ 

๐คน๐ปโโ๏ธ .tagadmin
๐ Tags group admins._ 

๐คน๐ปโโ๏ธ .txtit
๐ Shows text to image tools with unlimited access._ 

๐คน๐ปโโ๏ธ .antibadword 
๐ turn on & off anti-badword To remove members when they use bad words_ 
๐ฌ Eg:- : .antibadword on / off

๐คน๐ปโโ๏ธ .a 
๐ Converts audio to sound recording._ 

๐คน๐ปโโ๏ธ .unvoice
๐ Converts audio to sound recording._ 

๐คน๐ปโโ๏ธ .update
๐ Checks the update._ 

๐คน๐ปโโ๏ธ .update now
๐ It makes updates._ 

๐คน๐ปโโ๏ธ .wallpaper
๐ It sends high resolution wallpapers._ 

๐คน๐ปโโ๏ธ .wame 
๐ Get a link to the user chat._ 

๐คน๐ปโโ๏ธ .rwarn
๐ Warning message 0_ 

๐คน๐ปโโ๏ธ .weather 
๐ Shows the weather._ 

๐คน๐ปโโ๏ธ .speedtest
๐ Measures Download and Upload speed._ 

๐คน๐ปโโ๏ธ .ping
๐ Measures your ping._ 

๐คน๐ปโโ๏ธ .short 
๐ Shorten the long link._ 

๐คน๐ปโโ๏ธ .calc 
๐ Performs simple math operations._ 

๐คน๐ปโโ๏ธ .sendi
๐ Download status from wa_ 

๐คน๐ปโโ๏ธ .sendv
๐ Download status from wa_ 

๐คน๐ปโโ๏ธ .whois
๐ Displays metadata data of group or person._ 
`}) 

}));
