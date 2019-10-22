let db = require("./dataStore.js")


function get(guild,type, options) {
    return new Promise(async(res, rej) => {
        try{                
            let data = await db.get()
            
            data.find(option, (err, docs) => {
                if (err) rej(`finding: ${err}`)
                res(docs)                
            })        
        } catch(e){
            rej(`[ERROR][REPO][GET] ${e}`)
        }
    })
}
async function add(channel, object) {
    return new Promise(async(res, rej) => {
        try {
            let data = await db.get()        
            data.insert(object, (err) => {                    
                if (err) rej(`inserting: ${err}`)
                res()
            })
        } catch (e) {
            rej(`[ERROR][REPO][ADD] ${e}`)
        }
    })
}


async function update(channel, object) =>{
    return new Promise(async(res, rej) => {
        try {
            let data = await db.get()        
            data.update({id:object.id},{$set: object}, (err) => {                    
                if (err) rej(`inserting: ${err}`)
                res()
            })
        } catch (e) {
            rej(`[ERROR][REPO][ADD] ${e}`)
        }
    })
})





module.exports = {
    get,
    add,
    update
}
