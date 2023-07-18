const { evaluateRegex } = require('./util')

class Person {
    // (\w+):\s.*
    // $1,
    constructor([
        nome,
        nacionalidade,
        estadoCivil,
        documento,
        rua,
        numero,
        bairro,
        estado
    ]) {
        
        // ^ -> começo da string
        // + -> um ou mais ocorrencias
        // (\w{1}) -> pega só a primeira letra e deixa em um grupo
        // (a-zA-Z) encontra letras maiusculas ou minusculas, adicionamos o + pra ele pegar todas até p caracter especial
        // g -> todas as ocorrencias que encontrar
        //TODO: parei faltando -12:48
        const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
        const formatFirstLetter = (prop) => {
            return prop.replace(firstLetterExp, (fullMatch, group1, group2, index) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`
            })
        }

        // (\w+),
        // this.$1 = $1
        this.nome = nome
        this.nacionalidade = formatFirstLetter(nacionalidade)
        this.estadoCivil = formatFirstLetter(estadoCivil)
        // tudo que nao for digito vira vazio
        // /g serve para remover todas as ocorrencias que encontrar
        this.documento = documento.replace(evaluateRegex(/\D/g), "")
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.estado = estado
    }
}

module.exports = Person;