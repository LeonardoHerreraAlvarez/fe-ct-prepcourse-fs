function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:

  if (typeof cb === 'function') {
    // Retornar el resultado del callback pasándole num1 y num2 como argumentos
    return cb(num1, num2);
  } else {
    // Si no se proporciona un callback, retornar null
    return null;
  }

}

module.exports = operacionMatematica;
