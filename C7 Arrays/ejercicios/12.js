function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  return array.map(elemento => {
    // Verifica si el elemento es un string
    if (typeof elemento === 'string') {
      return elemento.toUpperCase();
    }
    // Si el elemento no es un string, lo retorna sin cambios
    return elemento;
  });

}

console.log(convertirStringAMayusculas(['a']))

module.exports = convertirStringAMayusculas;
