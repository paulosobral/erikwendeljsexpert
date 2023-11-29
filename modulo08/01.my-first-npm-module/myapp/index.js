// para importar do diretório use o comando abaixo
// --experimental-specifier-resolution=node
// import FluentSQLBuilder from "./../fluentsql-jest-tdd-yt"
import FluentSQLBuilder from "./../fluentsql-jest-tdd-yt"

import database from "./database/data.json"

const result = FluentSQLBuilder.for(database)
    .where({ registered: /^(2020|2019)/ })
    .select(['name'])
    .limit(3)
    .build()

console.log(result)
//TODO: -20:17 https://training.erickwendel.com.br/92103-javascript-expert/2196684-criando-e-gerenciando-meu-primeiro-pacote-npm