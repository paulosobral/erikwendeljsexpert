const http = require('http')
const handler = require('./routes')

const app = http.createServer(handler)
    .listen(3000, () => console.log('running at 3000'))

module.exports = app