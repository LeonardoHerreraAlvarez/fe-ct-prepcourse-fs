function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  const sumaTotal = resultadosTest.reduce((acumulador, elementoActual) => acumulador + elementoActual, 0);
  
  // Calcular el promedio dividiendo la suma total entre el número de elementos.
  const promedio = sumaTotal / resultadosTest.length;
  
  // Retornar el promedio.
  return promedio;

}

module.exports = promedioResultadosTest;
