/* Crea un archivo llamado objetos.js que contenga las siguientes líneas: */

// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador).
const user = {
    name: "Cris",
    surname: "Valtierra",
    age: 44,
    height: 171,
    isDeveloper: true
}
console.log(user);

// Una variable que obtenga tu edad a partir del objeto anterior
let age = user.age;
console.log(`Edad: ${age}`);


// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const personalData = Object.values(user);
console.log(personalData);

const friends = [
    {
        name: "Eneko",
        surname: "Arrizabalaga",
        age: 45,
        height: 170,
        isDeveloper: false
    },
    {
        name: "Veronica",
        surname: "Moreno",
        age: 47,
        height: 165,
        isDeveloper: false
    }
];


// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor.
const orderedFriends = friends.sort((a, b) => b.age - a.age);
console.log(orderedFriends);

