'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var texto_hora = `
El ano es: ${year}
El mes es: ${mes}
El dia es: ${dia}
La hora es: ${hora}
`
console.log(texto_hora);

console.log(Math.ceil(Math.random()*100));