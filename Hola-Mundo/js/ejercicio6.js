//hacer un programa que nos diga si un numero es par o impar.

var numero = parseInt(prompt("ingresa un numero", 1));


if(numero%2 == 0){
    document.write("El numero "+ numero +" es par");
}else{
    document.write("El numero "+ numero +" es impar");

}