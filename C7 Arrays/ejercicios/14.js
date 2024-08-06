function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  return array.filter(elemento => elemento > 10).length;

}

console.log(contarElementosMayoresA10([11, 12, 13, 14, 15, ,1, 44]))

module.exports = contarElementosMayoresA10;
