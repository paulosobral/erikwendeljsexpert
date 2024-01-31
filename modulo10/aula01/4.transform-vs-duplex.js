import { Duplex } from 'stream'

let count = 0;
const server = Duplex({
    objectMode: true, // faz não precisar trabalhar com buffer => gasta mais memória
    encoding: 'utf-8',
    read() {
        const everySecond = (intervalContext) => {
            if(count ++ <= 5 ) {
                this.push(`My name is Erick[${count}]`)
                return;
            }
            clearInterval(intervalContext)
            this.push(null)
        }

        setInterval(function() { everySecond(this) })
    },
    // é como se fosse um objeto completamente diferente!

    write(chunk, econding, cb) {
        console.log(`[writable] saving`, chunk)
        cb()
    }
})

// provar que são canais de comunicação diferentes!
// write aciona o writable do Duplex
server.write('[duplex] hey this is a awritable!\n')

// on data -> loga o que roou no .push do readable
server.on('data', msg => console.log(`[readable]${msg}`))

// server
//     .pipe(process.stdout)
// -11:13 https://training.erickwendel.com.br/92103-javascript-expert/2196736-read-write-duplex-e-transform-streams-o-que-sao-e-categorias