import { fork } from 'child_process'
import { setTimeout } from 'timers/promises'
import { createReadStream } from 'fs'
import { pipeline } from 'stream/promises'
import { Writable } from 'stream'
import csvtojson from 'csvtojson'

const database = './data/All_Pokemon2.csv'

const PROCESS_COUNT = 10;

const backgroundTaskFile = './src/backgroundTask.js'
const processes = new Map()
for(let index=0; index < PROCESS_COUNT; index++) {
    const child = fork(backgroundTaskFile, [database])
    processes.set(child.pid, child)
}


function roundRoubin(array, index=0) {
    return function() {
        if(index >= array.length) index=0

        return array[index++]
    }
}
// Pooll de conexões, ou load balancer
const getProcess = roundRoubin([...processes.values()])
console.log(`startting with ${processes.size} processes`)
await setTimeout(100)

await pipeline(
    createReadStream(database),
    csvtojson(),
    Writable({
        write(chunk, enc, cb) {
            const chosenProcess = getProcess()
            chosenProcess.send(JSON.parse(chunk))
            cb()
        }
    })
)
// TODO 24:24 https://training.erickwendel.com.br/92103-formacao-javascript-expert/2196755-processamento-massivo-em-arquivos-usando-child-processes-fork