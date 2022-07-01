
// Crea un archivo JS que contenga las siguientes líneas:


// - Una cadena de texto con tu Nombre 
let name = "Cristina";

// - Otra cadena de texto con tu Apellido 
let surname = "Valtierra";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${name} ${surname}`;
console.log(estudiante);



// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas 
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas 
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);



// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let lengthEstudiante = estudiante.length;
console.log(lengthEstudiante);



// - Una variable que contenga la primera letra del Nombre 
let firstLetter = name.slice(0,1);
console.log(firstLetter);

// - Otra variable que contenga la última letra del Apellido 
let lastLetter = surname.substring((surname.length-1), (surname.length));
console.log(lastLetter);



// - Una cadena de texto que elimine los espacios de la variable "estudiante" 
let whithoutSpaces = estudiante.replace(/\s+/g, '');
console.log(whithoutSpaces);



// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante" 
let hasName = estudiante.includes(name);
console.log(hasName);









