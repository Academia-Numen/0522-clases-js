// Closures
function saludar( saludo ){ 
    // Funcion dentro de otra
    console.log('Valor de saludo:', saludo);
    const closure = function( nombre ){
        console.log(`${saludo} ${nombre}`);
    }
    return closure; 
}

const saludoHola = saludar('Hola'); 
const saludoAdios = saludar('Adios'); 
const saludoBuenasTardes = saludar('Buenas tardes'); 
console.log('-------------');

// Esto devuelve una función

saludoHola('Numen'); // 'Hola Numen'
saludoAdios('Juan');
saludoBuenasTardes('Natalia');

// Impresora de Mensajes
function crearImpresoraDeMensajes(tipo, estilos) {

    return function impresoraDeMensajes(mensaje) {
        console.log(`%c ${tipo}: ${mensaje}`, estilos);
    }
}

const imprimirError = crearImpresoraDeMensajes('Error', 'background: red; color: white; padding: 1rem;');
const imprimirAlerta = crearImpresoraDeMensajes('Alerta', 'background: yellow; color: black; padding: 1rem;');
const imprimirExito= crearImpresoraDeMensajes('Exito', 'background: green; color: white; padding: 1rem;');

imprimirError('Su conexión es baja');
imprimirAlerta('Atención! Su suscripcion va a caducar');
imprimirExito('El mail fue enviado correctamente');

// POO - Programación Orientada a Objetos

// Como crear objetos si no sabemos la sintaxis
function crearPerros(nombre, color, raza) {
    return {
        nombre: nombre,
        raza: raza,
        color: color,
    }
}

const perro1 = crearPerros('Sharon', 'Blanca', 'Caniche');

console.log(perro1);

// Como crear objetos con funcion constructora (sintaxis antigua)
function Perro(nombre, color, raza) {
    this.nombre = nombre;
    this.raza = raza;
    this.color = color;
}

const perro2 = new Perro('Natasha', 'Negro', 'Labrador');

console.log(perro2);

// Como crear objetos con class (sintaxis nueva)
class Perro2 {
    constructor(nombre, color, raza) {
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }
    comer() {
        console.log('Estoy comiendo');
    }
}

const perro3 = new Perro2('Juan', 'Marron', 'Pastor Aleman');

console.log(perro3.comer());

// Ejemplo Usuarios
class User {
    constructor(name, email = 'Email no provisto') {
        this.name = name;
        this.email = email;
    }
    login() {
        const message = `${this.name} con el mail ${this.email} se acaba de logear`;
        console.log(message);
        return this;
    }
    logout() {
        const message = `${this.name} con el mail ${this.email} se acaba de deslogear`;
        console.log(message);
        return this;
    }
}

const usuarioJuan = new User('Juan', 'juancito@gmail.com');
const usuarioNatalia = new User('Natalia');

// console.log(usuarioJuan.login().logout());
console.log(usuarioNatalia);

class Admin extends User {
    deleteUser(user) {
        console.log('El usuario', user, 'ha sido eliminado');
    }
}

const admin = new Admin('Usuario Administrador', 'admin@gmail.com');

console.log(admin);

// Ejemplo extra (DOM)
const electrodomesticos = [
    { nombre: 'TV', precio: 100000, color: 'Gris' },
    { nombre: 'Heladera', precio: 200000, color: 'Blanca' },
    { nombre: 'Lavarropas', precio: 80000, color: 'Blanco' },
    { nombre: 'Freezer', precio: 120000, color: 'Gris' },
    { nombre: 'Microondas', precio: 50000, color: 'Negro' },
    { nombre: 'Cocina', precio: 75000, color: 'Negro' },
    { nombre: 'Cocina x', precio: 75000, color: 'Negro' },
];

const impuestosPorProducto = [
    { nombre: 'IVA', importe: 0.21 },
    { nombre: 'IBB', importe: 0.10 },
    { nombre: 'Tasa Municipal', importe: 0.15 },
    { nombre: 'Impuesto al Gas Metano', importe: 0.10 },
    { nombre: 'Impuesto x', importe: 0.40 },
];

const calcularImpuestos = (impuestos, precio) => (
    impuestos.reduce((acc, { importe }) => acc + precio * importe, precio)
)

const sumarProductos = (productos, impuestos) => (
    productos.reduce((acc, { precio, nombre }) => {
        const precioConImpuestos = calcularImpuestos(impuestos, precio);
        return {
            items: [...acc.items, { nombre, precio, precioConImpuestos }],
            precio: acc.precio + precioConImpuestos,
            precioSinImpuestos: acc.precioSinImpuestos + precio,
        }
    }, {
        items: [],
        precio: 0,
        precioSinImpuestos: 0,
    })
);

// La logica de UI
const imprimirFactura = (productos, impuestos) => {
    const { items, precio, precioSinImpuestos } = sumarProductos(productos, impuestos);
    const tbody = document.querySelector('#tabla-factura');
    const borderValue = "1px solid #0a0a0a";

    items.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="border-right: ${borderValue}">${item.nombre}</td>
            <td style="border-right: ${borderValue}">${item.precio}</td>
            <td>${item.precioConImpuestos}</td>
        `;
        tbody.appendChild(tr);
    })

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td style="border-right: ${borderValue}">Total</td>
        <td style="border-right: ${borderValue}">${precioSinImpuestos}</td>
        <td>${precio}</td>
    `;
    tbody.appendChild(tr);
}

imprimirFactura(electrodomesticos, impuestosPorProducto);