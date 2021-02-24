var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

//Forma 1
const esAlta = persona => persona.altura > 1.8

//Forma 2 --> Mas eficaz
// const esAlta = ({ altura }) => altura > 1.8


//RETO
const esBaja = persona => persona.altura < 1.8
  // Forma 2
  // const esBaja = ({altura}) => !esAlta({altura})


var personas = [sacha, alan, martin, dario, vicky, paula]

//Forma 1 --> Mas eficaz
var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

//Forma 2
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

console.log(personasAltas)
console.log(personasBajas)