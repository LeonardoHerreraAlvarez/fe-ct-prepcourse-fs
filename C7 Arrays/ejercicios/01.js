function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:

  if (array.length === 0) {
    return "array vacío"; // O puedes retornar un mensaje como "Array vacío" si lo prefieres
  }

  // Retornar el primer elemento del array
  return array[0];

}

console.log(devolverPrimerElemento([97, 100, 80, 55, 72, 94]))

module.exports = devolverPrimerElemento;
