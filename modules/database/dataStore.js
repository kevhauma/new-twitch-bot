const Datastore = require('nedb')
let db


try {
    loadDatabases()
} catch (e) {
    console.log(e)
}

async function get() {
    if (!db) {
        let db = new Datastore(`./data/${channel}.db`)
        await db.loadDatabase()        
    }
    return db
}
module.exports.get = get
