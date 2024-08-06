function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  const resultado = [];
  
  // Bucle para iterar hasta 10 veces.
  for (let i = 1; i <= 10; i++) {
    num += 2; // Aumenta num en 2.
    resultado.push(num); // Guarda el valor en el arreglo.
    
    // Verifica si el valor de num coincide con el número de iteraciones.
    if (num === i) {
      return "Se interrumpió la ejecución"; // Interrumpe y retorna el mensaje.
    }
  }
  return resultado; // Retorna el arreglo con los valores generados.
}

console.log(breakStatement(-4))

module.exports = breakStatement;
