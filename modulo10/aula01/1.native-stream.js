process.stdin.pipe(process.stdout)
.on('data', msg => console.log('data', msg))

// -50:19 https://training.erickwendel.com.br/92103-javascript-expert/2196736-read-write-duplex-e-transform-streams-o-que-sao-e-categorias