/* Crea un archivo JS que contenga las siguientes líneas: */


// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Pan", "Leche", "Azucar", "Tomate", "Pimiento Verde"];
console.log(`Productos Lista Compra: ${listaCompra}`);


// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);



/* Listas de Cine */
// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const favoriteFilms = [
    { 
        titulo: "Los Amantes pasajeros",
        director: "Pedro Almodovar",
        fecha: 2013
    },

    {
        titulo: "Babel",
        director: "Alejandro González Iñarritu",
        fecha: 2006
    },

    {
        titulo: "Parásitos",
        director: "Boo Jong Ho",
        fecha: 2019
    }

];
console.log(favoriteFilms);

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const allFilmsGreat2010 = favoriteFilms.filter(value => value.fecha > 2010)
console.log(allFilmsGreat2010);

//  Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const allDirectors = favoriteFilms.map( (value) => value.director );
console.log(`Directores: ${allDirectors}`);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const filmTitles = favoriteFilms.map( (value) => value.titulo );
console.log(`Titulos: ${filmTitles}`);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const direcTitle = allDirectors.concat(filmTitles);
console.log(direcTitle);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directorTitles = [...allDirectors, ...filmTitles];
console.log(directorTitles);