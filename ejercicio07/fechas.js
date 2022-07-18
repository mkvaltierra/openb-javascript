/* Crea un archivo llamado fechas.js que contenga las siguientes líneas: */


// La fecha de hoy
const today = new Date();
console.log(`Fecha: ${today}`);


// La fecha de tu nacimiento
const birth = new Date("1973-03-31");
console.log(`F.Nacimiento: ${birth.toLocaleDateString("es-Es")}`);


// Una variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const compareDates = today.getTime() > birth.getTime();
console.log(compareDates);


// Una variable que contenga el día de tu nacimiento
const birthDate = birth.getDate();
console.log(`Día cumpleaños: ${birthDate}`); // No


//  Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const birthMonth = birth.getMonth() + 1;
console.log(`Mes cumpleaños: ${birthMonth}`);


// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const birthYear = birth.getFullYear();
console.log(`Año nacimiento: ${birthYear}`);