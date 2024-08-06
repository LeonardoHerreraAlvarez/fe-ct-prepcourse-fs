function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  return arrayOfNums.reduce((acumulador, elementoActual) => acumulador + elementoActual, 0);

}

console.log(agregarNumeros([10, 10, 16]))

module.exports = agregarNumeros;
