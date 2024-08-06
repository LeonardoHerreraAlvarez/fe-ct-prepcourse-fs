function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero <= 1) {
    return false;
  }

  // Solo necesitamos verificar hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // El número es divisible por i, por lo tanto, no es primo
    }
  }

  // Si no se encontró ningún divisor, el número es primo
  return true;
}

module.exports = esNumeroPrimo;
