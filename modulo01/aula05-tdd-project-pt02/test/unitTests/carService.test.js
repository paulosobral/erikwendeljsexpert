const { join } = require('path')
const { describe, it, before } = require('mocha')
const assert = require('assert')
const CarService = require('./../../src/service/carService')

const carsDatabase = join(__dirname, './../../database', "cars.json")

describe('CarService Suite Tests', () => {
    let carService = {}
    before(() => {
        carService = new CarService({
            cars: carsDatabase
        })
    })

    // TODO: PAREI FALTANDO -17:30
    it('given a carCategory it should return an available car', async () => {
        const result = await carService.getAvailableCar()
        const expected = {}
        assert.deepStrictEqual(result, expected)
    })
})