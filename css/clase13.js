var fernando = {
  nombre: 'Fernando',
  apellido: 'Galdos',
  edad: 36,
  peso: 85
}

console.log(`Al inicio del annio ${fernando.nombre} pesa ${fernando.peso}Kg`)

// function aumentarDePeso (persona) {
//   return persona.pes =+ 200
// }

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANNIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANNIO; i++) {
  var random = Math.random()
  
  if (random < 0.25) {
    aumentarDePeso(fernando)
  } else if (random < 0.5){
    adelgazar(fernando)
  }

}

console.log(`Al final del annio ${fernando.nombre} pesa ${fernando.peso.toFixed(1)}Kg`)