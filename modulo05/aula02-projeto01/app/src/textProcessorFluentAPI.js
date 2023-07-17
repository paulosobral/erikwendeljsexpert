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
    extractPeopleData() {
        // ? <= fala que vai extrair os dados que virao depois desse grupo
        // [contratante|contratada] ou um outro, (e tem flag no fim da expressao pra pegar maiusculo e minusculo)
        // :\s{1} vai procurar o caracter literal do dois pontos seguindo de um espaço
        // tudo acima fica dentro de um parenteses para falar "vamos pegar daí pra frente"

        // (?!) negative look around, vai ignorar os cntratantes do fim do documento (que tem só espaço a frente deles)
        // .*\n pega qualquer coisa até o primeiro \n
        // .*? non greety, esse ? faz com que ele pare na primeira recorrencia, assim ele evita ficar em loop

        // $ informar que a pesquisa acaba no fim da linha
        // g -> global
        // m -> multiline`
        // i -> insensitive

        
        const matchPerson = /(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi
        // faz o match para encontrar a string inteira que contem os dados que precisamos
        const onlyPerson = this.#content.match(matchPerson)
        // console.log('onlyPerson', matchPerson.test(this.#content))
        this.#content = onlyPerson
        
        return this
    }
    build() {
        return this.#content
    }
}

module.exports = TextProcessorFluentAPI