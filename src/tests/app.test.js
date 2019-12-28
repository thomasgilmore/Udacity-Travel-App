const updateUI = require('../client/js/app');


describe('Test "updateUI()" should exist' , () => {
    test('It should return true', async () => {
        expect(updateUI).toBeDefined();
    });
});
describe('Test "updateUI()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof updateUI).toBe("function");
    });
});
