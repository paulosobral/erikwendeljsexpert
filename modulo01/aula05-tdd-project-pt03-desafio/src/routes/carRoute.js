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

            response.writeHead(500)
            response.end("Internal Server Error!")
            console.error(err)
            return

        }
    }
}

module.exports = WebsiteRoute