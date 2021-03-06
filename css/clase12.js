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

//imprimirProfesiones(fernando)

  const MAYORIA_DE_EDAD = 18

  // const esMayorDeEdad = function (persona) {
  //   return persona.edad >= MAYORIA_DE_EDAD
  // }

  // const esMayorDeEdad = (persona) => {
  //   return persona.edad >= MAYORIA_DE_EDAD
  // }

  //Con ArrowFunction podemos reducir texto asi
  // const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

  //Ademas podemos desestructurar asi
  const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

  // function SiEsMayorDeEdad(persona) {
  //   if (esMayorDeEdad(persona)) {
  //     console.log(`${persona.nombre} es Mayor De Edad`)
  //   } else {
  //     console.log(`${persona.nombre} es Menor De Edad`)
  //   }
  // }

  const SiEsMayorDeEdad = (persona) => {
    if (esMayorDeEdad(persona)) {
      console.log(`${persona.nombre} es Mayor De Edad`) 
    } else {
      console.log(`${persona.nombre} es Menor De Edad`)
    }
  }  

  SiEsMayorDeEdad(fernando)

  function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
      console.log('ACCESS DENIED')
    } else {
      console.log('ACCESS GRANTED')
    }
  }
  permitirAcceso(fernando)