<<<<<<< HEAD
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = { factorial };
=======
const sum = require("./sum");

test("adds 4 + 5 to equal 9", () => {
    const result = sum(4, 5);
    expect(result).toBe(9);
});
test("add 45 + 55 to equal 100", () => {
    const result = sum(45, 55);
    expect(result).toBe(100);
  });
  
  test("deberia retornar un error", () => {
    const result = sum();
    expect(result).toBe("hubo error con los argumentos");
  });
>>>>>>> e8f96d1b4a3cd7dd56a3bddbf6f02949fb6ac3c4
