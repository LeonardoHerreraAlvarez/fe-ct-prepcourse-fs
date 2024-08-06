function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  const resultado = [];
  
  // Bucle para iterar hasta 10 veces.
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue; // Omite la iteración cuando i es 5.
    }
    num += 2; // Aumenta num en 2.
    resultado.push(num); // Guarda el valor en el arreglo.
  }
  
  return resultado; // Retorna el arreglo con los valores generados.
}

module.exports = continueStatement;
