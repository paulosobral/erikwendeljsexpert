import { createServer } from 'http'
import { appendFile } from 'fs'

async function handler(request, response) {
    await appendFile('.log.txt', `processed by ${process.pid}\n`)
    const result = Array.from(({}))
}

createServer(handler)
    .listen(3000, () => console.log(`Server running at 3000 AND pid ${process.pid}`))

// TODO: 05:15 https://training.erickwendel.com.br/92103-formacao-javascript-expert/2196749-turbinando-uma-web-api-existente-com-o-modulo-cluster-teste-de-carga-com