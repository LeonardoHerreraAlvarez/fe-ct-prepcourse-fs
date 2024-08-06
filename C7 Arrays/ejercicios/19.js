function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  const args = Array.from(arguments);
  
  // Si no se pasan argumentos, retornar 0.
  if (args.length === 0) {
    return 0;
  }
  
  // Si hay un solo argumento, retornarlo.
  if (args.length === 1) {
    return args[0];
  }
  
  // Multiplicar todos los argumentos.
  return args.reduce((producto, elemento) => producto * elemento, 1);
  
}

console.log(multiplicarArgumentos(1, 2, 3, 4))

module.exports = multiplicarArgumentos;
