'use strict'

var texto = "Hola mundo soy una variable global";

function holaMundo(texto){
    var hola_mundo = "hola mundo";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero = 20;

holaMundo(texto);