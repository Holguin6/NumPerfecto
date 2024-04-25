function calcularSumaDivisores(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma;
}

function esNumeroPerfecto(numero) {
    let sumaDivisores = calcularSumaDivisores(numero);
    return sumaDivisores === numero;
}

function imprimirResultado(numero, esPerfecto) {
    if (esPerfecto) {
        console.log(numero + " es un número perfecto.");
    } else {
        console.log(numero + " no es un número perfecto.");
    }
}

let numero1 = 28;
let numero2 = 6;
let numero3 = 12;

imprimirResultado(numero1, esNumeroPerfecto(numero1));
imprimirResultado(numero2, esNumeroPerfecto(numero2));
imprimirResultado(numero3, esNumeroPerfecto(numero3));