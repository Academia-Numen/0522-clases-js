// Imprimir Factura 
const electrodomesticos = [
    { nombre: 'TV', precio: 100000, color: 'Gris' },
    { nombre: 'Heladera', precio: 200000, color: 'Blanca' },
    { nombre: 'Lavarropas', precio: 80000, color: 'Blanco' },
    { nombre: 'Freezer', precio: 120000, color: 'Gris' },
    { nombre: 'Microondas', precio: 50000, color: 'Negro' },
    { nombre: 'Cocina', precio: 75000, color: 'Negro' },
    { nombre: 'Cocina x', precio: 75000, color: 'Negro' },
]

const impuestosPorProducto = [
    { nombre: 'IVA', importe: 0.21 },
    { nombre: 'IBB', importe: 0.10 },
    { nombre: 'Tasa Municipal', importe: 0.15 },
    { nombre: 'Impuesto al Gas Metano', importe: 0.10 },
    { nombre: 'Impuesto x', importe: 0.40 },
]

function imprimirFactura(productos, impuestos) {
    let total = 0;
    let totalSinImpuestos = 0;
    let items = [];

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const precio = producto.precio;
        const nombre = producto.nombre;

        let precioConImpuestos = precio;

        for (let i = 0; i < impuestos.length; i++) {
            precioConImpuestos = precioConImpuestos + precio * impuestos[i].importe;
        }

        total = total + precioConImpuestos;
        totalSinImpuestos = totalSinImpuestos + precio;
        items.push({ nombre, precio, precioConImpuestos });
    }

    return {
        items,
        precio: total,
        precioSinImpuestos: totalSinImpuestos
    };
}

const factura = imprimirFactura(electrodomesticos, impuestosPorProducto);

console.log(factura);

// Block Scope
let age = 50;

if(true) {
    let age = 40;
    let name = 'John';
    let city = 'New York';
    console.log('1er bloque', age, name);
    
    if (true) {
        let age = 30;
        console.log('2do bloque', age, name);
    }
}

console.log('global', age, city);

// IMPRIMIR FACTURA (Versión con callback)
function calcularTotales(productos, i, impuestos, total, totalSinImpuestos, items) {
    const producto = productos[i];
    const precio = producto.precio;
    const nombre = producto.nombre;

    let precioConImpuestos = precio;

    for (let i = 0; i < impuestos.length; i++) {
        precioConImpuestos = precioConImpuestos + precio * impuestos[i].importe;
    }

    total = total + precioConImpuestos;
    totalSinImpuestos = totalSinImpuestos + precio;
    items.push({ nombre, precio, precioConImpuestos });
}

function imprimirFactura(productos, impuestos, calcular) {
    let total = 0;
    let totalSinImpuestos = 0;
    let items = [];

    for (let i = 0; i < productos.length; i++) {
        calcular(productos, i, impuestos, total, totalSinImpuestos, items);
    }

    return {
        items,
        precio: total,
        precioSinImpuestos: totalSinImpuestos
    };
}

const factura2 = imprimirFactura(electrodomesticos, impuestosPorProducto, calcularTotales);

console.log(factura2);
