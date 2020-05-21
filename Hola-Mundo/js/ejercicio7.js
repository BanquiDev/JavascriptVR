'use strict'

var numero = parseInt(prompt("ingresa un numero", 1));


for(var i = 0; i <= 10; i++){
    document.write(i+" x "+numero +" = "+(numero*i)+"<br/>");
}

for(var c = 1; c <=10; c++){
    for(var i = 0; i <= 10; i++){
    document.write(i+" x "+numero +" = "+(numero*i)+"<br/>");
    }
    document.write(c+" x "+numero +" = "+(numero*i)+"<br/>");
}