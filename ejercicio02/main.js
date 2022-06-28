/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

// Con Listas
const person = ["cvaltierra", 44, true, new Date("1978-03-31")];
const favoriteBook = ["Clean Javascript", "Miguel A. Gómez", new Date("2020-07-05"), "https://cleanjavascript.es/" ];
// Lista de listas
const userTotal = [person, favoriteBook];

// Visualización listas
console.log(person, favoriteBook);
console.log(userTotal);



// Con un objeto
const user = {
    name: "cvaltierra",
    age: 44,
    isDeveloper: true,
    dateBirth: new Date("1978-03-31"),
    favoriteBook: {
        title: "Clean Javascript",
        author: "Miguel A. Gómez",
        date: new Date("2020-07-05"),
        url: "https://cleanjavascript.es/"
    }
}

// Visualización de algunos datos objeto
console.log(user.favoriteBook.date);
console.log(user.name);
console.log(user.isDeveloper);
console.log(user.age);
console.log(user.dateBirth);
console.log(user.favoriteBook.url);