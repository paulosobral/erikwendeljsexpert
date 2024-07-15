import { createServer } from 'http'

async function handler(request, response) {

}

createServer(handler)
.listen(3000, () => console.log('Server is running at 3000'))
// TODO 07:43 https://training.erickwendel.com.br/92103-formacao-javascript-expert/2196754-chamando-outras-linguagens-de-programacao-a-partir-do-node-js-com-child-