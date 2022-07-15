/* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */

//  Un nuevo Set con los nombres de tu familia,
const familyNameSet = new Set(['Angie', 'Jack', 'Ioly', 'Martin', 'Kris']);
console.log(familyNameSet);

// Modificación del Set añadiendo nombre existente
familyNameSet.add('Kris');
console.log(familyNameSet);

// Modificación del Set añadiendo nombre 'Javascript'
familyNameSet.add('Javascript');
console.log(familyNameSet);
