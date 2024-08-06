function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  let contador = 0;

  // Utilizar el bucle do-while para incrementar el valor de num hasta 8 veces
  do {
    num += 5;       // Incrementar num en 5
    contador++;     // Incrementar el contador
  } while (contador < 8); // Continuar mientras el contador sea menor a 8

  return num; // Retornar el valor final

}

module.exports = doWhile;