import { Readable, Writable } from 'stream'

// fonte de dados
const readable = Readable({
    read() {
        // 1.000.000
        // for (let index = 0; index < 1e6; index++) {
        for (let index = 0; index < 2; index++) {
            const person = { id: Date.now() + index, name: `Erick-${index}` }
            const data = JSON.stringify(person)
            this.push(data)
        }
        
        // informa que os dados acabaram
        this.push(null)
    }
})

// processamento dos dados



// saida de dados

const writable = Writable({
    write(chunk, enconding, cb) {
        console.log('msg', chunk.toString())

        cb()
    }
})

readable
    // writable é sempre a saída -> imprimir, salvar, ignorar
     .pipe(writable)
    // .pipe(process.stdout)

// -27:58 https://training.erickwendel.com.br/92103-javascript-expert/2196736-read-write-duplex-e-transform-streams-o-que-sao-e-categorias