function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}


function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido   
  this.altura = altura
}
//Forma 1
// Persona.prototype.saludar = function () {
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

//Forma 2 Arrows
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

//Forma 1 - RETO
// Persona.prototype.soyAlto = function() {
//   this.altura >= 180 ? 
//   console.log(`${this.nombre} es Alto`) : console.log(`${this.nombre} es Bajo`)
// }

// Forma 2 - RETO
Persona.prototype.soyAlto  = function () {
  return this.altura > 180
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre 
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
}


// var fernando = new Persona('Fernando','Galdos', 181)
// var erika = new Persona('Erika', 'Luna', 170)
// var arturo = new Persona('Arturo', 'Martinez', 185)
