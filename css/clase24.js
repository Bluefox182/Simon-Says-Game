class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido   
    this.altura = altura
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto() {
    return this.altura > 180
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
  }
}

function responderSaludos(apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Oh, genial, no sabiamos que eras Desarrollador`)
  }
}


var fernando = new Persona('Fernando','Galdos', 181)
var erika = new Persona('Erika', 'Luna', 170)
var arturo = new Persona('Arturo', 'Martinez', 185)

fernando.saludar()
erika.saludar()
arturo.saludar()
