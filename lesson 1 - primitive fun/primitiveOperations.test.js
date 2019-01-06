const { assert } = require('chai');

const primitiveOperations = require('./primitiveOperations');

describe('primitive operations', () => {
   it('calculate tax for a correct salary', () => {
       const taxAmount = primitiveOperations.calculateTax(1000, 9);
       assert.equal(taxAmount, 90)
   });

    it('calculate tax for salary with decimal tax', () => {
        const taxAmount = primitiveOperations.calculateTax(1000, 9.1);
        assert.equal(taxAmount, 91)
    });
});
