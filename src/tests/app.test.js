const performAction = require('../client/js/app');
const updateUI = require('../client/js/app');
const getDarkSky = require('../client/js/app');

describe('Test "performAction()" should exist' , () => {
    test('It should return true', async () => {
        expect(performAction).toBeDefined();
    });
});
describe('Test "performAction()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof performAction).toBe("object");
    });
});


describe('Test "updateUI()" should exist' , () => {
    test('It should return true', async () => {
        expect(updateUI).toBeDefined();
    });
});
describe('Test "updateUI()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof updateUI).toBe("object");
    });
});

describe('Test "getDarkSky()" should exist' , () => {
    test('It should return true', async () => {
        expect(getDarkSky).toBeDefined();
    });
});
describe('Test "getDarkSky()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof getDarkSky).toBe("object");
    });
});

