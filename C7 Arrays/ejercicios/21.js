function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  
  const mesesEncontrados = [];
  
  // Recorre el array de entrada.
  for (let i = 0; i < array.length; i++) {
    // Si el mes está en mesesBuscados, agrégalo a mesesEncontrados.
    if (mesesBuscados.includes(array[i])) {
      mesesEncontrados.push(array[i]);
    }
  }
  
  // Verifica si todos los meses buscados fueron encontrados.
  if (mesesBuscados.every(mes => mesesEncontrados.includes(mes))) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
