function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   //const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);

   var suma = 0;

   for (let i = 0; i < arrayOfNumbers.length; i++) {
      suma = suma + arrayOfNumbers[i];      
   }
   
   cb(suma);

}

module.exports = sumarArray;
