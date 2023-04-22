const { once } = require('events')

class WebsiteRoute {

    static contactSite(_, response) {
        response.write('contact us page')
        return response.end()
    }

    static async loginSite (request, response) {

        const DEFAULT_USER = {
            username: 'ErickWendel',
            password: '123'
        }
        
        const user = JSON.parse(await once(request, "data"))
        const toLower = (text) => text.toLowerCase()
        if(
            toLower(user.username) !== toLower(DEFAULT_USER.username) || 
            user.password !== DEFAULT_USER.password
        ) {
            response.writeHead(401)
            response.end("Login failed!")
            return
        }
        return response.end("Login succeeded!")
    }

}

module.exports = WebsiteRoute