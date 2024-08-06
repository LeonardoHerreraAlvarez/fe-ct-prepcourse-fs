function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let contadorPares = 0; // Contador para los números pares
  
  // Iterar sobre cada número en el arreglo
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      continue; // Saltar los números impares
    }
    contadorPares++; // Incrementar el contador si el número es par
  }
  
  return contadorPares; // Retornar el total de números pares

}

console.log(contarParesConContinue([1, 3, 48]))

module.exports = contarParesConContinue;
