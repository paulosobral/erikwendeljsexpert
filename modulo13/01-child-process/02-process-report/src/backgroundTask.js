import { createReadStream } from 'fs'
import { pipeline } from 'stream/promises'
import { Writable, Transform } from 'stream'
import csvtojson from 'csvtojson'

const database = process.argv[2]

async function onMessage(msg) {
    const firstTimeRun = []

    await pipeline(
        createReadStream(database),
        csvtojson(),
        Transform({
            transform(chunk, enc, cb) {
                const data = JSON.parse(chunk)
                if(data.Name !== msg.Name) return cb()
                
                if(firstTimeRun.includes(msg.Name)) {
                    return cb(null, msg.Name)
                }

                firstTimeRun.push(msg.Name)
                cb()
            }
        }),
        Writable({
            write(chunk, enc, cb) {
                if(!chunk) return cb()

                process.send(chunk.toString())
            }
        })
    )
}

process.on('message', onMessage)

// console.log(`I'm ready!! ${process.pid}`, database)