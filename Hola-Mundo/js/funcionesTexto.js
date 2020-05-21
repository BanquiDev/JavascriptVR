'use strict'

var numero = 444;
var texto1 = " curso buenvenido al curso           ";
var texto2 = "es muy victor curso         ";


var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto1.toUpperCase();
//longitud
var nombre = "Esteban";
    nombre = ["hola", "chau"];

//console.log( nombre.length);

// concatenar = unir textos
 var textoTotal = texto1 +" "+ texto2;

 //console.log(textoTotal);
//busca el indice donde esta la palabra
 var busqueda = texto1.indexOf('curso');

 //busca  el indice donde aparece la palbra
 var busqueda2  = texto2.search('buen');

 // busca lo que pidas, pero devuelve una array(coleccion), con los resultados que encuentre. 
 // si quiero que me busque mas de 1 coincidencia lo pongo entre // y con g, de global. Ver Regex.
 var busqueda3 = textoTotal.match(/curso/g);

 // me busca en el caracter 14, y me saca los 5 caracteres siguientes. Encuentra "curso"
 var busqueda4 = textoTotal.substr(14, 5);

 // sirve para sacar una letra en concreto
 var busqueda5 = textoTotal.charAt(44);

 //busco texto en el inicio del string, devuelve un boolean.
 var busqueda6 = textoTotal.startsWith("victor");
 var busqueda6 = textoTotal.endsWith("victor");
 var busqueda6 = textoTotal.includes("victor");

 

 ////Transformacion de texto

 var busqueda7 = textoTotal.replace("victor", "bueno");


 var busqueda7 = textoTotal.slice(20, 30);

 var busqueda7 = textoTotal.split(" ");

 var busqueda7 = textoTotal.trim();

 console.log(busqueda7);