var fernando = {
  nombre: 'Fernando',
  apellido: 'Galdos',
  edad: 36,
  ingeniero: true,
  chef: false,
  cantante: false,
  DJ: false,
  guitarrista: false,
  drone: true,
}


function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `)
  
  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es Ingeniero')
  }

  if (persona.chef) {
    console.log('Chef')
  } else {
    console.log('No es Chef')
  }
  if (persona.DJ) {
    console.log('DJ')
  } else {
    console.log('No es DJ')
  }

  if (persona.cantante) {
    console.log('Cantante')
  } else {
    console.log('No es Cantante')
  }

  if (persona.guitarrista) {
    console.log('Guitarrista')
  } else {
    console.log('No toca Guitarra')
  }

  if (persona.drone) {
    console.log('Piloto de Drones')
  } else {
    console.log('No es Piloto de Drones')
  }
}

imprimirProfesiones(fernando)

  function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es: `)
 
    if (persona.edad >= 18) {
    console.log('Es Mayor de Edad')
    } else {
    console.log('Es Menor de Edad')
    }
  }
  imprimirSiEsMayorDeEdad(fernando)
