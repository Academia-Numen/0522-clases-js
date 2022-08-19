// Puedo declarar una variable sin asignarle un valor
let nombre;
console.log('Variable declarada', nombre);

// Le asigno un valor (inicializacion)
nombre = 'Cristian';
console.log('Variable inicializada', nombre);

// Puedo actualizar el valor de una variable
nombre = 'Pedro'
console.log('Variable actualizada', nombre);

// Puedo declarar una variable pero siempre darle un valor
const apellido = 'Lopez';
console.log('Variable declarada y inicializada', apellido);

// NO Puedo actualizar el valor PRIMITIVO de una variable CONST
apellido = 'Pedro'
console.log('Variable actualizada', apellido);

// Saludar
function saludar(nombre = 'N/N', edad = 'X') {
    return `Hola ${nombre}, tenés ${edad} años, ¿verdad?`;
}

const saludo = saludar('Pedro', '30');
const saludo2 = saludar('Natalia', '25');
const saludo3 = saludar('Monica', '35');
const saludo4 = saludar();

console.log(saludo);
console.log(saludo2);
console.log(saludo3);
console.log(saludo4);