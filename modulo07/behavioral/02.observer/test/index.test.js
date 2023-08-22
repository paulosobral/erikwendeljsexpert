import { expect, describe, test, jest} from '@jest/globals'
import PaymentSubject from '../src/subjects/paymentSubject.js'
import Payment from '../src/events/payment.js'

describe('Test Suite for Observer Pattern', () => {

    test('#PaymentSubject notify observers', () => {
        const subject = new PaymentSubject()
        const observer = {
            update: jest.fn()
        }
        const data = 'hello world'
        const expected = data

        subject.subscribe(observer)
        subject.notify(data)

        expect(observer.update).toBeCalledWith(expected)
    })
    test('#PaymentSubject should not notify unsubscribed observers', () => {
        const subject = new PaymentSubject()
        const observer = {
            update: jest.fn()
        }
        const data = 'hello world'
        

        subject.subscribe(observer)
        subject.unsubscribe(observer)
        subject.notify(data)

        expect(observer.update).not.toHaveBeenCalled()
    })

    test('#Payment should notify subject after a credit card transaction', () => {
        const subject = new PaymentSubject()
        const payment = new Payment(subject)

        const paymentSubjectNotifierSpy = jest.spyOn(
            payment.paymentSubject,
            payment.paymentSubject.notify.name,
        )
        const data = { userName: 'erickwendel', id: Date.now() }
        payment.creditCard(data)

        expect(paymentSubjectNotifierSpy).toBeCalledWith(data)
    })
    test.todo('#All should notify subscribers after a credit card payment')
})
// -11:03 https://training.erickwendel.com.br/92103-javascript-expert/2196678-o-padrao-observer-jest-e-100-de-cobertura-de-codigo