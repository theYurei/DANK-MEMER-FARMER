const Discord = require('discord.js-self');
const client = new Discord.Client();
const config = require('./config.json');
const { red, green, blue, yellow, cyan } = require('chalk');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


let message = config.message
let linkDiscord = config.linkDiscord
let enterSERVER = config.enterSERVER
let memberADD = config.memberADD
let memberREMOVE = config.memberREMOVE
let timer = config.timer


client.on('ready', () => {

client.user.setActivity(config.activity, { type: 'STREAMING' });

console.log(yellow(`
╔╦╗┌─┐┌┐┌┬┌─  ┌┬┐┌─┐┌┬┐┌─┐┬─┐  ┌─┐┌─┐┬─┐┌┬┐
 ║║├─┤│││├┴┐  │││├┤ │││├┤ ├┬┘  ├┤ ├─┤├┬┘│││
═╩╝┴ ┴┘└┘┴ ┴  ┴ ┴└─┘┴ ┴└─┘┴└─  └  ┴ ┴┴└─┴ ┴
`));
                                                                                                                                        
    console.log(yellow('=========================================================================='));
    console.log(green(`Conectado na conta: ${client.user.tag}`));
    console.log(yellow('=========================================================================='));
    console.log(cyan('G00D BY3 D4NK M3M3R, Y0U H4V3 H4Ck3D'));
    console.log(yellow('=========================================================================='));
    console.log(yellow('=========================================================================='));
    console.log(cyan('Dank memer Farmer: Started'));
console.log(yellow('=========================================================================='));

    var interval = setInterval (function () {
      client.channels.cache.get(config.idchannel).send("pls beg").catch(console.error);}, 1 * 46500);
    
   var interval1 = setInterval (function () {
      client.channels.cache.get(config.idchannel).send("pls fish").catch(console.error);}, 1 * 1800000);

   var interval1 = setInterval (function () {
      client.channels.cache.get(config.idchannel).send("pls sell rarefish all").catch(console.error);}, 1 * 61500);

   var interval1 = setInterval (function () {
      client.channels.cache.get(config.idchannel).send("pls sell fish all").catch(console.error);}, 1 * 1800000);
});




client.login(config.accountToken);
