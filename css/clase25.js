class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido   
    this.altura = altura
  }
  saludar(fn) {
    var { nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }
  soyAlto() {
    return this.altura > 180
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludos(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Oh, genial, no sabiamos que eras Desarrollador`)
  }
}


var fernando = new Persona('Fernando','Galdos', 181)
var erika = new Persona('Erika', 'Luna', 170)
var arturo = new Desarrollador('Arturo', 'Martinez', 185)

fernando.saludar(responderSaludos)
erika.saludar(responderSaludos)
arturo.saludar(responderSaludos)
