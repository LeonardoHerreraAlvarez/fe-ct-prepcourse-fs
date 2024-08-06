function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  if (numero <= 0) {
    return false;
  }

  // Continuar dividiendo el número por 2 mientras sea divisible por 2
  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false; // No es divisible por 2, por lo tanto no es potencia de 2
    }
    numero /= 2; // Dividir el número por 2
  }

  // Si el número se ha reducido a 1, es una potencia de 2
  return numero === 1;

}

module.exports = esPotenciaDeDos;
