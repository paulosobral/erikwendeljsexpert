const { once } = require('events')
const { join } = require('path')
const CarService = require('../service/carService')
const carsDatabase = join(__dirname, '../../database', "cars.json")

class WebsiteRoute {

    constructor() {
        this.carService = new CarService({
            cars: carsDatabase
        })
    }
    async rent (request, response) {

        try {

            const {customer, carCategory, numberOfDays} = JSON.parse(await once(request, "data"))
            const result = await this.carService.rent(
                customer, carCategory, numberOfDays
            )
            return response.end(JSON.stringify(result))

        } catch(err) {

            let statusCode;
            let statusError;

            if (err instanceof TypeError) {
                statusCode = 400
                statusError = 'Bad Request'
            } else {
                statusCode = 500
                statusError = 'Internal Server Error'
            }

            console.error(err)
            response.writeHead(statusCode)
            response.end(statusError)
            return
        }
    }
}

module.exports = WebsiteRoute