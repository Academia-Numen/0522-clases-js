function elevarAlCuadrado(valor) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof valor === 'number') {
                resolve({
                    valor: valor,
                    resultado: valor * valor
                });
            } else {
                reject(`Error, el valor ${valor} no es un número`);
            }
        }, 1000)
    })
}

const resultado = elevarAlCuadrado(2);

console.log(resultado);

resultado
    .then((obj) => {
        console.log(obj);
    })
    .catch((error) => {
        console.log('Error', error);
    })
    .finally(() => {
        console.log('Promesa saldada');
    })

async function funcionAsincrona(numero) {
    try {
        const resultado = await elevarAlCuadrado(2);
        console.log(resultado);
    } catch (error) {
        console.log('Error', error);
    } finally {
        console.log('Promesa saldada');
    }
}

funcionAsincrona(2)
