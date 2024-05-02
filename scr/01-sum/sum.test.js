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
