const { capitalize } = require('./fac');

describe('capitalize function tests', () => {
    test('capitalizes each word in a string', () => {
        expect(capitalize('hola mundo')).toBe('Hola Mundo');
        expect(capitalize('esto es una prueba')).toBe('Esto Es Una Prueba');
    });

    test('returns an empty string when input is an empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('returns the same string if it is already capitalized', () => {
        expect(capitalize('Hola Mundo')).toBe('Hola Mundo');
        expect(capitalize('Esto Es Una Prueba')).toBe('Esto Es Una Prueba');
    });
});