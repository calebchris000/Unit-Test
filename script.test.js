const stringLength = require('./script.js');

const word = 'hello'

test('Return string length ', () => {
    expect(stringLength(word)).toBe(word.length)
});