import { createServer } from 'http'
async function handler(request, response) {
    for await (const data of request) {
        try {
            const hero = JSON.parse(data)
            console.log({ hero })
            response.writeHead(200)
            response.end()

        } catch (error) {
            response.writeHead(500)
            response.end()
        }
    }

}

createServer(handler).listen(3000, () => console.log('running at 3000'))

/*
curl -i localhost:3000 -X POST --data '{"name": "Vingador", "age": 80}'
*/