// hacer un prog, que muestre todos los numoer entre 2 numeros introducidos x el usuario


var numero1 = prompt("ingresa un numero", 0);
var numero2 = prompt("ingresa el segundo numero", 0);

document.write("<h1>De "+numero1+" a "+numero2+" estan estos numeros </h1>");
for(i = numero1; i<= numero2; i++){
    document.write(i+"<br/>");
}