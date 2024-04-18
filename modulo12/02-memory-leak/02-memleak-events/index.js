import { createServer} from 'http'

import Events from 'events'

const myEvent = new Events()
function onData() {
    const items = []
    setInterval(() => items.push(Date.now()))
}

createServer((_, response) => {
    myEvent.on('data', onData)

    myEvent.emit('data', Date.now())

    response.end('ok')
}).listen(3000, () => console.log('running at 3000'))