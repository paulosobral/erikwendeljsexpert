import Http from 'http'

let count = 1;
async function handler(request, response) {
    count++;
    try {
        if(count % 2 === 0) {
            await Promise.reject('error dentro do handler!')
        }

        for await (const data of request) {
            if(count % 2 !== 0) {
                await Promise.reject('error dentro do for!')
            }
            response.end()
        }
    } 
    
    catch (error) {
        console.log('a server error has happened', error)
        response.writeHead(500)
        response.write(JSON.stringify({ message: 'internal server error!'}))
        response.end()
    }
}

Http.createServer(handler)
    .listen(3000, () => console.log('running at 3000'))
// curl -i -X POST -d '{}' localhost:3000
// TODO: 08:02 https://training.erickwendel.com.br/92103-javascript-expert/2196741-conhecendo-erros-nao-capturados-pelo-node-js