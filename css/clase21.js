function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido   
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
  this.altura >= 180 ? 
  console.log(`${this.nombre} es Alto`) : console.log(`${this.nombre} es Bajo`)
}

var fernando = new Persona('Fernando','Galdos', 181)
var erika = new Persona('Erika', 'Luna', 170)
var arturo = new Persona('Arturo', 'Martinez', 185)

fernando.soyAlto()
erika.soyAlto()
arturo.soyAlto()

fernando.saludar()