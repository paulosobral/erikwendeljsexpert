import { MongoClient } from "mongodb"
import { createServer } from "http"
async function dbConnect() {
    const client = new MongoClient("mongodb://user:pass@localhost:27017")
    await client.connect()
    console.log('mongodb is connected!')
    const db = client.db('comics')
    return {
        collections: { heroes: db.collection('heroes')},
        client
    }
}

const { collections, client } = await dbConnect()

async function handler(request, response) {
    for await(const data of request) {
        try {
            const hero = JSON.parse(data)
            await collections.heroes.insertOne({ 
                ...hero,
                updatedAt: new Date().toISOString()
            })
            const heroes = await collections.heroes.find().toArray()
            console.log({ heroes })
            response.writeHead(200)
            response.write(JSON.stringify(heroes))

        } catch (error) {
            console.error('a request error has happened', error)
            response.writeHead(500)
            response.write(JSON.stringify({ message: 'Internal server error' }))
        }
        finally {
            response.end()
        }
    }

}

// await client.close()
/*
    curl -i localhost:3000 -X POST -d '{"name": "Batman", "age": "80"}'
*/

const server = createServer(handler)
.listen(3000, () => console.log('running at 3000 and process', process.pid))


const onStop = async (signal) => {
    console.info(`\n${signal} signal received!`)

    // ero é tudo certo, 1 é erro!
    process.exit(0);
}
// SIGINT -> Ctrl c
// SIGINT -> KILL
["SIGINT", "SIGTERM"].forEach((event) => process.on(event, onStop))
// TODO: 09:28 https://training.erickwendel.com.br/92103-javascript-expert/2196742-graceful-shutdown-tecnicas-para-escalar-aplicacoes-node-js-sem-complicac