import { createServer } from 'http'
import { appendFile } from 'fs'

async function handler(request, response) {
    await appendFile('./log.txt', `processed by ${process.pid}\n`)

    const result = Array.from({ length: 1e3 }, _ => Math.floor(Math.random() * 40))
    .reduce((prev, next) => prev + next, 0)

    response.end(result.toString())
}

createServer(handler)
    .listen(3000, () => console.log(`Server running at 3000 AND pid ${process.pid}`))

// TODO: 07:07 https://training.erickwendel.com.br/92103-formacao-javascript-expert/2196749-turbinando-uma-web-api-existente-com-o-modulo-cluster-teste-de-carga-com