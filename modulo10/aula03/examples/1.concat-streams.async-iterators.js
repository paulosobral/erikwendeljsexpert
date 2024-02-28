import { pipeline } from 'stream/promises'
import axios from 'axios'

const API_01 = 'http://localhost:3000'
const API_02 = 'http://localhost:4000'

const requests = await Promise.all([
    axios({
        method: 'get',
        url: API_01,
        responseType: 'stream'
    }),
    axios({
        method: 'get',
        url: API_02,
        responseType: 'stream'
    })
])

const results = requests.map(({ data }) => data)



// writable stream

async function* output(stream) {
    for await(const data of stream) {

        // ?=- -> ele faz procurar a partir do - e olhar para traz
        // :"(?<name>.*) -> procura pelo conteúdo dentro das aspas após o : e extrai somente o name
        const name = data.match(/:"(?<name>.*)(?=-)/).groups.name
        console.log(`[${name.toLowerCase()}] ${data}`)
    }
}

// passthrough stream
async function* merge(streams) {
    for(const readable of streams) {
        // faz trabalhar com obectMode
        readable.setEncoding('utf8')
        for await(const chunk of readable) {
            for(const line of chunk.trim().split(/\n/)) {
                yield line
            }
        }
    }
}

await pipeline(
    merge(results),
    output
)