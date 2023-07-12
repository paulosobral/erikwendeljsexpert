// o objetivo do Fluent API é executar tarefas
// como um pipeline, step by step
// e no fim, chama o build. MUITO similar ao padrao Builder
// a diferença queu aqui é sobre processos, o Builder sobre construção
// de objetos
class TextProcessorFluentAPI {
    // propriedade privada!
    #content
    constructor(content) {
        this.#content = content
    }

    build() {
        return this.#content
    }
}

module.exports = TextProcessorFluentAPI