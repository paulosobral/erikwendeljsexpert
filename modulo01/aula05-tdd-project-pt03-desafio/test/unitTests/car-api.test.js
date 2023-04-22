const { describe, it, after, before } = require('mocha')
const sinon = require('sinon')
const supertest = require('supertest')
const assert = require('assert')

const mocks = {
    validCarCategory: require('./../mocks/valid-carCategory.json'),
    validCar: require('./../mocks/valid-car.json'),
    validCustomer: require('./../mocks/valid-customer.json')
}

describe('API Suite test', () => {
    let app
    let sandbox
    before((done) => {
        app = require('../../src/app')
        app.once('listening', done)
    })
    after(done => app.close(done))

    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('/rent:post', () => {
        it('should request rent a car and return HTTP Status 200', async () => {

            const car = mocks.validCar
            const carCategory = {
                ...mocks.validCarCategory,
                price: 37.6,
                carIds: [car.id]
            }

            const customer = Object.create(mocks.validCustomer)
            customer.age = 20

            const numberOfDays = 5
            

            const now = new Date(2020, 10, 5)
            sandbox.useFakeTimers(now.getTime())


            const request = {
                numberOfDays: numberOfDays,
                customer: customer,
                carCategory: carCategory
            }

            const expectedDueDate = "10 de novembro de 2020"
            const expectedAmount = new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }).format(206.8)
            const expectedResponse = {
                customer: customer,
                car: car,
                amount: expectedAmount,
                dueDate: expectedDueDate
            }
            
            const response = await supertest(app)
            .post('/rent')
            .send(request)
            .expect(200)

            assert.ok(response.ok)
            assert.strictEqual(response.text, JSON.stringify(expectedResponse))
        })
        it('should request rent a car and return HTTP Status 400', async () => {
            const response = await supertest(app)
            .post('/rent')
            .send({numberOfDays:10, price: 34.58})
            .expect(400)

            assert.ok(response.badRequest)
            assert.strictEqual(response.text, 'Bad Request')
        })
    })
    describe('/hi:get - 404', () => {
        it('should request and existing page and return HTTP Status 404', async () => {
            const response = await supertest(app)
            .get('/hi')
            .expect(404)

            assert.strictEqual(response.text, 'not found!')
        })
    })
})