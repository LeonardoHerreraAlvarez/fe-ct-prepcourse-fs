function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  return array.find(element => typeof element === 'string' && element.length >= 5);

}

console.log(obtenerPrimerStringLargo(['hello', 'world', 'this', 'is', 'a', 'testing']))

module.exports = obtenerPrimerStringLargo;
