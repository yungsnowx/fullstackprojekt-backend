import { describe, expect, it, jest } from '@jest/globals'
import { Customer } from '../../models/customerModel.js'

const expectedCustomers =
    '[{"id":"1","firstName":"homer","lastName":"simpson","dateOfBirth":"2022-01-01"},' +
    '{"id":"3","firstName":"Bartolomey","lastName":"Simpsonzzzz","dateOfBirth":"2022-04-04"},' +
    '{"id":"5","firstName":"Maggie","lastName":"Simpson","dateOfBirth":"2022-05-05"}]'
const expectedCustomer =
    '{"id":"1","firstName":"homer","lastName":"simpson","dateOfBirth":"2022-01-01"}'
const updatedCustomer =
    '{"id":"1","firstName":"homer j.","lastName":"simpson","dateOfBirth":"2022-01-01"}'
const deletedCustomer =
    '{"id":"1","firstName":"homer j.","lastName":"simpson","dateOfBirth":"2022-01-01"}'

Customer.getAll = jest.mocked(() => {
    return expectedCustomers
})
Customer.get = jest.mocked(() => {
    return expectedCustomer
})
Customer.save = jest.mocked(() => {
    return updatedCustomer
})
Customer.remove = jest.mocked(() => {
    return deletedCustomer
})

describe('Customer', () => {
    it('should get all customers', async () => {
        const output = Customer.getAll()
        expect(output).toStrictEqual(expectedCustomers)
    })

    it('should get customer with id=1', async () => {
        const output = Customer.get()
        expect(output).toStrictEqual(expectedCustomer)
    })

    it('should update customer with id=1', async () => {
        const customer = JSON.parse('{"id":"1","firstName":"homer j.","lastName":"simpson","dateOfBirth":"2022-01-01"}')
        const output = Customer.save(customer)
        expect(output).toStrictEqual(updatedCustomer)
    })

    it('should delete customer with id=1', async () => {
        const customer = JSON.parse('{"id":"1","firstName":"homer j.","lastName":"simpson","dateOfBirth":"2022-01-01"}')
        const output = Customer.remove(customer.id)
        expect(output).toStrictEqual(deletedCustomer)
    })
})