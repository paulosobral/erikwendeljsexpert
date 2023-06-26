const assert = require('assert')
const myMap = new Map();

// podem ter qualquer coisa como chave
myMap
    .set(1, 'one')
    .set('Erick', {text: 'two'})
    .set(true, () => 'hello')

// usando um construtor
const myMapWithConstructor = new Map([
    ['1', 'str1'],
    [1, 'str1'],
    [true, 'bool1'],
])

// console.log('myMap', myMap)
// console.log('myMap.get(1)', myMap.get(1))
assert.deepStrictEqual(myMap.get(1), 'one')
assert.deepStrictEqual(myMap.get('Erick'), {text: 'two'})
assert.deepStrictEqual(myMap.get(true)(), 'hello')

// Em Objects a chave so pode ser string ou symbol (number coagido a string)
const onlyReferenceWorks = { id: 1}
myMap.set(onlyReferenceWorks, { name: 'ErickWendel'})

assert.deepStrictEqual(myMap.get({ id: 1}), undefined)
assert.deepStrictEqual(myMap.get(onlyReferenceWorks), { name: 'ErickWendel'})

// utilitarios
// - No Object seria Object.keys({a: 1}).length
assert.deepStrictEqual(myMap.size, 4)

// para verificar se um item existe no objeto
//  item.key = se nao existe = undefined
// if() = coercao implicita para boolean e retorna false
// O jeito certo com Object e ({ name: 'Erick'}).hasOwnProperty('name')
assert.ok(myMap.has(onlyReferenceWorks))

// para remover um item do objeto
// delete item.id
// imperformatico para o Javascript
assert.ok(myMap.delete(onlyReferenceWorks))

// Nao da para iterar Objects diretamente
// tem que transformar com o Object.entries(item)
assert.deepStrictEqual(JSON.stringify([...myMap]), JSON.stringify([[1,"one"],["Erick",{"text":"two"}],[true, () => {}]]))

// for (const [key, value] of myMap) {
//     console.log({ key, value})
// }

// Object e inseguro, pois dependendo do nome da chave, pode substituir algum comportamento padrao
// ({ }).toString() => '[object Object]'
// ({toString: () => 'Hey'}).toString() === 'Hey')

// qualquer chave pode colidir, com as propriedades herdadas do object, como
// constructor, toString, valueOf e etca.

const actor = {
    name: 'Xuxa da Silva',
    toString: 'Queen: Xuxa da Silva'
}

// nao tem restricao de nome de chave
myMap.set(actor)

assert.ok(myMap.has(actor))
assert.throws(() => myMap.get(actor).toString, TypeError)

// Nao da para limpar um Obj sem reassina-lo
myMap.clear()
assert.deepStrictEqual([...myMap.keys()], [])

// --- WeakMap

// pode ser coletado ap[os perder as referencias
// usado em casos beeem especificos

// tem a maioria dos beneficios do Map
// MAS: nao e interavel
// So chaves de referencia e que vc ja conheca
// mais leve e preve leak de memoria, pq depois que as instancias saem da memoria, tudo e limpo

const weakMap = new WeakMap()
const hero = { name: 'Flash'}

// weakMap.set(hero)
// weakMap.get(hero)
// weakMap.delete(hero)
// weakMap.has(hero)