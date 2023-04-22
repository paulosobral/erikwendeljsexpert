const { describe, it, after, before } = require('mocha')

const supertest = require('supertest')
const assert = require('assert')

describe('API Suite test', () => {
    let app
    before((done) => {
        app = require('../../src/app')
        app.once('listening', done)
    })
    after(done => app.close(done))

    describe('/rent:post', () => {
        it('should request rent a car and return HTTP Status 200', async () => {
            const request = {
                numberOfDays: 10,
                customer: {
                    id: "39352a78-8a20-4249-94c8-15dc5f6a7fd6",
                    name: "Eva Pacocha",
                    age: 34
                },
                carCategory: {
                    id: "2e93ad8a-6e31-48eb-a565-aeb82c0cc600",
                    name: "Coupe",
                    carIds: [
                    "4125bd3b-cc21-4ace-9839-6c72cd86405c",
                    "10b3127d-8da7-4c21-a873-019cd9c4a32c",
                    "d2d392a3-0f93-4920-8d57-441c019b8ca3"
                ],
                price: 34.58
                }
            }
            const response = await supertest(app)
            .post('/rent')
            .send(request)
            .expect(200)

            assert.ok(response.ok)
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