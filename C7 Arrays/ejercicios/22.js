function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  const resultado = [];
  
  // Bucle para generar la tabla de multiplicar del 6.
  for (let i = 0; i <= 10; i++) {
    resultado.push(6 * i);
  }
  
  return resultado;

}

console.log(tablaDelSeis())

module.exports = tablaDelSeis;
