<<<<<<< HEAD
const { factorial } = require('./sum');

describe('pruebas de función factorial', () => {
    test('calcula correctamente el factorial de un número positivo', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
        expect(factorial(3)).toBe(6);
    });

    test('devuelve 1 para factorial de 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('devuelve NaN para números negativos', () => {
        expect(factorial(-1)).toBeNaN();
        expect(factorial(-5)).toBeNaN();
    });
});
=======
function sum(a, b){
   if (a === undefined || b === undefined) {
      return "hubo error con los argumentos";
    }
    return a + b;
}
  
  module.exports = sum;

>>>>>>> e8f96d1b4a3cd7dd56a3bddbf6f02949fb6ac3c4
