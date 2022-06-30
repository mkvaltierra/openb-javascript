/**
 * Archivo que debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break.
 */


let number = 10;
let factorial = 1;
let i = 1;

while( i <= number){
    if(number == 0 || number == 1){
        factorial == 1;
        break;
    } else {
        factorial *= i;
    }
    i++;
}

console.log(`El factorial de ${number} es: ${factorial}`);