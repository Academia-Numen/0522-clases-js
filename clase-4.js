const user = {
    name: 'Pedro Picapiedras',
    pass: '1234_8765',
    role: 'Admin',
    logout: () => {
        console.log('The user logged out');
    },
    login: () => {
        console.log('The user logged in');
    }
};

// Versión Principiante
function validarPassword(pass) {
    if (pass.length >= 20 && !pass.includes('a')) {
        return true;
    } else {
        return false;
    }
}

// Versión Optimizada
function validarPassword(pass) {
    return pass.length >= 20 && !pass.includes('a');
}

// Versión Optimizada 2.0
const validarPassword = (pass) => pass.length >= 20 && !pass.includes('a');

// Guard Clauses
function validarPassword(pass) {
    if (pass.length >= 20 && !pass.includes('a')) {
        return('El password es lo suficientemente fuerte');
    } if (password.length >= 8 ) {
        return('El password es demasiado corto');
    } return('Intenta de nuevo');
}

// Switch con break
function getGrade(grade) {
    switch(grade) {
        case 'A': console.log('You got an A!') 
            break; 
        case 'B': console.log('You got an B!') 
            break; 
        case 'C': console.log('You got an C!') 
            break; 
        case 'D': console.log('You got an D!') 
            break; 
        case 'E': console.log('You got an E!') 
            break; 
        default: console.log('Your mark is not valid!');
    }
}

// Switch con return
function getGrade(grade) {
    switch(grade) {
        case 'A': return 'You got an A!';
        case 'B': return 'You got an B!';
        case 'C': return 'You got an C!';
        case 'D': return 'You got an D!';
        case 'E': return 'You got an E!';
        default: return 'Your mark is not valid!';
    }
}

const congrats = getGrade(grade);

// Encuentra al ganador
const scores = [50, 25, 0, 30, 100, 20, 10, 35, 60];

function encuentraAlGanador(scores) {
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];

    if (score === 0) {
      continue;
    }

    console.log('Tu puntaje es', score);

    if (score === 100) {
      console.log('Felicitaciones, eres el ganador');
      break;
    }
  }
}

encuentraAlGanador(scores);

// Imprimir Factura 
const electrodomesticos = [
    { nombre: 'TV', precio: 100000, color: 'Gris'},
    { nombre: 'Heladera', precio: 200000, color: 'Blanca'},
    { nombre: 'Lavarropas', precio: 80000, color: 'Blanco'},
    { nombre: 'Freezer', precio: 120000, color: 'Gris'},
    { nombre: 'Microondas', precio: 50000, color: 'Negro'},
    { nombre: 'Cocina', precio: 75000, color: 'Negro'},
]

const impuestosPorProducto = [
    { nombre: 'IVA', importe: 0.21 },
    { nombre: 'IBB', importe: 0.10 },
    { nombre: 'Tasa Municipal', importe: 0.15 },
]

function imprimirFactura(productos, impuestos) {
    let total = 0;
    let totalSinImpuestos = 0;
    // let items = [];

    for(let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const precio = producto.precio;

        const iva = precio * impuestos[0].importe;
        const ingresosBrutos = precio * impuestos[1].importe;
        const tasaMunicipal = precio * impuestos[2].importe;

        const precioConImpuestos = precio + iva + ingresosBrutos + tasaMunicipal;

        total = total + precioConImpuestos;
        totalSinImpuestos = totalSinImpuestos + precio;
    }

    return {
      precio: total,
      precioSinImpuestos: totalSinImpuestos
    };
}

const factura = imprimirFactura(electrodomesticos, impuestosPorProducto);

console.log(factura.precio);
console.log(factura.precioSinImpuestos);
