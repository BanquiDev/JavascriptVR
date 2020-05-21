'use strict'

//JSON JavaScript Object Notation

var pelicula = {
    titulo: "Batman",
    year: 2017, 
    pais: "Estados Unidos"
};

var peliculas = [
   { titulo: "Robin",
    year: 2012,
    pais: "Argentina"}, pelicula
];
pelicula.titulo = "Superman";

window.addEventListener('load', ()=>{

    var caja_peliculas = document.querySelector("#peliculas");
    var indice;
    for( indice in peliculas){
        var p = document.createElement("p");
        p.append(peliculas[indice].titulo + " - " + peliculas[indice].year);
        caja_peliculas.append(p);
    }
});
console.log(peliculas);