

'use strict'


var edad = 30;
var imprime = '';

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Ya eres un anciano";
    break;
    default:
        imprime = "tu edad es neutra";
    break;
}

console.log(imprime);