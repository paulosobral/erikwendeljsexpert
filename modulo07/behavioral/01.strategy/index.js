import ContextStrategy from "./src/base/contextStrategy.js"
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js"
import PostgresStrategy from "./src/strategies/postegresStrategy.js"

const postgresStrategy = new ContextStrategy(new PostgresStrategy())
postgresStrategy.connect()



const data = [{
    name: 'erickwendel',
    type: 'transaction',
}, {
    name: 'mariasilva',
    type: 'activityLog',
}]

// TODO: -20:45 https://training.erickwendel.com.br/92103-javascript-expert/2196677-o-padrao-strategy-trabalhando-com-multiplos-bancos-de-dados