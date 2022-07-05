/**
 * Crea un archivo JS que contenga las siguientes líneas:
 */

// - Una variable que contenga tu altura en centímetros (entero)
let heightCm = 171;
console.log(`Altura: ${heightCm} cm.`);

// - Una variable que contenga tu altura en metros (número de coma flotante)
let heightM = heightCm / 100;
console.log(`Altura: ${heightM} m`);


// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let weight = 77.04;
console.log(`Peso: ${weight} kg.`);

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let heightMroundUp = Math.ceil(heightM, 1);
console.log(`Altura redondeada: ${heightMroundUp} m.`);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let weightKgroundDown = Math.floor(weight, 1);
console.log(`Peso redondeado: ${weightKgroundDown} kg`);


/*- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es
* igual al máximo valor que se puede obtener en Javascript. */ 
let verfifyMaxNumber = Number.MAX_VALUE + 1 == Number.MAX_VALUE;
console.log(verfifyMaxNumber);
