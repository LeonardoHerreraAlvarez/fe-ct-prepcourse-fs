function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   const normalizedStr1 = str1.toLowerCase();
   const normalizedStr2 = str2.toLowerCase();

   const sortedStr1 = normalizedStr1.split('').sort().join('');
   const sortedStr2 = normalizedStr2.split('').sort().join('');
  
  return sortedStr1 === sortedStr2;

}

module.exports = esAnagrama;
