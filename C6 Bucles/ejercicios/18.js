function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

 // if (a > b) {
    // Intercambiar los valores si a es mayor que b
    [a, b] = [b, a];
 // }

  let producto = 1;

  // Iterar a través de todos los números entre a y b (inclusive)
  for (let i = a; i <= b; i++) {
    producto = producto * i;
  }

  return producto;

}

module.exports = productoEntreNúmeros;