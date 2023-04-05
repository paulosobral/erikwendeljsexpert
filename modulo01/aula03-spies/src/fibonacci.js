class Fibonacci {
    * execute(input, current=0, next=1) {
        // processou tidas as sequencias
        // e para!
        if(input === 0) {
            return 
        }
        // retorna o valor!
        yield current

        // delega a valor funcao mas nao retorna! 
        yield * this.execute(input -1, next, current + next)
        
    }
}

module.exports = Fibonacci