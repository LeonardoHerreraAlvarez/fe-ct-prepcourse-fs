const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   
   const a = objeto[propiedad];
   return a;
   
};

console.log(obtenerValorPropiedad({
   nombre: 'Juan',
   edad: 30,
   direccion: {
      calle: 'Calle Falsa',
      numero: 123,
      ciudad: 'Springfield',
   }}, ['direccion']))

module.exports = obtenerValorPropiedad;
