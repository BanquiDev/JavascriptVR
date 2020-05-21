
// que pida dos numeros
// si metemos mal un numero que pida que de vuelta
// en el body, que muestre en un alerta y x l consola el resultado de sumar, restar, 
// multiplicar y dividir esos numeros




var numero1 = parseInt(prompt("ingresa un numero", 0));
var numero2 = parseInt(prompt("ingresa el segundo numero", 0));

while( numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("ingresa un numero", 0));
    var numero2 = parseInt(prompt("ingresa el segundo numero", 0));
}

var resultado = "La suma es: "+ (numero1 + numero2)+" <br/>"+
                "La resta es: "+ (numero1 - numero2)+" <br/>"+
                "La multiplicacion es: "+(numero1 * numero2)+" <br/>"+
                "La division es: "+ (numero1 / numero2)+" <br/>"

var resultado2 = "La suma es: "+ (numero1 + numero2)+" \n"+
                "La resta es: "+ (numero1 - numero2)+" \n"+
                "La multiplicacion es: "+(numero1 * numero2)+" \n"+
                "La division es: "+ (numero1 / numero2)+" \n"


document.write(resultado);

alert(resultado2);

console.log(resultado2);