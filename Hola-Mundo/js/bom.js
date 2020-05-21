'use strict'

//browser object model
function getBom(){
console.log(screen.height);
console.log(screen.width);
console.log(window.location);
}

getBom();

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url);
}