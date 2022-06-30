/**
 *  Archivo que debe calcular el factorial de 10 utilizando un bucle while.
 */

let number = 10;
let factorial = 1;
let i = 1;

while (i <= number){
    factorial *= i;
    i++;
}

console.log(`El factorial de ${number} es: ${factorial}`);