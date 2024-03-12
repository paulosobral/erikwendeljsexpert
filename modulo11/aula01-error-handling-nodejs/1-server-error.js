import Http from 'http'

async function handler(request, response) {
    try {
        
        for await(const data of request) {
        
            response.end()
        }
    } 
    
    catch (error) {
        
    }
}

Http.createServer(handler)
    .listen(3000, () => console.log('running at 3000'))
// curl -i -X POST -d '{}' localhost:3000
// https://training.erickwendel.com.br/92103-javascript-expert/2196741-conhecendo-erros-nao-capturados-pelo-node-js