function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  const textoLimpio = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Obtener el string invertido
  const textoInvertido = textoLimpio.split('').reverse().join('');
  
  // Comparar el string limpio con el invertido
  return textoLimpio === textoInvertido;

}

module.exports = esPalindromo;