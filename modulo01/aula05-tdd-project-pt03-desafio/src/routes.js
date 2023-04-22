const CarRoute = require('./routes/carRoute')

const routes = {
    // curl -i -X POST localhost:3000/login --data '{"username": "erickWendel","password": "23"}'
    // curl -i -X POST localhost:3000/login --data '{"username": "ErickWendel","password": "123"}'
    '/rent:post': async (request, response) => {
        carRoute = new CarRoute()
        return await carRoute.rent(request, response)
    },
    default(_, response) {
        response.writeHead(404)
        return response.end('not found!')
    }
}

function handler(request, response) {
    const {url, method} = request
    const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    return chosen(request, response)
}

module.exports = handler