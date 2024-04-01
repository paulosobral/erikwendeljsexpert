import { MongoClient } from "mongodb"

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
    await collections.heroes.insertOne({ updatedAt: new Date().toUTCString(), name: 'Flash' })
    const heroes = await collections.heroes.find().toArray()
    console.log({ heroes })

}

await client.close()
// TODO: 09:28 https://training.erickwendel.com.br/92103-javascript-expert/2196742-graceful-shutdown-tecnicas-para-escalar-aplicacoes-node-js-sem-complicac