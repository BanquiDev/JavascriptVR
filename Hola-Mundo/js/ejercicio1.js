//dos numeros cual es el mayor, el menor, y si son iguales

var numero_1 = parseInt(prompt("introduce el primer numero", 0));

var numero_2 = parseInt(prompt("introduce el segundo numero", 0));

console.log(numero_1, numero_2);

while (numero_2 <= 0 || numero_1 <= 0 || isNaN(numero_1) || isNaN(numero_2)){
    numero_1 = parseInt(prompt("introduce el primer numero", 0));

    numero_2 = parseInt(prompt("introduce el segundo numero", 0));
    

}
if(numero_1 == numero_2){
    alert("los numeros son iguales");
}else if(numero_1 > numero_2){
    alert("El numero mayor es "+ numero_1);
    alert("El numero menor es "+ numero_2);
}else {
    alert("El numero mayor es "+ numero_2);
    alert("El numero menor es "+ numero_1);
}