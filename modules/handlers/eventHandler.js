require('dotenv').config()
let dr = require("../database/dataRepo.js")
let error = require("../logger/error.js")
let commandHandler = require("./commandHandler.js")
let messageHandler = require("./messageHandler.js")
let joinHandler = require(".joinHandler.js")

function handleMessage(message) {
    try {
        console.log(message)

        messageHandler.handle(message)
        commandHandler.handle(message)
        
    }
    catch (e) {
        error.log(e.logError)
        channel.send(e.chatError)
    }
}


function async handleBan(user) {
    try {
       let response = await dr.remove(user.id)
       
    }
    catch (e) {
        error.log(e.logError)
        channel.send(e.chatError)
    }
}

function handleJoin(member) {
    try {
        dr.add(member.guild.id, "membersJoined", {
            user: user.id,
            type: "join"
        })
        dr.add(member.guild.id, "membersTotal", {
            total: member.guild.membersCount
        })
    }
    catch (e) {
        error.log(e)
    }
}

function handleLeave(member) {
    try {
        dr.add(member.guild.id, "membersJoined", {
            user: user.id,
            type: "leave"
        })
        dr.add(member.guild.id, "membersTotal", {
            total: member.guild.membersCount
        })
    }
    catch (e) {
        error.log(e)
    }
}

function handleReady(client) {
    try {
        console.log(`active in ${client.guilds.size} servers`)
        let guild = client.guilds.get(process.env.owner_guild)
        let owner = guild.members.get(process.env.owner)
        if (owner)
            error.setOwner(owner)
        console.log(`Ready to send to owner: ${owner.displayName}`)
    }
    catch (e) {
        error.log(e)
    }
}

module.exports = {
    message: handleMessage,
    ban: handleBan,
    join: handleJoin,
    leave: handleLeave,
    ready: handleReady
}
