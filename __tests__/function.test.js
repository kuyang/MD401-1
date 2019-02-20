'use strict'

const funcs = require('../function');

test('a + b should equal the correct sum', () => {
    expect(funcs.add(2, 3)).toBe(5);
})
