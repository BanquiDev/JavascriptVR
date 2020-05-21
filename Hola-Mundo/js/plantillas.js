'use strict'
/*
var nombre = prompt("Mete tu nombre");
var apellido = prompt("Ingresa tu apellido");


//var texto = "Mi nombre es "+ nombre +" y mi apellido es "+ apellido;

var texto = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mi apellido es: ${apellido}</h3>

`;

document.write(texto);

var array = ["pedro", "juan", "roberto"];

var elemento = parseInt(prompt("que elemento del array quieres", 0));
if(elemento >= array.length){
    alert("Introduce el numero correcto menor que: "+ array.length);
    elemento = parseInt(prompt("que elemento del array quieres", 0));
}else{
    alert("el usuario seleccionado es: "+array[elemento]);
}
*/
var array = ["pedro", "juan", "roberto"];

 document.write("<h1>Lenguajes de programacion de 2018</h1>");
 document.write("<ul>");
 for(var i = 0; i< array.length; i++){
     document.write("<li>"+array[i]+"</li>")
 }
document.write("</ul>");

//foreach
document.write("<ul>");
array.forEach( (element, indice, arr)=> {
    document.write("<li>"+indice +" "+element+"</li>");
    console.log(arr);
});
document.write("</ul>");

// var elemento = "";
// do{
//     elemento = prompt("ingresa un nombre:")
//     array.push(elemento)
// }while(elemento != "Acabar");
// array.pop();

console.log(array);
// arrray a texto
var texto = array.join();

console.log(texto);

var cadena =  "texto1, texto2, texto4";

var cadena_array = cadena.split(", ");

console.log(cadena_array);

console.log(array.sort());

//for in
for (const arr in array) {
    if (array.hasOwnProperty(arr)) {
        const element = array[arr];
        console.log(arr);
        document.write("<li>"+element+"</li>");
    }
}

// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }

//busqueda
var lenguajes = ["PHP", "JavaScript", "Python", "C++", "C#"];

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

console.log(busqueda);
//precios

var precios = [10, 12, 4, 5, 200];

var busqueda2 = precios.some(precio => precio <= 12 );

console.log(busqueda2);