const { add, subtract, multiply, divide}  = require('./arithmetic');

test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3] ])(
    '%i + %i equals %i', (a,b, expected) => {
        expect(add(a, b)).toBe(expected)
    }
)

test.each([[1, 1, 0], [-1, 2, -3], [2, 1, 1] ])(
    '%i - %i equals %i', (a,b, expected) => {
        expect(subtract(a, b)).toBe(expected)
    }
)

test.each([[1, 1, 1], [-1, 2, -2], [2, 1, 2] ])(
    '%i * %i equals %i', (a,b, expected) => {
        expect(multiply(a, b)).toBe(expected)
    }
)

test.each([[1, 1, 1], [-1, 2, -0.5], [2, 1, 2] ])(
    '%i / %i equals %i', (a,b, expected) => {
        expect(divide(a, b)).toBe(expected)
    }
)

test('2 + 3 = 5', () =>{
    expect(add(2, 3)).toBe(5);
})

test('4 - 1 = 3', () =>{
    expect(subtract(4, 1)).toBe(3);
})

test('2 * 3 = 6', () =>{
    expect(multiply(2, 3)).toBe(6);
})


test('4 / 1 = 4', () =>{
    expect(divide(4, 1)).toBe(4);
})
