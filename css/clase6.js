var Fernando = {
  nombre: 'Fernando', //Clave y Valor
  apellido: 'Galdos',
  edad: 36
}

var Jensen = {
  nombre: 'Jensen',
  apellido: 'Ackles',
  edad: 41
}

// function imprimirNombreEnMayusculas(persona){
//   var nombre = persona.nombre.toUpperCase()
//   console.log(nombre)
// }

// function imprimirNombreEnMayusculas(persona){
//   console.log(persona.nombre.toUpperCase())
// }

function imprimirNombreEnMayusculas({ nombre }){
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Fernando);
imprimirNombreEnMayusculas(Jensen);

//Si queremos modificar el objeto, declaramos asi:
function cumpleanios(persona) {
  persona.edad = persona.edad +1
}


//Pero si no queremos hacerlo, debemos crear un nuevo objeto y lo hacemos asi:

function cumpleanios(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
