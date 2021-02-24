
var nombre;
var apellido;
nombre = 'Fernando';
apellido = 'Galdos'

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);

var cantidadDeLetrasDelNombre = nombre.length;

// var nombreCompleto = nombre + ' ' + apellido;

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

// Si deseamos mostrar algunos caracteres del nombre o apellido es:
// var str = nombre.charAt(1) + nombre.charAt(2)

var str = nombre.substr(2,3);
//Aqui el #2 signifca que toma desde la posicion 2 y #3 indica cuantos caracteres mostrara desde el index escogido

//RETO --> Mostrar ultima letra del nombre
var ultimaLetraDelNombre = nombre.charAt(nombre.length-1);