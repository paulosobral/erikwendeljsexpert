// ls | grep package | xargs cat | jq .name

// process.stdin.pipe(process.stdout)

//     .on('data', msg => console.log('data', msg.toString()))
//     .on('error', msg => console.log('error', msg.toString()))
//     .on('end', _ => console.log('end', msg.toString()))
//     .on('close', _ => console.log('close', msg.toString()))

// terminal 1
// node -e "require('net').createServer(socket => socket.pipe(process.stdout)).listen(1338)"

// terminal 2
// node -e "process.stdin.pipe(require('net').connect(1338))"

// -43:15 https://training.erickwendel.com.br/92103-javascript-expert/2196736-read-write-duplex-e-transform-streams-o-que-sao-e-categorias