'use strict'

const funcs = require('../function');

test('a + b should equal the correct sum', () => {
    expect(funcs.add(2, 3)).toBe(5);
})

test('a - b should equals the correct subtraction', () => {
    expect(funcs.sub(5, 2)).toBe(3);
})

test('Should log "Hello welcome to MD401!"', () => {
    expect(funcs.greeting()).toBe('Hello welcome to MD401!')
})
