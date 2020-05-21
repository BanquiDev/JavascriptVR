'use strict'

//funciones
// una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

//defino la funcion


// function calculadora(numero1, numero2, mostrar = false){

//     console.log("Hola soy la calculadora");
//     console.log("y yo voy a ser programador");

//    // return "Hola soy la calculadora";
// }
//Invoco la funcion
// calculadora();
// calculadora();
// calculadora();
// calculadora();
// calculadora();

//var numero1 = parseInt(prompt("ingresa un numero", 0));
//var numero2 = parseInt(prompt("ingresa el segundo numero", 0));

while(isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("ingresa un numero", 0));
    var numero2 = parseInt(prompt("ingresa el segundo numero", 0));
}

function porConsola( numero1, numero2){
    console.log("Suma: "+ (numero1 + numero2)+"\n");
    console.log("Resta: "+ (numero1 - numero2)+"\n");
    console.log("Producto: "+ (numero1 * numero2)+"\n");
    console.log("Division: "+ (numero1 / numero2)+"\n");

}

function porPantalla( numero1, numero2){
    document.write("Suma: "+ (numero1 + numero2)+"</br>");
    document.write("Resta: "+ (numero1 - numero2)+"</br>");
    document.write("Producto: "+ (numero1 * numero2)+"</br>");
    document.write("Division: "+ (numero1 / numero2)+"</br>");

}


function calculadora(numero1, numero2, mostrar = false){

    if(mostrar == false){
        porConsola(numero1, numero2);

    }else{
        porPantalla(numero1, numero2);
    }

    return true;
}

calculadora(30, 25, true);

calculadora(numero1, numero2 );