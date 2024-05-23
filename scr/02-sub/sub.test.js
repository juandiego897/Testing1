<<<<<<< HEAD
const { isPrime } = require('./sub');

describe('isPrime function tests', () => {
    test('returns true for prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(11)).toBe(true);
    });

    test('returns false for non-prime numbers', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(10)).toBe(false);
    });

    test('returns false for 1', () => {
        expect(isPrime(1)).toBe(false);
    });
});
=======
test("should return true", () => {
    expect(true).toBe(true);
  });
>>>>>>> e8f96d1b4a3cd7dd56a3bddbf6f02949fb6ac3c4
