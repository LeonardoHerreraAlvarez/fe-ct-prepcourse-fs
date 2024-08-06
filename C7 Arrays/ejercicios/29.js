function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0 || numeros.length === 1) {
    return null;
  }
  
  // Encontrar el mínimo y máximo en el arreglo
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  
  // Calcular la suma esperada de la secuencia completa
  const sumaEsperada = ((max - min + 1) * (min + max)) / 2;
  
  // Calcular la suma actual de los números en el arreglo
  const sumaActual = numeros.reduce((acc, num) => acc + num, 0);
  
  // Encontrar el número faltante
  const numeroFaltante = sumaEsperada - sumaActual;
  
  // Retornar el número faltante si es positivo, de lo contrario retornar null
  return numeroFaltante > 0 ? numeroFaltante : null;
}

module.exports = encontrarNumeroFaltante;