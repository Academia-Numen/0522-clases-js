// Imprimir factura versión forEach
function imprimirFactura(productos, impuestos) {
    let total = 0;
    let totalSinImpuestos = 0;
    let items = [];

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const precio = producto.precio;
        const nombre = producto.nombre;

        let precioConImpuestos = precio;

        impuestos.forEach((impuesto) => {
            precioConImpuestos = precioConImpuestos + precio * impuesto.importe;
        })

        total = total + precioConImpuestos;
        totalSinImpuestos = totalSinImpuestos + precio;
        items.push({ nombre, precio, precioConImpuestos });
    };

    return {
        items,
        precio: total,
        precioSinImpuestos: totalSinImpuestos
    };
}

// Map (transformar arrays)
const nombresDeElectrodomesticos = electrodomesticos
    .map((electrodomestico) => {
        return `Hola Natalia, estás viendo actualmente el producto ${electrodomestico.nombre} que sale ${electrodomestico.precio} de color ${electrodomestico.color}`;
    });

console.log(nombresDeElectrodomesticos);

// Filter (filtrar arrays)
const productosBaratos = electrodomesticos.filter(({ precio }) => precio < 100000 && precio > 50000);

console.log(productosBaratos);

// Reduce (ejemplo Suma)
const numeros = [1, 2, 3, 4, 5, 6, 7, 10];

const callback = (suma, numero) => {
    return suma + numero;
}

const sumaReduce = numeros.reduce(callback, 0);

// Reduce (ejemplo Retornando un string)
const listaDeNombres = electrodomesticos
    .reduce((acc, electrodomestico, index) => {
        if (index === 0) return `Esta es una lista de electrodomésticos: ${electrodomestico.nombre}`;
        return `${acc}, ${electrodomestico.nombre}`;
    }, '');

console.log(listaDeNombres);

// Reduce (Imprimir factura, dividido en funciones y con reduce)

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

const imprimirFactura = (productos, impuestos) => sumarProductos(productos, impuestos);