function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  if (n <= 0) {
    return 0; // Si n es menor o igual a 0, retornar 0 (puede ajustarse según el caso)
  }

  // Calcular la suma de todos los números desde 1 hasta n
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  return suma;


}

module.exports = sumarHastaN;
