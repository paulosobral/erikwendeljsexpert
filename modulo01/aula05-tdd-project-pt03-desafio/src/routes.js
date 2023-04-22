const WebsiteRoute = require('./routes/website')

const routes = {
    '/contact:get': (request, response) => {return WebsiteRoute.contactSite(request, response)},
    // curl -i -X POST localhost:3000/login --data '{"username": "erickWendel","password": "23"}'
    // curl -i -X POST localhost:3000/login --data '{"username": "ErickWendel","password": "123"}'
    '/login:post': async (request, response) => {
        return await WebsiteRoute.loginSite(request, response)
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