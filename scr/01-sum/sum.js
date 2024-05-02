function sum(primero, segundo) {
    if (primero === undefined || segundo === undefined) {
      return "hubo error con los argumentos";
    }
    return primero + segundo;
  }
  
  module.exports = sum;