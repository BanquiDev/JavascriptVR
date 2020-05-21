'use strict'

/*
1- pida 6 numeros x pantalla y los meta en un array
2- Mostrar el array entero, todos sus elementos en el cuerpo de la pagina y en la consola.
3- Sacar el array ordenado y mostrarlo
4- invertir su orden y mostrarlo
5- cuantos elementos tiene el array
6- un valor introducido x el usuario, que diga si lo encuentra y su indice.

*/
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del Array "+ textoCustom+"</h1>");
    document.write("<ul>")
    elementos.forEach((elemento) => {
        document.write("<li>"+elemento+"</li>");
    })
    document.write("</ul>")

}
var numeros = [];

    for(var i = 0; i < 6; i++){
       numeros.push(parseInt(prompt("Ingresa un numero: ")));
    }

mostrarArray(numeros);
 var largo = numeros.length;
 console.log(numeros);
 console.log(largo);

 var valor = numeros.find(numero => numero == "3");
 var index = numeros.findIndex(index => index == 3);

 console.log(valor);
 console.log(index);

 numeros.sort((a, b)=> a - b);
 mostrarArray(numeros, "ordenados");

 numeros.reverse();
 mostrarArray(numeros, "descendente");