import { createServer} from 'http'

import Events from 'events'
import { randomBytes } from 'crypto'
const myEvent = new Events()

function getBbytes() {
    return randomBytes(10000)
}

function onData() {
    getBbytes()
    const items = []
    // setInterval(function myInterval() { items.push(Date.now())})
}


createServer(function handler(_, response) {
    myEvent.on('data', onData)

    myEvent.emit('data', Date.now())

    response.end('ok')
}).listen(3000, () => console.log('running at 3000'))