'use strict'

window.addEventListener('load', function(){
    //timers
    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set interval ejecutado");
            var encabezado = document.querySelector('#encabezado');
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
            document.querySelector("h1").style.fontSize = "30px";
        }, 1000);
        return tiempo;
    }
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', () => {
        alert("has parado el intervalo!!");
        clearInterval(tiempo);
    });
    var start = document.querySelector('#start');
    start.addEventListener('click', () => {
        alert('has inciado el bucle');
        intervalo();
    });
});