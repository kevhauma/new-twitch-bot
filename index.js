let {client} = require('./modules/client/client.js');
const handler = require("./modules/handlers/eventHandler.js")
client.connect();

client.on("connected", (address, port) => {
    console.log("started on " + address + ":" + port);
})

client.on("chat",               handler.message)    //(channel, userstate, message, self)

client.on("join",               handler.join);      //(channel, username, self)

client.on("part",               handler.leave);     //(channel, username, self)

client.on("subscription",       handler.subscribe)  //(channel, username, method, message, userstate)

client.on("giftpaidupgrade",    handler.gift)       //(channel, username, sender, userstate)

client.on("subscription",       handler.subscribe)  //(channel, username, method, message, userstate)

client.on("cheer",              handler.cheer)      //(channel, userstate, message) 

client.on("raided",             handler.raid)       //(channel, username, viewers)

client.on("hosted",             handler.host)       //(channel, username, viewers, autohost)

client.on("anongiftpaidupgrade",handler.anonGift)   //(channel, username, userstate)

client.on("ban",                hander.ban)         //(channel, username, reason, userstate)