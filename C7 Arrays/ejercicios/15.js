function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  
  let indiceMayor = 0; // Inicializamos el índice del número mayor al primer índice.
  let valorMayor = array[0]; // Inicializamos el valor mayor al primer elemento del arreglo.

  // Recorremos el arreglo empezando desde el segundo elemento.
  for (let i = 1; i < array.length; i++) {
    if (array[i] > valorMayor) {
      valorMayor = array[i]; // Actualizamos el valor mayor.
      indiceMayor = i; // Actualizamos el índice del número mayor.
    }
  }

  return indiceMayor;

}

console.log(encontrarIndiceMayor([5, 4, 7, 2, 6]))

module.exports = encontrarIndiceMayor;
