import { fork } from 'child_process'
// import { setTimeout } from 'timers/promises'
const file = './data/All_pokemon2.csv'
const PROCESS_COUNT = 10;

const backgroundTaskFile = './src/backgroundTask.js'
const processes = new Map()
for(let index=0; index < PROCESS_COUNT; index++) {
    const child = fork(backgroundTaskFile, [file])
    processes.set(child.pid, child)
}


function roundRoubin(array, index=0) {
    return function() {
        if(index >= array.length) index=0

        return array[index++]
    }
}
// Pooll de conexões, ou load balancer
const getProcess = roundRoubin([...processes.values()])
for(let index = 0; index < 100; index++)
    console.count(getProcess().pid)
// TODO 20:30 https://training.erickwendel.com.br/92103-formacao-javascript-expert/2196755-processamento-massivo-em-arquivos-usando-child-processes-fork