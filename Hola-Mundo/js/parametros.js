
'use strict'
//parametros REST, le agregas ...adelante del parametro 
//y te guarda todos los valores que metas en un array

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1: "+ fruta1);
    console.log("Fruta 2: "+ fruta2);
    console.log(restoDeFrutas);
}

listadoFrutas("manzana", "banana", "zandia", "peras", "melon");

var frutas = ["uva", "durazno"];
// si le pongo ... delante del parametro ingresado me hace un Spread, 
// y toma el primer valor como param1, y el segundo como param2, y los demas en un array, 
// siendo el 3ero un parametro REST

listadoFrutas(...frutas, "banana", "pera", "tomate");