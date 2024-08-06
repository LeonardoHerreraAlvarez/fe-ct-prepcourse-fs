function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  const visto = new Set();
  
  // Recorrer el array
  for (const numero of numeros) {
    // Verificar si el número ya está en el conjunto
    if (visto.has(numero)) {
      // Si está, retornar el número repetido
      return numero;
    }
    // Si no está, agregarlo al conjunto
    visto.add(numero);
  }
  
  // Si no se encuentra ningún número repetido, retornar undefined
  return undefined;
}

console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 6]))

module.exports = encontrarElementoRepetido;