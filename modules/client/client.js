let tmi = require('tmi.js');
let channels = ["MrJunior717"]
require("dotenv").config()

let options = {
    options: {
        debug: true
    },
    connection: {
        "cluster": "aws",
        "reconnect": true
    },
    identity:{
        username: "MrJunior717",
        password: process.env.BOT_TOKEN
    },
    channels:channels
}
let client = tmi.client(options);

module.exports = {client}