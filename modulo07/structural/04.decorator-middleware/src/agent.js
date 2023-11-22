import http from 'http'
async function InjectHttpInterceptor() {
    const oldEmit = http.Server.prototype.emit
    http.Server.prototype.emit = function (...args) {
        // 
        return oldEmit.apply(this, args)
    }

}

export { InjectHttpInterceptor }