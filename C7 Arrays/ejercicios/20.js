function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  const primerElemento = array[0];
  
  // Verifica si todos los elementos en el array son iguales al primer elemento.
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== primerElemento) {
      return false;
    }
  }
  
  // Si pasamos por el bucle sin encontrar diferencias, retornamos true.
  return true;

}

console.log(todosIguales([97, 97, 97, 97]))

module.exports = todosIguales;
