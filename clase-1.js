// VARIABLES EN JS

// Sintaxis vieja con var:

// No me arroja error si la llamo sin haberla declarado
console.log(nombre);

// Puedo declarar una variable sin asignarle un valor
var nombre;
console.log('Variable declarada', nombre);

// Le asigno un valor (inicializacion)
nombre = 'Cristian';
console.log('Variable inicializada', nombre);

// Puedo actualizar el valor de una variable
nombre = 'Pedro'
console.log('Variable actualizada', nombre);

// Puedo 'redeclarar' una variable
var nombre = 'David'
console.log('Variable redeclarada', nombre);

// Type coercion: coerción de tipos de datos
const valorNumerico = 10; //tipo number

const valorTexto = 'hola'; //tipo string

const resultado = valorNumerico * valorTexto;

console.log(resultado);

//typeof me devuelve el tipo de dato de una variable
console.log(typeof resultado); 

