'use strict'

// mostrar todos los numeros impares que hay entre los numeros introducidos x el usuario

var numero1 = prompt("ingresa un numero", 0);
var numero2 = prompt("ingresa el segundo numero", 0);

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros </h1>");
while(numero1 < numero2){
    numero1++;
    if(numero1%2 != 0 ){
        console.log(numero1 +" es impar");
    }
}