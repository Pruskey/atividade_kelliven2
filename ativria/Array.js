let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(numero => numero * 2);
let numerosMaioresQueDois = numeros.filter(numero => numero > 2);
console.log('Array original:', numeros);
console.log('Array com valores dobrados:', numerosDobrados);
console.log('Array com valores maiores que 2:', numerosMaioresQueDois);