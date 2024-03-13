import timers from 'timers/promises'
const timeoutAsync = timers.setTimeout;

// const results = ['1', '2'].map(async (item) => {
//     console.log('starting process!!')
//     await timeoutAsync(100)
//     console.log(item)
//     console.log(await Promise.resolve('timeout order!'))
//     await timeoutAsync(100)
//     console.count('debug')

//     return parseInt(item) * 2
// })
// console.log('results', await Promise.all(results))

// setTimeout(async () => {
//     console.log('starting process!!')
//     await timeoutAsync(100)
//     console.count('debug')
//     console.log(await Promise.resolve('timeout order!'))
//     await timeoutAsync(100)
//     console.count('debug')

// }, 1000);
// TODO: 14:23 https://training.erickwendel.com.br/92103-javascript-expert/2196741-conhecendo-erros-nao-capturados-pelo-node-js