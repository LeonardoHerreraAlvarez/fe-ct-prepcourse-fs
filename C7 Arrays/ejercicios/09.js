function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   if (array.length === 0) {
      return undefined; // O puedes retornar un mensaje como "Array vacío" si lo prefieres
    }
  
    // Generar un índice aleatorio entre 0 y array.length - 1
    let indiceAleatorio = Math.floor(Math.random() * array.length);
  
    // Retornar el elemento en el índice aleatorio
    return array[indiceAleatorio];

}

console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5]))

module.exports = obtenerElementoAleatorio;
