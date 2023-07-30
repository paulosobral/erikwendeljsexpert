import { database } from "../shared/data.mjs";

class Application {
    constructor(factory) {
        this.table = factory.createTable()
    }

    initialize(database) {
        this.table.render(database)
    }
}

// TODO: Parei aqui: (https://training.erickwendel.com.br/92103-javascript-expert/2196673-o-padrao-abstract-factory-js-isomorfico-e-interfaces-simuladas-creationa)
// TODO: FALTANDO -12:46
;(async function main() {

    const path = globalThis.window ? 'browser' : 'console'
    const {default: ViewFactory} = await import(`./../platforms/${path}/index.mjs`)
    const app = new Application(new ViewFactory())
    app.initialize(database)
})();