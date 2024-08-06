function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:

  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  // Verificar si el número es divisible entre 3
  else if (num % 3 === 0) {
    return "fizz";
  }
  // Verificar si el número es divisible entre 5
  else if (num % 5 === 0) {
    return "buzz";
  }
  // Si no es divisible entre 3 ni entre 5
  else {
    return false;
  }


}

module.exports = fizzBuzz;
