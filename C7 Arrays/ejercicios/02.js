function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:

  if (array.length === 0) {
    return undefined; // O puedes retornar un mensaje como "Array vacío" si lo prefieres
  }

  // Retornar el último elemento del array
  return array[array.length - 1];

}

console.log(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?']))

module.exports = devolverUltimoElemento;
