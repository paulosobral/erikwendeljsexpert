/*
ProductId: should be between 2 and 20 characters
Name: should be only words
Price: Should be fro, zero to thousand
Category: should be eletronic or organic
*/

function productValidator(product) {
    const errors = []


    return {
        result: errors.length === 0,
        errors
    }
}

module.exports = {
    productValidator
}
// TODO: Parei faltando -16:05 link: (https://training.erickwendel.com.br/92103-javascript-expert/2196675-test-data-builder-object-mother-design-patterns-for-testing)