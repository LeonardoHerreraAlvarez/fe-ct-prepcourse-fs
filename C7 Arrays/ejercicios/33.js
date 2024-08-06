function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  function getCharAt(str, index) {
    return index < str.length ? str[index] : '';
  }
  
  // Determinar la longitud máxima de los strings no vacíos
  const maxLength = Math.max(str1.length, str2.length, str3.length);
  let result = '';
  
  // Iterar hasta la longitud máxima
  for (let i = 0; i < maxLength; i++) {
    result += getCharAt(str1, i);
    result += getCharAt(str2, i);
    result += getCharAt(str3, i);
  }
  
  return result;
}

module.exports = combine;