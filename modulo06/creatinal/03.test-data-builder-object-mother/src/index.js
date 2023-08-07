/*
ProductId: should be between 2 and 20 characters
Name: should be only words
Price: Should be fro, zero to thousand
Category: should be eletronic or organic
*/

function productValidator(product) {
    const errors = []
    if(!(product.id.length >= 2 && product.id.length <= 20)) {
        errors.push(`id: invalid lenght, current [${product.id}] expected to be betwenn 2 and 20`)
    }

    if(/(\W|\d)/.test(product.name)) {
        errors.push(`name: invalid value, current [${product.name}] expected to have only words`)
    }
    return {
        result: errors.length === 0,
        errors
    }
}

module.exports = {
    productValidator
}
// TODO: Parei faltando -09:33 link: (https://training.erickwendel.com.br/92103-javascript-expert/2196675-test-data-builder-object-mother-design-patterns-for-testing)