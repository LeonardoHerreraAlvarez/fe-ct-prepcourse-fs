const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  var totalPropiedadesObjeto = 0;
  for (const p in objeto) {
    if (objeto.hasOwnProperty(p)) {
      totalPropiedadesObjeto = totalPropiedadesObjeto + 1;      
    }
  }
  return totalPropiedadesObjeto;
};

module.exports = contarPropiedades;
