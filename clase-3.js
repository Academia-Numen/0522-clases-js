// Objetos Mobile
const mobile = {
    colors: ['blue', 'black', 'red'],
    model: 'Samsung',
    price: 140000,
    size: {
        height: '110 mm',
        width: '65 mm',
    },
    weight: '200 gr',
    system: 'Android 12',
};

const mobile2 = {
    colors: ['blue', 'black', 'red'],
    model: 'Nokia',
    price: 100000,
    size: {
        height: '105 mm',
        width: '60 mm',
    },
    weight: '160 gr',
    system: 'Android 10',
};

const mobiles = [mobile, mobile2];

// Creando una variable a partir de otra que tiene un valor primitivo
let score = 10;
console.log('Score 1 valor inicial', score);

let score2 = score;
console.log('Score 2 valor inicial', score2);

score = 20;
console.log('Score 1 post modificacion', score);
console.log('Score 2 post modificacion score 1', score2);

// Creando un objeto a partir de otro objeto 
let user = {
    nombre: 'Juan', 
    score: 100,
};
console.log('User 1 valor inicial', user);

let user2 = user;
console.log('User 2 valor inicial', user2);

user.nombre = 'Juana';
user.score = 200;

console.log('User 1 post modificacion', user);
console.log('User 2 post modificacion user 1', user2);