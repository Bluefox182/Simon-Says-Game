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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANNIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() <  0.3
const realizaDeporte = () => Math.random() < 0.4

const META = fernando.peso - 3
var dias = 0 

while (fernando.peso > META) {

  if (comeMucho()) {
    aumentarDePeso(fernando)
  }
  if (realizaDeporte()) {
    adelgazar(fernando)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${fernando.nombre} adelgazo 3Kg`)